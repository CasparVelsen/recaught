import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';

describe('EntryForm', () => {
  it('renders minimum two inputs and a button', () => {
    render(<EntryForm />);

    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const submitButton = screen.getByRole('button', { text: /submit/i });

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
