/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useEffect, useState} from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	active?: boolean;

	forwardRef?: React.Ref<any>;

	fade?: boolean;
}

const delay = (fn: Function) => {
	return setTimeout(() => {
		fn();
	}, 300);
};

export const TabPane: React.FunctionComponent<IProps> | null = ({
	active,
	children,
	className,
	fade,
	forwardRef,
	...otherProps
}: IProps) => {
	const [visibleClassShow, setVisibleClassShow] = useState<boolean>(false);

	useEffect(() => {
		const timer = delay(() => {
			setVisibleClassShow(true);
		});

		return () => {
			setVisibleClassShow(false);
			clearTimeout(timer);
		};
	}, [children]);

	return (
		<div
			className={classNames(
				'tab-pane',
				{
					active,
					fade,
					show: active && visibleClassShow,
				},
				className
			)}
			ref={forwardRef}
			role="tabpanel"
			{...otherProps}
		>
			{visibleClassShow && children}
		</div>
	);
};

export default React.forwardRef((props: IProps, ref?) => (
	<TabPane {...props} forwardRef={ref} />
));
