/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayDropDown, {ClayDropDownWithBasicItems} from '@clayui/drop-down';
import ClayTabs from '../src';
import React from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import {ElementType} from '../src/types';
import {storiesOf} from '@storybook/react';

const tabElements = {
	anchor: 'anchor',
	button: 'button',
};

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayTabs', module).add('default', () => {
	const ClayTabsWithState = () => {
		const [activeValue, setActiveValue] = React.useState<number>(0);

		return (
			<>
				<ClayTabs
					activeIndex={activeValue}
					component={
						select(
							'Tab Item Component',
							tabElements,
							'button'
						) as ElementType
					}
					justified={boolean('Justified', false) as false}
					modern={boolean('Modern', true) as true}
					onValueChange={(val: number) => setActiveValue(val)}
				>
					<ClayTabs.Item
						active
						disabled={boolean('Disable first tab', false)}
						tabName="Tab 1"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable second tab', true)}
						tabName="Tab 2"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable third tab', false)}
						tabName="Tab 3"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable fourth tab', false)}
						tabName="Tab 4"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable dropdown tab', false)}
						dropdown
						tabName="Tab 5"
					/>

					{/* <ClayDropDownWithBasicItems
						items={[
							{
								href: '#1',
								label: 'Tab 5',
								symbolRight: 'check',
							},
							{
								href: '#2',
								label: 'Tab 6',
								symbolRight: 'check',
							},
							{
								href: '#3',
								label: 'Tab 7',
								symbolRight: 'check',
							}
						]}
						spritemap={spritemap}
						trigger={
							<ClayTabs.Item
								disabled={boolean('Disable dropdown tab', false)}
								dropdown
								tabName="Tab 5"
							/>
						}
					/> */}
				</ClayTabs>
				<ClayTabs.Content
					activeIndex={activeValue}
					fade={boolean('Fade', true)}
				>
					<ClayTabs.TabPane>
						1. Single origin, extra id beans, eu to go, skinny
						americano ut aftertas te sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						2. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						3. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);
	};

	return <ClayTabsWithState />;
});
