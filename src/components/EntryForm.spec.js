import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';

describe('EntryForm', () => {
  it('renders minimum three inputs and a button', () => {
    render(<EntryForm />);

    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const targetInput = screen.getByLabelText(/target/i);
    const submitButton = screen.getByRole('button', { text: /submit/i });

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(targetInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form if required inputs are filled out', formData => {
    const handleCreate = jest.fn();
    render(<EntryForm onCreateCard={handleCreate} />);

    const submitButton = screen.getByRole('button', { text: /submit/i });

    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledWith({
      formData,
    });
  });
});
