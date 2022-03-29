import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe('Cards', () => {
  it('renders a card with date, time, water, targetspecies', ({ data }) => {
    render(
      <Cards
        date={data.date}
        time={data.time}
        water={data.water}
        targetSpecies={data.targetSpecies}
      />
    );

    const date = screen.getByText(/2022-01-01/i);
    const time = screen.getByText(/10:15/i);
    const water = screen.getByText(/fluss/i);
    const targetSpecies = screen.getByText(/fish/i);

    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(water).toBeInTheDocument();
    expect(targetSpecies).toBeInTheDocument();
  });
});
