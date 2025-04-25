import styled from 'styled-components';
import WeatherStats from './WeatherStats';
import Species from './charts/catch/Species';
import Bait from './charts/catch/Bait';

export default function Stats({ filteredCards }) {
  // 1. Species extrahieren & zählen
  const allSpecies = filteredCards.flatMap(card =>
    card.catches.map(entry => entry.species)
  );

  const count = {};
  allSpecies.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  const speciesList = Object.entries(count).map(([species, count]) => ({
    species,
    count,
  }));

  const sortedSpecies = speciesList.sort((a, b) => b.count - a.count);

  const lengths = filteredCards.flatMap(card =>
    card.catches.map(entry => parseInt(entry.length))
  );

  const average =
    lengths.reduce((sum, val) => sum + val, 0) / (lengths.length || 1);

  const roundedAverage =
    Math.round((average + Number.EPSILON) * 100) / 100 || 0;

  return (
    <div>
      <Period>
        <StatsTitle>Catchbook</StatsTitle>
        <CatchList>
          <Numbers>
            {sortedSpecies.map((item, index) => (
              <span key={index}>{item.count}x</span>
            ))}
          </Numbers>
          <Catches>
            {sortedSpecies.map((item, index) => (
              <span key={index}>{item.species}</span>
            ))}
          </Catches>
        </CatchList>
        <Average>
          <span>Average size:</span>ø{roundedAverage ? roundedAverage : ' 0'} cm
        </Average>
        <Species sortedSpecies={sortedSpecies} />
      </Period>
      <Period>
        <WeatherStats filteredCards={filteredCards} />
      </Period>
      <Period>
        <Wrapper>
          <StatsTitle>Flybox</StatsTitle>
          <Hint>Catches</Hint>
        </Wrapper>
        <Scrollable>
          <Bait filteredCards={filteredCards} />
        </Scrollable>
      </Period>
    </div>
  );
}

const Period = styled.div`
  background-color: #fffcf8;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  border: 0.5px solid #a2c36c;
  color: #a2c36c;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin: 15px 0 15px 0;
`;

const Scrollable = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const StatsTitle = styled.div`
  color: #687a48;
  font-weight: bold;
  font-size: 1.2rem;
`;

const CatchList = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0 10px;
`;

const Catches = styled.div`
  display: flex;
  flex-direction: column;
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #687a48;
  }
`;

const Average = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  span {
    color: #687a48;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Hint = styled.div`
  color: #687a48;
  font-weight: bold;
  font-size: 0.8rem;
`;
