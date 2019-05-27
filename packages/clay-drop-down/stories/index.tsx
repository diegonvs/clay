/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayButton from '@clayui/button';
import ClayCheckbox from '@clayui/checkbox';
import ClayDropDown, {Align} from '../src';
import ClayRadioGroup from '@clayui/radio-group';
import React from 'react';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';
import {select} from '@storybook/addon-knobs';
const spritemap = require('clay-css/lib/images/icons/icons.svg');

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={select(
				'Alignment Position',
				{
					BottomCenter: Align.BottomCenter,
					BottomLeft: Align.BottomLeft,
					BottomRight: Align.BottomRight,
					LeftCenter: Align.LeftCenter,
					RightCenter: Align.RightCenter,
					TopCenter: Align.TopCenter,
					TopLeft: Align.TopLeft,
					TopRight: Align.TopRight,
				},
				Align.BottomRight
			)}
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		>
			{children}
		</ClayDropDown>
	);
};

storiesOf('ClayDropDown', module)
	.add('default', () => (
		<DropDownWithState>
			{[
				{href: '#one', label: 'one'},
				{href: '#two', label: 'two'},
				{href: '#three', label: 'three'},
			].map((item, i) => (
				<ClayDropDown.Item href={item.href} key={i}>
					{item.label}
				</ClayDropDown.Item>
			))}
		</DropDownWithState>
	))
	.add('groups', () => (
		<DropDownWithState>
			<ClayDropDown.Group header="Group #1">
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.Group>

			<ClayDropDown.Group header="Group #2">
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.Group>
		</DropDownWithState>
	))
	.add('checkbox', () => (
		<DropDownWithState>
			<ClayDropDown.Item>
				<ClayCheckbox label="I'm a checkbox!" />
			</ClayDropDown.Item>
		</DropDownWithState>
	))
	.add('radio', () => (
		<DropDownWithState>
			<ClayDropDown.Group header="Order">
				<ClayDropDown.Item>
					<ClayRadioGroup.Radio
						checked
						label="Ascending"
						value="asc"
					/>
				</ClayDropDown.Item>
				<ClayDropDown.Item>
					<ClayRadioGroup.Radio label="Descending" value="desc" />
				</ClayDropDown.Item>
			</ClayDropDown.Group>
		</DropDownWithState>
	))
	.add('caption and help', () => (
		<DropDownWithState>
			<ClayDropDown.Help>{'Can I help you?'}</ClayDropDown.Help>

			{[
				{href: '#one', label: 'one'},
				{href: '#two', label: 'two'},
				{href: '#three', label: 'three'},
			].map((item, i) => (
				<ClayDropDown.Item href={item.href} key={i}>
					{item.label}
				</ClayDropDown.Item>
			))}

			<ClayDropDown.Caption>{'... or maybe not.'}</ClayDropDown.Caption>
		</DropDownWithState>
	))
	.add('items with icons', () => (
		<DropDownWithState hasLeftSymbols hasRightSymbols>
			{[
				{label: 'Left', left: 'trash'},
				{label: 'Right', right: 'check'},
				{label: 'Both', left: 'trash', right: 'check'},
			].map((item, i) => (
				<ClayDropDown.Item
					key={i}
					spritemap={spritemap}
					symbolLeft={item.left}
					symbolRight={item.right}
				>
					{item.label}
				</ClayDropDown.Item>
			))}
		</DropDownWithState>
	));
