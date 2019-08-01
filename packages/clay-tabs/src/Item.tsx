/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {ElementType} from './types';

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * internal, used for just evaluate if an item is active or not, checking activeIndex
	 * @internal
	 */
	active?: boolean;

	/**
	 * internal, used to define a component type from index
	 * @internal
	 */
	component?: ElementType;

	/**
	 * Flag to indicate if the TabPane is disabled.
	 */
	disabled?: boolean;

	dropdown?: boolean;

	forwardRef?: React.Ref<any>;

	/**
	 * internal, used for onValueChange
	 * @internal
	 */
	onClick?: (event: React.BaseSyntheticEvent) => void;

	tabName: string;
}

const TabHeader = React.forwardRef(
	(
		{
			active = false,
			component = 'button',
			disabled = false,
			onClick = () => {},
			forwardRef,
			tabName,
		}: IProps
	) => {
	if (component === 'anchor') {
		return (
			<a
				aria-controls={tabName.toLowerCase()}
				aria-disabled={!active}
				aria-selected={active}
				className={classNames('nav-link', {
					active,
					disabled,
				})}
				href={`#${tabName.trim().toLowerCase()}`}
				id={`${tabName}Tab`}
				onClick={onClick}
				ref={forwardRef}
				role="tab"
				tabIndex={disabled ? -1 : undefined}
			>
				{tabName}
			</a>
		);
	}

	return (
		<button
			aria-controls={tabName.toLowerCase()}	
			aria-disabled={!active}
			aria-selected={active}
			className={classNames('btn btn-unstyled nav-link', {
				active,
				disabled,
			})}
			id={`${tabName}Tab`}
			onClick={onClick}
			ref={forwardRef}
			role="tab"
			tabIndex={disabled ? -1 : undefined}
			type="button"
		>
			{tabName}
		</button>
	);
});

const Item: React.FunctionComponent<IProps> = ({
	active,
	component,
	className,
	disabled,
	dropdown,
	forwardRef,
	onClick,
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
			{...otherProps}
		>
			{tabName && (
				<TabHeader
					active={active}
					component={component}
					disabled={disabled}
					onClick={(event: React.BaseSyntheticEvent) => onClick && onClick(event)}
					forwardRef={forwardRef}
					tabName={tabName}
					{...otherProps}
				/>
			)}
		</li>
	);
};

export default React.forwardRef((props: IProps, ref?) => (
	<Item {...props} forwardRef={ref} />
));
