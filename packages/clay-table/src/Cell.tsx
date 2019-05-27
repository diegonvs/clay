/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import {TDelimiterType} from './types';

type ColumnTextAlignmentType = 'center' | 'end' | 'start';

type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
	React.TdHTMLAttributes<HTMLTableDataCellElement>;

type TextCellAlignmentType = 'center' | 'left' | 'right';

interface CellProps extends TableCellBaseProps {
	/**
	 * Aligns the text inside the Cell.
	 */
	align?: TextCellAlignmentType;

	/**
	 * Sometimes we are unable to remove specific table columns from the DOM
	 * and need to hide it using CSS. This property can be added to the "new"
	 * first or last cell to maintain table styles on the left and right side.
	 */
	cellDelimiter?: TDelimiterType;

	/**
	 * Aligns horizontally contents inside the Cell.
	 */
	columnTextAlignment?: ColumnTextAlignmentType;

	/**
	 * Fills out the remaining space inside a Cell.
	 */
	expanded?: boolean;

	/**
	 * Defines the type of the Cell element, if true,
	 * cell element will be a `<th>`, otherwise `<td>`.
	 */
	headingCell?: boolean;

	/**
	 * Applies a style of heading inside a child of table
	 * header cell element.
	 */
	headingTitle?: boolean;
}

const Cell: React.FunctionComponent<CellProps> = ({
	align,
	cellDelimiter,
	children,
	className,
	columnTextAlignment,
	expanded,
	headingCell = false,
	headingTitle = false,
	...otherProps
}) => {
	const TagName = headingCell ? 'th' : 'td';

	return (
		<TagName
			{...otherProps}
			className={classNames(className, {
				'table-cell-expand': expanded,
				[`table-cell-${cellDelimiter}`]: cellDelimiter,
				[`table-column-text-${columnTextAlignment}`]: columnTextAlignment,
				[`text-${align}`]: align,
			})}
		>
			{headingTitle
				? React.Children.map(children, (child, i) => (
						<p className="table-list-title" key={i}>
							{child}
						</p>
				  ))
				: children}
		</TagName>
	);
};

export default Cell;
