/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Content from './Content';
import Context, {IContext} from './Context';
import Item from './Item';
import React from 'react';
import TabPane from './TabPane';

interface IProps extends React.HTMLAttributes<HTMLUListElement>, IContext {
	/**
	 * Justify the nav items according the tab content.
	 */
	justified?: boolean;

	/**
	 * Applies a modern style to the tab.
	 */
	modern?: boolean;
}

export const ClayTabs: React.FunctionComponent<IProps> & {
	Content: typeof Content;
	TabPane: typeof TabPane;
	Item: typeof Item;
} = ({
	activeIndex,
	children,
	className,
	component = 'button',
	justified,
	modern = false,
	spritemap,
	...otherProps
}: IProps) => {
	const context = {
		activeIndex: activeIndex || 0,
		component: component || 'button',
		spritemap,
	};

	return (
		<Context.Provider value={context}>
			<ul
				className={classNames(
					`nav`,
					{
						'nav-justified': justified,
						'nav-tabs': !modern,
						'nav-underline': modern,
					},
					className
				)}
				role="tablist"
				{...otherProps}
			>
				{children}
			</ul>
		</Context.Provider>
	);
};

ClayTabs.Content = Content;

ClayTabs.TabPane = TabPane;

ClayTabs.Item = Item;

export default ClayTabs;
