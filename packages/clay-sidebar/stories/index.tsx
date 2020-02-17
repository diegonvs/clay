/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React from 'react';

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
];

storiesOf('Components|ClaySidebar', module).add('default', () => (
	<ClaySidebar>
		<ClaySidebar.Toolbar>
			<ClaySidebar.ToolbarItems panels={panels} spritemap={spritemap} />
		</ClaySidebar.Toolbar>
		<ClaySidebar.Search spritemap={spritemap} />
	</ClaySidebar>
));
