/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import {Align} from 'metal-position';
import {Portal} from '@clayui/shared';
import {useDropdownCloseInteractions} from './hooks';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;

	/**
	 * HTML element that the menu should be aligned to
	 */
	alignElementRef: React.RefObject<HTMLElement>;

	/**
	 * Default position of menu element. Values come from `metal-position`.
	 *
	 * Align.TopCenter = 0;
	 * Align.TopRight = 1;
	 * Align.RightCenter = 2;
	 * Align.BottomRight = 3;
	 * Align.BottomCenter = 4;
	 * Align.BottomLeft = 5;
	 * Align.LeftCenter = 6;
	 * Align.TopLeft = 7;
	 *
	 * Defaults to BottomLeft
	 */
	alignmentPosition?: number;

	/**
	 * Flag to indicate if menu is displaying a clay-icon on the left.
	 */
	hasLeftSymbols?: boolean;

	/**
	 * Flag to indicate if menu is displaying a clay-icon on the right.
	 */
	hasRightSymbols?: boolean;

	/**
	 * Callback function for when active state changes.
	 */
	onSetActive: (val: boolean) => void;
}

const DropDownMenu = React.forwardRef<HTMLDivElement, Props>((
	{
		active,
		alignElementRef,
		alignmentPosition = Align.BottomLeft,
		children,
		className,
		hasLeftSymbols,
		hasRightSymbols,
		onSetActive,
		...otherProps
	},
	// TS + refs don't always play nicely together, which is why it is casted
	// in so many places below.
	// See https://github.com/microsoft/TypeScript/issues/30748#issuecomment-480197036
	ref
) => {
	useDropdownCloseInteractions(
		[alignElementRef, ref as React.RefObject<HTMLDivElement>],
		onSetActive
	);

	React.useLayoutEffect(() => {
		if (
			alignElementRef.current &&
			(ref as React.RefObject<HTMLDivElement>).current
		) {
			Align.align(
				(ref as React.RefObject<HTMLElement>).current!,
				alignElementRef.current,
				alignmentPosition
			);
		}
	});

	return (
		<Portal>
			<div
				{...otherProps}
				className={classNames('dropdown-menu', className, {
					'dropdown-menu-indicator-end': hasRightSymbols,
					'dropdown-menu-indicator-start': hasLeftSymbols,
					show: active,
				})}
				ref={ref}
			>
				{children}
			</div>
		</Portal>
	);
});

export {Align};

export default DropDownMenu;
