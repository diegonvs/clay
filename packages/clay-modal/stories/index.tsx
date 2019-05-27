/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayModal from '../src';
import React from 'react';
import {select, text} from '@storybook/addon-knobs';
import {Size, Status} from '../src/types';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children?: (onClose: () => void) => React.ReactNode;
	size?: Size;
	status?: Status;
}

const ModalWithState: React.FunctionComponent<Props> = ({
	children,
	size,
	status,
}) => {
	const [visible, setVisible] = React.useState<boolean>(false);

	return (
		<>
			{visible && (
				<ClayModal
					onClose={() => setVisible(false)}
					size={size}
					spritemap={spritemap}
					status={status}
				>
					{children}
				</ClayModal>
			)}
			<ClayButton displayType="primary" onClick={() => setVisible(true)}>
				{'Open modal'}
			</ClayButton>
		</>
	);
};

const size = {
	none: null,
	lg: 'lg',
	sm: 'sm',
	'full-screen': 'full-screen',
};

const status = {
	none: null,
	danger: 'danger',
	info: 'info',
	success: 'success',
	warning: 'warning',
};

storiesOf('ClayModal', module).add('default', () => (
	<ModalWithState
		size={select('Size', size, 'lg') as Size}
		status={select('Status', status, null) as Status}
	>
		{onClose => (
			<>
				<ClayModal.Header>{text('Title', 'Title')}</ClayModal.Header>
				<ClayModal.Body url={text('Url', null)}>
					<h1>Hello world!</h1>
				</ClayModal.Body>
				<ClayModal.Footer
					first={
						<ClayButton.Group spaced>
							<ClayButton displayType="secondary">
								{'Secondary'}
							</ClayButton>
							<ClayButton displayType="secondary">
								{'Secondary'}
							</ClayButton>
						</ClayButton.Group>
					}
					last={<ClayButton onClick={onClose}>Primary</ClayButton>}
				/>
			</>
		)}
	</ModalWithState>
));
