import React from 'react';
import { render } from '@testing-library/react';

import Panel from '../components/Panel/Panel';

test('Panel renders without crashing', () => {
	render(<Panel />);
});
