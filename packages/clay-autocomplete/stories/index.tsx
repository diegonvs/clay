/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '../src';
import ClayDataProvider from '@clayui/data-provider';
import ClayDropDown from '@clayui/drop-down';
import React, {useState} from 'react';
import {FetchPolicy, NetworkStatus} from '@clayui/data-provider/src/types';
import {storiesOf} from '@storybook/react';
import {useDebounce} from '@clayui/data-provider/src/useDebounce';

import 'clay-css/lib/css/atlas.css';

const LoadingWithDebounce = ({
	loading,
	networkStatus,
	render,
}: {
	networkStatus?: NetworkStatus;
	loading: boolean;
	render: any;
}) => {
	const debouncedLoadingChange = useDebounce(loading, 500);

	if (networkStatus === 1 || debouncedLoadingChange) {
		return (
			<ClayDropDown.Item className="disabled">
				{'Loading...'}
			</ClayDropDown.Item>
		);
	}

	return render;
};

const ClayAutocompleteWithState = () => {
	const [value, setValue] = useState('');

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={event => setValue(event.target.value)}
				value={value}
			/>
			<ClayDataProvider
				fetchPolicy={FetchPolicy.CacheFirst}
				link="https://rickandmortyapi.com/api/character"
				notifyOnNetworkStatusChange
				variables={{name: value}}
			>
				{({data, error, loading, networkStatus}) => (
					<>
						<ClayAutocomplete.DropDown
							active={(!!data && !!value) || networkStatus === 1}
						>
							<ClayDropDown.ItemList>
								<LoadingWithDebounce
									loading={loading}
									networkStatus={networkStatus}
									render={
										<>
											{(error ||
												(data && data.error)) && (
												<ClayDropDown.Item className="disabled">
													{'No Results Found'}
												</ClayDropDown.Item>
											)}
											{!error &&
												data &&
												data.results &&
												data.results.map(
													(item: any) => (
														<ClayDropDown.Item
															key={item.id}
															onClick={() =>
																setValue(
																	item.name
																)
															}
														>
															{item.name}
														</ClayDropDown.Item>
													)
												)}
										</>
									}
								/>
							</ClayDropDown.ItemList>
						</ClayAutocomplete.DropDown>
						{loading && <ClayAutocomplete.LoadingIndicator />}
					</>
				)}
			</ClayDataProvider>
		</ClayAutocomplete>
	);
};

storiesOf('ClayAutocomplete', module).add(
	'with low-level APIs (composition)',
	() => (
		<div className="row">
			<div className="col-md-4">
				<div className="sheet">
					<div className="form-group">
						<label>{'Name'}</label>
						<ClayAutocompleteWithState />
					</div>
				</div>
			</div>
		</div>
	)
);
