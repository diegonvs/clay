/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '..';
import {
	act,
	fireEvent,
	getByTestId,
	getByText,
	render,
	waitForElement,
} from 'react-testing-library';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayNavigationBar', () => {
	it('renders', () => {
		const label = 'Item 1';

		const testRenderer = TestRenderer.create(
			<ClayNavigationBar
				inverted
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.ListItem active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{label}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#3"
					>
						<span className="navbar-text-truncate">{`Item 3`}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>
			</ClayNavigationBar>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders a dropdown when clicking the collapsed element from NavigationBar', async () => {
		const {container} = render(
			<ClayNavigationBar
				data-testid="#1"
				inverted
				spritemap={spritemap}
				triggerLabel={`Trigger Label`}
			>
				<ClayNavigationBar.ListItem active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{`Item 1`}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.ListItem>
			</ClayNavigationBar>
		);

		window.resizeTo(375, 812);

		fireEvent.click(getByText(container, 'Trigger Label'));
		fireEvent.transitionEnd(
			getByTestId(container, 'NavigationBarDropdown')
		);

		fireEvent.click(getByText(container, 'Trigger Label'));
		fireEvent.transitionEnd(
			getByTestId(container, 'NavigationBarDropdown')
		);

		let navigationBarDropdown;

		act(() => {
			navigationBarDropdown = waitForElement(
				() => {
					getByTestId(container, 'NavigationBarDropdown');
				},
				{container}
			);
		});

		expect(navigationBarDropdown).toBeDefined();

		expect(navigationBarDropdown).toMatchSnapshot();
	});

	it('collapses the dropdown expanded when trigger element is clicked', () => {
		const {container} = render(
			<ClayNavigationBar
				data-testid="#1"
				inverted
				spritemap={spritemap}
				triggerLabel={`Trigger Label`}
			>
				<ClayNavigationBar.ListItem active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{`Item 1`}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.ListItem>
			</ClayNavigationBar>
		);

		window.resizeTo(375, 812);

		fireEvent.click(getByText(container, 'Trigger Label'));
		fireEvent.transitionEnd(
			getByTestId(container, 'NavigationBarDropdown')
		);

		fireEvent.click(getByText(container, 'Trigger Label'));
		fireEvent.transitionEnd(
			getByTestId(container, 'NavigationBarDropdown')
		);

		let navigationBarDropdown;

		act(() => {
			navigationBarDropdown = waitForElement(
				() => {
					getByTestId(container, 'NavigationBarDropdown');
				},
				{container}
			);
		});

		expect(navigationBarDropdown).toBeDefined();

		expect(navigationBarDropdown).toMatchSnapshot();
	});

	it('renders when passing more than one active item', () => {
		const label = 'Item 1';

		const testRenderer = TestRenderer.create(
			<ClayNavigationBar
				inverted
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.ListItem active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{label}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem active>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#3"
					>
						<span className="navbar-text-truncate">{`Item 3`}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>
			</ClayNavigationBar>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should throw a warning when passing more than one active prop to child', () => {
		const mockWarnings = jest
			.spyOn(global.console, 'error')
			.mockImplementation(() => null);

		const label = 'Item 1';

		const testRenderer = TestRenderer.create(
			<ClayNavigationBar
				inverted
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.ListItem active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{label}</span>
					</ClayLink>
				</ClayNavigationBar.ListItem>

				<ClayNavigationBar.ListItem active>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.ListItem>
			</ClayNavigationBar>
		);

		expect(mockWarnings).toBeCalled();
		expect(mockWarnings.mock.calls[0][0]).toBe(
			'Warning: You passed 2 active props to ClayNavigationBar children.'
		);
		expect(testRenderer.toJSON).toMatchSnapshot();
		jest.resetAllMocks();
	});
});
