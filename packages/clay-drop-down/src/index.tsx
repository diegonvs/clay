/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

import Action from './Action';
import Caption from './Caption';
import Divider from './Divider';
import Group from './Group';
import Help from './Help';
import Item from './Item';
import ItemList from './ItemList';
import Menu, {Align} from './Menu';
import Search from './Search';

interface Props extends React.HTMLAttributes<HTMLDivElement | HTMLLIElement> {
	/**
	 * Flag to indicate if the DropDown menu is active or not.
	 */
	active: boolean;

	/**
	 * Default position of menu element. Values come from `metal-position`.
	 */
	alignmentPosition?: number;

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: 'div' | 'li';

	/**
	 * Flag to indicate if menu contains icon symbols on the right side.
	 */
	hasRightSymbols?: boolean;

	/**
	 * Flag to indicate if menu contains icon symbols on the left side.
	 */
	hasLeftSymbols?: boolean;

	/**
	 * Callback for when the active state changes.
	 */
	onActiveChange: (val: boolean) => void;

	/**
	 * Element that is used as the trigger which will activate the dropdown on click.
	 */
	trigger: React.ReactElement;
}

const ClayDropDown: React.FunctionComponent<Props> & {
	Action: typeof Action;
	Caption: typeof Caption;
	Divider: typeof Divider;
	Group: typeof Group;
	Help: typeof Help;
	Item: typeof Item;
	ItemList: typeof ItemList;
	Menu: typeof Menu;
	Search: typeof Search;
} = ({
	active = false,
	alignmentPosition,
	children,
	className,
	containerElement: ContainerElement = 'div',
	hasLeftSymbols,
	hasRightSymbols,
	onActiveChange,
	trigger,
	...otherProps
}) => {
	const triggerElementRef = React.useRef<HTMLButtonElement>(null);
	const menuElementRef = React.useRef<HTMLDivElement>(null);

	return (
		<ContainerElement
			{...otherProps}
			className={classNames('dropdown', className)}
		>
			<span ref={triggerElementRef} style={{display: 'inline-block'}}>
				{React.cloneElement(trigger, {
					className: classNames(
						'dropdown-toggle',
						trigger.props.className
					),
					onClick: () => onActiveChange(!active),
				})}
			</span>

			<Menu
				active={active}
				alignElementRef={triggerElementRef}
				alignmentPosition={alignmentPosition}
				hasLeftSymbols={hasLeftSymbols}
				hasRightSymbols={hasRightSymbols}
				onSetActive={onActiveChange}
				ref={menuElementRef}
			>
				{children}
			</Menu>
		</ContainerElement>
	);
};

ClayDropDown.Action = Action;
ClayDropDown.Caption = Caption;
ClayDropDown.Divider = Divider;
ClayDropDown.Group = Group;
ClayDropDown.Help = Help;
ClayDropDown.Menu = Menu;
ClayDropDown.Item = Item;
ClayDropDown.ItemList = ItemList;
ClayDropDown.Search = Search;

export {Align};

export default ClayDropDown;
