import { render, screen } from '@testing-library/react';
import Water from './Water';

describe('Water', () => {
  it('renders 5 input fields', () => {
    render(<Water formData />);

    const inputWater = screen.getByLabelText(/Waters/i);
    const inputStretch = screen.getByLabelText(/Stretch/i);
    const inputWaterTemp = screen.getByLabelText(/Water temperature/i);
    const inputWaterColor = screen.getByLabelText(/Water Color/i);
    const inputWaterLevel = screen.getByLabelText(/Water Level/i);

    expect(inputWater).toBeInTheDocument();
    expect(inputStretch).toBeInTheDocument();
    expect(inputWaterTemp).toBeInTheDocument();
    expect(inputWaterColor).toBeInTheDocument();
    expect(inputWaterLevel).toBeInTheDocument();
  });
});
