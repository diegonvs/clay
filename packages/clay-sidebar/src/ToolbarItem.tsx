/* eslint-disable no-console */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

interface IToolbarItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
	active?: boolean;
	href?: string;
	icon: string;
	label: string;
	panelId: number;
	renderIcon?: Function;
	spritemap: string;
}

const ToolbarElement = ({
	active = false,
	href,
	icon,
	label,
	spritemap,
	...otherProps
}: IToolbarItemProps) =>
	href ? (
		<a
			aria-label={label}
			className={classNames({active})}
			href={href}
			{...otherProps}
		>
			<ClayIcon spritemap={spritemap} symbol={icon} />
		</a>
	) : (
		<ClayButtonWithIcon
			aria-label={label}
			className="tbar-btn"
			spritemap={spritemap}
			symbol={icon}
			{...otherProps}
		/>
	);

const ToolbarItem: React.FunctionComponent<IToolbarItemProps> = props => {
	return (
		<ul className="tbar-nav">
			<li
				className={classNames('tbar-item', {
					active: props.active,
				})}
			>
				<ToolbarElement {...props} />
			</li>
		</ul>
	);
};

ToolbarItem.displayName = 'ToolbarItem';

export default ToolbarItem;
