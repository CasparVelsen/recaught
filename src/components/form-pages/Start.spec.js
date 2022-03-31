import { render, screen } from '@testing-library/react';
import Start from './Start';

describe('Start', () => {
  it('renders 4 input fields', () => {
    render(<Start formData />);

    const inputDate = screen.getByLabelText(/Date/i);
    const inputTime = screen.getByLabelText(/From/i);
    const inputTimeTo = screen.getByLabelText(/To/i);
    const inputTarget = screen.getByLabelText(/Target species/i);

    expect(inputDate).toBeInTheDocument();
    expect(inputTime).toBeInTheDocument();
    expect(inputTimeTo).toBeInTheDocument();
    expect(inputTarget).toBeInTheDocument();
  });
});
