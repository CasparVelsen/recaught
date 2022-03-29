import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe('Cards', () => {
  it('renders a card with date, time, water, targetspecies', () => {
    render(
      <Cards
        date="2022-02-28"
        time="10:15"
        water="fluss"
        targetSpecies="fish"
      />
    );

    const date = screen.getByText(/2022-02-28/i);
    const time = screen.getByText(/10:15/i);
    const water = screen.getByText(/fluss/i);
    const targetSpecies = screen.getByText(/fish/i);

    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(water).toBeInTheDocument();
    expect(targetSpecies).toBeInTheDocument();
  });
});
