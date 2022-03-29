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

  it('submits form if required inputs are filled out', () => {
    const handleCreate = jest.fn();
    render(<EntryForm onCreateCard={handleCreate} />);

    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const targetInput = screen.getByLabelText(/target/i);
    const waterInput = screen.getByPlaceholderText('water');
    const submitButton = screen.getByRole('button', { text: /submit/i });

    userEvent.type(dateInput, '2022-02-28"');
    userEvent.type(timeInput, '10:15');
    userEvent.type(targetInput, 'Fisch');
    userEvent.type(waterInput, 'Fluss');
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledWith({
      time: '10:15',
      water: 'Fluss',
      targetSpecies: 'Fisch',
      date: '2022-02-28',
    });
  });
});
