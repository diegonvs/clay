/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Content from './Content';
import Item from './Item';
import React from 'react';
import TabPane from './TabPane';
import {ElementType} from './types';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Receives a number that indicates the content index that will be rendered.
	 */
	activeIndex: number;

	/**
	 * Tab Item component to render. Can be an 'anchor' or a 'button'.
	 */
	component?: ElementType;

	/**
	 * Justify the nav items according the tab content.
	 */
	justified?: boolean;

	/**
	 * Applies a modern style to the tab.
	 */
	modern?: boolean;

	/**
	 * Callback to be used when clicking to a Tab Item.
	 */
	onValueChange?: (val: number) => void;
}

export const ClayTabs: React.FunctionComponent<IProps> & {
	Content: typeof Content;
	TabPane: typeof TabPane;
	Item: typeof Item;
} = ({
	activeIndex = 0,
	children,
	className,
	component = 'button',
	justified,
	modern = false,
	onValueChange,
	...otherProps
}: IProps) => {
	return (
		<ul
			className={classNames(`nav`, {
				'nav-justified': justified,
				'nav-tabs': !modern,
				'nav-underline': modern,
			})}
			role="tablist"
			{...otherProps}
		>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return null;
				}
				return React.cloneElement(child, {
					...child.props,
					active: activeIndex === index,
					component,
					key: index,
					onClick: () => {
						console.log(index);
						return onValueChange && onValueChange(index);
					},
				});
			})}
		</ul>
	);
};

ClayTabs.Content = Content;

ClayTabs.TabPane = TabPane;

ClayTabs.Item = Item;

export default ClayTabs;
