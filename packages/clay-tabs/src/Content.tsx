/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Receives a number that indicates the content index that will be rendered.
	 */
	activeIndex: number;

	/**
	 * Flag to indicate if `fade` classname that applies an fading animation should be applied.
	 */
	fade?: boolean;
}

const Content: React.FunctionComponent<IProps> = ({
	activeIndex = 0,
	children,
	className,
	fade = false,
	...otherProps
}: IProps) => {
	return (
		<div className={classNames('tab-content', className)} {...otherProps}>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return null;
				}

				return React.cloneElement(child, {
					...child.props,
					active: activeIndex === index,
					key: index,
					fade,
				});
			})}
		</div>
	);
};

export default Content;
