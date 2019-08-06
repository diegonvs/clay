/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayTabs from '../src';
import React from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import {ElementType} from '../src/types';
import {storiesOf} from '@storybook/react';

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	trigger,
	...others
}) => {
	const [active, setActive] = React.useState<boolean>(false);

	return (
		<ClayDropDown
			active={active}
			alignmentPosition={Align.BottomLeft}
			onActiveChange={newVal => setActive(newVal)}
			trigger={trigger}
			{...others}
		>
			{children}
		</ClayDropDown>
	);
};

const tabElements = {
	anchor: 'anchor',
	button: 'button',
};

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayTabs', module).add('default', () => {
	const ClayTabsWithState = () => {
		const [activeValue, setActiveValue] = React.useState<number>(0);

		const onClickImpl = (val: number) => setActiveValue(val);

		const dropdownTabsItems = [
			{
				disabled: true,
				itemKey: 5,
				label: 'Tab 6',
				onClick: onClickImpl,
			},
			{
				itemKey: 6,
				label: 'Tab 7',
				onClick: onClickImpl,
			},
			{
				itemKey: 7,
				label: 'Tab 8',
				onClick: onClickImpl,
			},
		];

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
					spritemap={spritemap}
				>
					<ClayTabs.Item
						disabled={boolean('Disable first tab', false)}
						itemKey={0}
						onClick={onClickImpl}
						tabName="Tab 1"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable second tab', true)}
						itemKey={1}
						onClick={onClickImpl}
						tabName="Tab 2"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable third tab', false)}
						itemKey={2}
						onClick={onClickImpl}
						tabName="Tab 3"
					/>
					<ClayTabs.Item
						disabled={boolean('Disable fourth tab', false)}
						itemKey={3}
						onClick={onClickImpl}
						tabName="Tab 4"
					/>

					<DropDownWithState
						trigger={
							<ClayTabs.Item
								disabled={boolean('Disable fourth tab', false)}
								dropdown
								itemKey={4}
								onClick={onClickImpl}
								tabName="Tab 5"
							/>
						}
					>
						<ClayDropDown.ItemList>
							{dropdownTabsItems.map(
								(
									{
										disabled = false,
										itemKey,
										label,
										onClick,
									},
									i
								) => {
									return (
										<ClayDropDown.Item
											active={activeValue === itemKey}
											disabled={disabled}
											key={i}
											onClick={() => {
												onClick(itemKey);
											}}
											spritemap={spritemap}
											symbolRight={
												activeValue === itemKey
													? 'check'
													: undefined
											}
										>
											{label}
										</ClayDropDown.Item>
									);
								}
							)}
						</ClayDropDown.ItemList>
					</DropDownWithState>
				</ClayTabs>
				<ClayTabs.Content
					activeIndex={activeValue}
					fade={boolean('Fade', true)}
				>
					<ClayTabs.TabPane keyValue={0}>
						{`1. Single origin, extra id beans, eu to go, skinny
						americano ut aftertas te sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={1}>
						{`2. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={2}>
						{`3. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={3}>
						{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={4}>
						{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={5}>
						{`6. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={6}>
						{`7. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane keyValue={7}>
						{`8. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);
	};

	return <ClayTabsWithState />;
});
