/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayNavigationBar from '../src/index';
import ClayLink from '@clayui/link';
import ClayButton from '@clayui/button';
import classNames from 'classnames';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const items = [
	{
		active: true,
		href: '#',
		label: 'Test 1',
	},
	{
		active: false,
		href: '#',
		label: 'Test 2',
	},
	{
		active: false,
		href: '#',
		label: 'Test 3',
	},
	{
		active: false,
		href: '#',
		label: 'Test 4',
	},
];

const activeLabel = items.find((item) => item.active === true);

storiesOf('ClayNavigationBar', module)
	.add('should render Navigation Bar with another React Component as child of each items', () => (
		<ClayNavigationBar
			activeLabel={activeLabel ? activeLabel.label : 'cachorro'}
			inverted={boolean('Inverted: ', false)}
			spritemap={spritemap}
		>
			<ClayNavigationBar.ListItem label="Item 1" active={boolean('Active 1: ', false)}>
				<ClayLink
					className="nav-link"
					displayType="secondary"
					href="#1"
				>
					<span className="navbar-text-truncate">
						{`Item 1`}
					</span>
				</ClayLink>
			</ClayNavigationBar.ListItem>

			<ClayNavigationBar.ListItem label="Item 2" active={boolean('Active 2: ', false)}>
				<ClayButton
					block
					className={classNames('nav-link')}
					displayType="unstyled"
					small
				>
					<span className="navbar-text-truncate">
						{`Item 2`}
					</span>
				</ClayButton>
			</ClayNavigationBar.ListItem>

			<ClayNavigationBar.ListItem label="Item 3" active={boolean('Active 3: ', true)}>
				<ClayLink
					className="nav-link"
					displayType="secondary"
					href="#3"
				>
					<span className="navbar-text-truncate">
						{`Item 3`}
					</span>
				</ClayLink>
			</ClayNavigationBar.ListItem>
		</ClayNavigationBar>


	));