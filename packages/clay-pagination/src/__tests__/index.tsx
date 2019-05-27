/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import ClayPagination from '..';
import {
	cleanup,
	fireEvent,
	getByTestId,
	getByText,
	render,
} from 'react-testing-library';

const spritemap = 'path/to/spritemap';

describe('ClayPagination', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPagination
				activePage={12}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('calls onPageChange when arrow is clicked', () => {
		const changeMock = jest.fn();

		const {container} = render(
			<ClayPagination
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(
			getByTestId(container, 'prevArrow') as HTMLButtonElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(11);

		fireEvent.click(
			getByTestId(container, 'nextArrow') as HTMLButtonElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(13);
	});

	it('calls onPageChange when individual page is clicked', () => {
		const changeMock = jest.fn();

		const {container} = render(
			<ClayPagination
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getByText(container, '25') as HTMLElement, {});

		expect(changeMock).toHaveBeenLastCalledWith(25);
	});

	it('shows dropdown when ellipsis is clicked', () => {
		const {container} = render(
			<ClayPagination
				activePage={12}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getByText(container, '...') as HTMLElement, {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');
	});

	it('calls onPageChange when iitem is clicked in dropdown-menu', () => {
		const changeMock = jest.fn();

		const {container} = render(
			<ClayPagination
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getByText(container, '...') as HTMLElement, {});

		fireEvent.click(getByText(document.body, '4') as HTMLElement, {});

		expect(changeMock).toHaveBeenLastCalledWith(4);
	});
});
