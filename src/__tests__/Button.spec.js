import React from 'react';
import { render } from '@testing-library/react';

import Button from '../components/Button/Button';

test('Button renders without crashing', () => {
	render(<Button />);
});

test('Buttons are rendering', () => {
	const {getByTestId} = render(<Button />);

	getByTestId(/buttons/i);
})
