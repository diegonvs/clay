/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayTabs from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('ClayTabs', module).add('default', () => {
	const ClayTabsWithState = (props: any) => {
		const [activeValue, setActiveValue] = React.useState<number>(0);

		return (
			<>
				<ClayTabs
					active={activeValue}
					modern
					onValueChange={(val: number) => setActiveValue(val)}
				>
					<ClayTabs.Item tabName="Teste 1" />
					<ClayTabs.Item tabName="Teste 2" />
					<ClayTabs.Item tabName="Teste 3" />
					<ClayTabs.Item tabName="Teste 4" />
				</ClayTabs>
				<div className="tab-content">
					<ClayTabs.TabPane active={activeValue} fade index={0}>
						1. Single origin, extra id beans, eu to go, skinny americano
						ut aftertaste sugar. At americano, viennese variety iced
						grounds, grinder froth and pumpkin spice aromatic. Cultivar
						aged lungo, grounds café au lait, skinny, blue mountain, in
						variety sugar shop roast. Wings, blue mountain affogato
						organic cappuccino java plunger pot. Single shot variety
						pumpkin spice seasonal skinny barista carajillo robust
						cream.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane active={activeValue} fade index={1}>
						2. Single origin, extra id beans, eu to go, skinny americano
						ut aftertaste sugar. At americano, viennese variety iced
						grounds, grinder froth and pumpkin spice aromatic. Cultivar
						aged lungo, grounds café au lait, skinny, blue mountain, in
						variety sugar shop roast. Wings, blue mountain affogato
						organic cappuccino java plunger pot. Single shot variety
						pumpkin spice seasonal skinny barista carajillo robust
						cream.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane active={activeValue} fade index={2}>
						3. Single origin, extra id beans, eu to go, skinny americano
						ut aftertaste sugar. At americano, viennese variety iced
						grounds, grinder froth and pumpkin spice aromatic. Cultivar
						aged lungo, grounds café au lait, skinny, blue mountain, in
						variety sugar shop roast. Wings, blue mountain affogato
						organic cappuccino java plunger pot. Single shot variety
						pumpkin spice seasonal skinny barista carajillo robust
						cream.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane active={activeValue} fade index={3}>
						4. Single origin, extra id beans, eu to go, skinny americano
						ut aftertaste sugar. At americano, viennese variety iced
						grounds, grinder froth and pumpkin spice aromatic. Cultivar
						aged lungo, grounds café au lait, skinny, blue mountain, in
						variety sugar shop roast. Wings, blue mountain affogato
						organic cappuccino java plunger pot. Single shot variety
						pumpkin spice seasonal skinny barista carajillo robust
						cream.
					</ClayTabs.TabPane>
				</div>
			</>
		)
	}

	return (
		<ClayTabsWithState />		
	);
});
