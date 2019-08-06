/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import React, {useContext} from 'react';

interface IProps
	extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
	/**
	 * Flag to indicate if the TabPane is disabled.
	 */
	disabled?: boolean;

	dropdown?: boolean;

	forwardRef?: React.Ref<any>;

	/**
	 * Props to be added to the item element that can be an anchor or a button.
	 */
	itemElementProps?: React.HTMLAttributes<
		HTMLAnchorElement | HTMLButtonElement
	>;

	itemKey: number;

	/**
	 * Callback to be used when clicking to a Tab Item.
	 */
	onClick?: (val: number) => void;

	tabName: string;
}

const TabHeader = React.forwardRef(
	(
		{
			activeIndex,
			component,
			disabled = false,
			dropdown = false,
			forwardRef,
			itemElementProps = {},
			itemKey,
			onClick,
			spritemap,
			tabName,
		}: any,
		IProps
	) => {
		const active = activeIndex === itemKey;

		if (component === 'anchor') {
			return (
				<>
					<a
						aria-controls={tabName.toLowerCase()}
						aria-disabled={!active}
						aria-selected={!active}
						className={classNames('nav-link', {
							active,
							disabled,
						})}
						href={`#${tabName.trim().toLowerCase()}`}
						id={`${tabName}Tab`}
						onClick={() => onClick && onClick(itemKey)}
						ref={forwardRef}
						role="tab"
						tabIndex={disabled ? -1 : undefined}
						{...itemElementProps}
					>
						{tabName}
						{dropdown && spritemap && (
							<svg
								className="lexicon-icon lexicon-icon-caret-bottom"
								role="presentation"
							>
								<use xlinkHref={`${spritemap}#caret-bottom`} />
							</svg>
						)}
					</a>
				</>
			);
		}

		return (
			<>
				<button
					aria-controls={tabName.toLowerCase()}
					aria-disabled={!active}
					aria-selected={active}
					className={classNames('btn btn-unstyled nav-link', {
						active,
						disabled,
					})}
					id={`${tabName}Tab`}
					onClick={() => onClick && onClick(itemKey)}
					ref={forwardRef}
					role="tab"
					tabIndex={disabled ? -1 : undefined}
					type="button"
					{...itemElementProps}
				>
					{tabName}
					{dropdown && spritemap && (
						<svg
							className="lexicon-icon lexicon-icon-caret-bottom"
							role="presentation"
						>
							<use xlinkHref={`${spritemap}#caret-bottom`} />
						</svg>
					)}
				</button>
			</>
		);
	}
);

const Item: React.FunctionComponent<IProps> = ({
	className,
	disabled,
	dropdown,
	forwardRef,
	itemElementProps,
	itemKey,
	onClick = () => {},
	tabName,
	...otherProps
}: IProps) => {
	const {activeIndex, component, spritemap} = useContext(Context);

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
					activeIndex={activeIndex}
					component={component}
					disabled={disabled}
					dropdown={dropdown}
					forwardRef={forwardRef}
					itemElementProps={itemElementProps}
					itemKey={itemKey}
					onClick={onClick}
					spritemap={spritemap}
					tabName={tabName}
				/>
			)}
		</li>
	);
};

export default React.forwardRef((props: IProps, ref?) => (
	<Item {...props} forwardRef={ref} />
));
