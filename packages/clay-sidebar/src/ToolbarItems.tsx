/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React, {useState} from 'react';

interface ISidebarItem {
	href?: string;
	icon: string;
	label: string;
	panelId: number;
	panels?: Array<ISidebarItem>;
	renderIcon?: Function;
}

interface IToolbarItemsProps extends React.HTMLAttributes<HTMLUListElement> {
	panels: Array<ISidebarItem>;
	spritemap: string;
}

const ToolbarItems: React.FunctionComponent<IToolbarItemsProps> = ({
	panels,
	spritemap,
	...otherProps
}) => {
	const [activePanelId, setActivePanelId] = useState<Number>(0);

	const ToolbarElement = ({
		href,
		icon,
		label,
		panelId,
		...otherProps
	}: ISidebarItem) =>
		href ? (
			<>
				<a
					className={classNames({active: activePanelId === panelId})}
					href={href}
					{...otherProps}
				>
					<ClayIcon spritemap={spritemap} symbol={icon} />
				</a>
				{label}
			</>
		) : (
			<>
				<ClayButtonWithIcon
					className="tbar-btn"
					onClick={() =>
						panelId !== activePanelId && setActivePanelId(panelId)
					}
					spritemap={spritemap}
					symbol={icon}
					{...otherProps}
				/>
				{label}
			</>
		);

	return (
		<ul className="tbar-nav" {...otherProps}>
			{panels.map(({href, icon, label, panelId}) => (
				<li
					className={classNames('tbar-item', {
						active: activePanelId === panelId,
					})}
					key={icon}
				>
					<ToolbarElement
						href={href}
						icon={icon}
						label={label}
						panelId={panelId}
					/>
				</li>
			))}
		</ul>
	);
};

ToolbarItems.displayName = 'ToolbarItems';

export default ToolbarItems;
