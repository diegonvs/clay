/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const Divider: React.FunctionComponent<
	React.HTMLAttributes<HTMLLIElement>
> = () => (
	<li aria-hidden="true" className="dropdown-divider" role="presentation" />
);

export default Divider;
