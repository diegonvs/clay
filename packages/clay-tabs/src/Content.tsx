/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	active: number;

	children: any;
}

const Content: React.FunctionComponent<IProps> = ({
	active = 0,
	children,
	className,
	...otherProps
}: IProps) => {
	const activeChild = children.filter(
		(child: React.ReactElement, index: number) => {
			if (!React.isValidElement(child)) {
				return false;
			}

			if (active === index) {
				return true;
			}
		}
	);

	return (
		<div className={classNames('tab-content', className)} {...otherProps}>
			{React.cloneElement(activeChild[0], {
				...activeChild[0].props,
				active: true,
				key: 'tabElement',
			})}
		</div>
	);
};

export default Content;
