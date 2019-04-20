import React from 'react';
import { storiesOf } from '@storybook/react';
import { FILES } from '../../../utilities/constants';
import Default from '../__examples__/default';
import NoImage from '../__examples__/no-image';
import NoTitle from '../__examples__/no-title';
import Actions from '../__examples__/actions';
import Loading from '../__examples__/loading';

storiesOf(FILES, module)
	.addDecorator((getStory) => (
		<div className="slds-p-around_medium">{getStory()}</div>
	))
	.add('Default', () => <Default />)
	.add('w/o Image', () => <NoImage />)
	.add('w/o Title', () => <NoTitle />)
	.add('w/ Actions', () => <Actions />)
	.add('Loading', () => <Loading />);
