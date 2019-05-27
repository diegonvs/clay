/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const ESC_KEY_CODE = 27;

/**
 * Hook for closing dropdown when user hits ESC key or clicks outside the menu.
 */
export function useDropdownCloseInteractions(
	nodeRefs: React.RefObject<Node> | React.RefObject<Node>[],
	setActive: (val: boolean) => void
) {
	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const nodes: Node[] = (Array.isArray(nodeRefs)
				? nodeRefs
				: [nodeRefs]
			)
				.filter(ref => ref.current)
				.map(ref => ref.current as Node);

			if (
				event.target instanceof Node &&
				!nodes.find(element => element.contains(event.target as Node))
			) {
				setActive(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) =>
			event.keyCode === ESC_KEY_CODE && setActive(false);

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);
}
