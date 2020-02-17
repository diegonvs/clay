/* eslint-disable no-console */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import Divider from './Divider';
import Search from './Search';
import Toolbar from './Toolbar';
import ToolbarItems from './ToolbarItems';

type TDirection = 'left' | 'right';

type TDisplayType = 'dark' | 'light';

type TOpeningMode = 'overlay' | 'hover';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	direction?: TDirection;
	displayType?: TDisplayType;
	openingMode?: TOpeningMode;
}

const ClaySidebar: React.FunctionComponent<IProps> = ({
	children,
	direction = 'left',
	displayType = 'light',
	openingMode = 'overlay',
	...otherProps
}) => {
	console.log({direction, displayType, openingMode});

	return (
		<div className="sidenav-fixed sidenav-fixed-end" {...otherProps}>
			<div className="sidebar sidebar-light">{children}</div>
		</div>
	);
};

export default Object.assign(ClaySidebar, {
	Divider,
	Search,
	Toolbar,
	ToolbarItems,
});
