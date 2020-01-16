import React from 'react';
import { render } from '@testing-library/react';

import Display from '../components/Display/Display';

test('Display renders without crashing', () => {
	render(<Display />);
});

test ('Value is rendering in display', () => {
	const {getByTestId} = render(<Display />);

	getByTestId(/valuedisplay/i);
})