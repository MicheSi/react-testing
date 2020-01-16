import React from 'react';
import { render } from '@testing-library/react';

import Button from '../components/Button/Button';

test('Button renders without crashing', () => {
	render(<Button />);
});
