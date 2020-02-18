/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
	show?: boolean;
}

const Panel: React.FunctionComponent<IPanelProps> = ({
	children,
	show = false,
	...otherProps
}) => {
	if (show) {
		return (
			<div
				className={classNames('sidebar sidebar-light', {
					show,
				})}
				{...otherProps}
			>
				{children}
			</div>
		);
	}

	return null;
};

Panel.displayName = 'Panel';

export default Panel;
