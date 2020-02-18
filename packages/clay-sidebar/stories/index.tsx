/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React, {useState} from 'react';

import ClaySidebar from '../src';

const panels = [
	{
		icon: 'chip',
		label: 'Infrastructure',
		panelId: 0,
	},
	{
		icon: 'calendar',
		label: 'Calendar',
		panelId: 1,
	},
	{
		icon: 'bolt',
		label: 'Speed',
		panelId: 2,
	},
];

storiesOf('Components|ClaySidebar', module).add('default', () => {
	const [activePanelId, setActivePanelId] = useState<number>(0);

	return (
		<ClaySidebar>
			<ClaySidebar.Panel show={activePanelId === 0}>
				<ClaySidebar.Search spritemap={spritemap} />
				<h1>{'Panel 1'}</h1>
			</ClaySidebar.Panel>
			<ClaySidebar.Panel show={activePanelId === 1}>
				<ClaySidebar.Search spritemap={spritemap} />
				<h1>{'Panel 2'}</h1>
			</ClaySidebar.Panel>
			<ClaySidebar.Panel show={activePanelId === 2}>
				<ClaySidebar.Search spritemap={spritemap} />
				<h1>{'Panel 3'}</h1>
			</ClaySidebar.Panel>
			<ClaySidebar.Toolbar>
				{panels.map(({icon, label, panelId}) => (
					<ClaySidebar.ToolbarItem
						icon={icon}
						key={`ToolbarItem${panelId}`}
						label={label}
						onClick={() => setActivePanelId(panelId)}
						panelId={panelId}
						spritemap={spritemap}
					/>
				))}
			</ClaySidebar.Toolbar>
		</ClaySidebar>
	);
});
