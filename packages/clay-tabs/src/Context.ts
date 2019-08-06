/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext} from 'react';
import {ElementType} from './types';

export interface IContext {
	/**
	 * Receives a number that indicates the content index that will be rendered.
	 */
	activeIndex: number;

	/**
	 * Tab Item component to render. Can be an 'anchor' or a 'button'.
	 */
	component?: ElementType;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;
}

const context = createContext({} as IContext);

context.displayName = 'ClayTabsContext';

export default context;
