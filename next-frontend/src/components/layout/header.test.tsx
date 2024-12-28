import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
	it('should render logo text', () => {
		render(<Header />);

		const logoHeading = screen.getByRole('heading', {
			name: /Post/i,
		});

		expect(logoHeading).toBeInTheDocument();
	});
});
