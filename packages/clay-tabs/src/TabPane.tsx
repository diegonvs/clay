/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	active: number;

	children?: any;

	forwardRef?: React.Ref<any>;

	fade?: boolean;

	index: number;
}

export const TabPane: React.FunctionComponent<IProps> | null = ({
	active = 0,
	children,
	className,
	fade,
	forwardRef,
	index = 0,
	...otherProps
}: IProps) => {
	console.log('active: ', active);
	console.log('index: ', index);
	console.log(children);
	if (index === active) {
		return (
			<div
				className={classNames(
					'tab-pane',
					{
						'active': active === index,
						fade,
						'show': active === index,
					},
					className
				)}
				ref={forwardRef}
				role="tabpanel"
				{...otherProps}
			>
				{children}
			</div>
		);
	}

	return null;
};

export default React.forwardRef((props: IProps, ref?) => (
	<TabPane {...props} forwardRef={ref} />
));
