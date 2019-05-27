/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classnames from 'classnames';

const DropDownCaption: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => {
	return (
		<div
			{...otherProps}
			className={classnames('dropdown-caption', className)}
		>
			{children}
		</div>
	);
};

export default DropDownCaption;
