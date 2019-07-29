/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import TabPane from './TabPane';
import Item from './Item';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	active?: number;

	justified?: boolean;

	modern?: boolean;

	onValueChange?: (val: number) => void;
}

export const ClayTabs: React.FunctionComponent<IProps> & {
	TabPane: typeof TabPane;
	Item: typeof Item;
} = ({
	active = 0,
	children,
	className,
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
					active: active === index,
					key: index,
					onClick: () => {
						console.log('index from onClick: ', index);
						onValueChange && onValueChange(index)
					}
				});
			})}
		</ul>
	);
};

ClayTabs.TabPane = TabPane;

ClayTabs.Item = Item;

export default ClayTabs;
