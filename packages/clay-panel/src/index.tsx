/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import ClayPanelBody from './Body';
import ClayPanelFooter from './Footer';
import ClayPanelGroup from './Group';
import ClayPanelHeader from './Header';
import {useTransitionHeight} from '@clayui/shared';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	collapsable?: boolean;
	collapseClassNames?: string;
	defaultExpanded?: boolean;
	displayTitle?: React.ReactText;
	displayType?: 'unstyled' | 'secondary';
	showCollapseIcon?: boolean;
	spritemap?: string;
}

const ClayPanel: React.FunctionComponent<Props> & {
	Body: typeof ClayPanelBody;
	Footer: typeof ClayPanelFooter;
	Group: typeof ClayPanelGroup;
	Header: typeof ClayPanelHeader;
} = ({
	children,
	className,
	collapsable,
	collapseClassNames,
	defaultExpanded = false,
	displayTitle,
	displayType,
	showCollapseIcon = true,
	spritemap,
	...otherProps
}) => {
	const panelRef = React.useRef<HTMLDivElement>(null);
	const [expanded, setExpaned] = React.useState<boolean>(defaultExpanded);

	const [
		transitioning,
		handleTransitionEnd,
		handleClickToggler,
	] = useTransitionHeight(expanded, setExpaned, panelRef);

	const showIconCollapsed = !(
		(!expanded && transitioning) ||
		(expanded && !transitioning)
	);

	return (
		<div
			{...otherProps}
			className={classNames('panel', className, {
				[`panel-${displayType}`]: displayType,
			})}
			role="tablist"
		>
			{!collapsable && (
				<>
					{displayTitle && (
						<ClayPanelHeader>
							<span className="panel-title">{displayTitle}</span>
						</ClayPanelHeader>
					)}

					{children}
				</>
			)}

			{collapsable && (
				<>
					<button
						aria-expanded={expanded}
						className={classNames(
							'btn btn-unstyled panel-header panel-header-link',
							{
								'collapse-icon': showCollapseIcon,
								'collapse-icon-middle': showCollapseIcon,
								collapsed: showIconCollapsed,
							}
						)}
						onClick={handleClickToggler}
						role="tab"
					>
						<span className="panel-title">{displayTitle}</span>

						{showCollapseIcon && (
							<>
								<span className="collapse-icon-closed">
									<ClayIcon
										spritemap={spritemap}
										symbol="angle-right"
									/>
								</span>
								<span className="collapse-icon-open">
									<ClayIcon
										spritemap={spritemap}
										symbol="angle-down"
									/>
								</span>
							</>
						)}
					</button>

					<div
						className={classNames('panel-collapse', {
							collapse: !transitioning,
							collapsing: transitioning,
							show: expanded,
						})}
						onTransitionEnd={handleTransitionEnd}
						ref={panelRef}
						role="tabpanel"
					>
						{children}
					</div>
				</>
			)}
		</div>
	);
};

ClayPanel.Body = ClayPanelBody;
ClayPanel.Group = ClayPanelGroup;
ClayPanel.Footer = ClayPanelFooter;
ClayPanel.Header = ClayPanelHeader;

export default ClayPanel;
