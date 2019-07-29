/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
	active?: boolean;

	disabled?: boolean;

	dropdown?: boolean;

	onClick?: (event: React.BaseSyntheticEvent) => void;

	tabElement?: 'anchor' | 'button' | 'component';

	tabName: string;
}

const TabHeader: React.FunctionComponent<any> = ({
	active = false,
	children,
	disabled,
	tabElement = 'anchor',
	tabName,
}) => {
	if (tabElement === 'anchor') {
		return (
			<a
				aria-controls={tabName}
				aria-selected={active}
				className={classNames('nav-link', {
					active,
					disabled,
				})}
				id={`${tabName}Tab`}
				role="tab"
			>
				{tabName}
			</a>
		);
	}

	if (tabElement === 'button') {
		return (
			<button
				aria-controls={tabName}
				aria-selected={active}
				className={classNames('btn btn-unstyled nav-link', {
					active,
					disabled,
				})}
				id={`${tabName}Tab`}
				role="tab"
				type="button"
			>
				{tabName}
			</button>
		);
	}

	return children;
};

const Item: React.FunctionComponent<IProps> = ({
	active,
	children,
	className,
	disabled,
	dropdown,
	onClick,
	tabElement,
	tabName,
	...otherProps
}: IProps) => {
	return (
		<li
			className={classNames(
				'nav-item',
				{
					dropdown,
				},
				className
			)}
			onClick={e => onClick && onClick(e)}
			{...otherProps}
		>
			{tabName && (
				<TabHeader
					active={active}
					disabled={disabled}
					tabElement={tabElement}
					tabName={tabName}
					{...otherProps}
				/>
			)}
		</li>
	);
};

export default Item;
