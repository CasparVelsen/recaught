import styled from 'styled-components';
import WeatherStats from './WeatherStats';
import CatchStats from './CatchStats';

export default function WaterStats({filteredCardsByWater, water }) {
  

  const allCatchesInManyArrays = filteredCardsByWater.map(object => {
    const tempArray = object.catches.map(entry => {
      return entry.species;
    });
    return tempArray;
  });

  const allCatches = allCatchesInManyArrays.flat();

  const eachSpecies = [...new Set(allCatches)];

  const count = {};

  allCatches.forEach(item => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });

  const numbers = Object.values(count);

  const allLengthsInManyArrays = filteredCardsByWater.map(object => {
    const tempLengthArray = object.catches.map(entry => {
      return entry.length;
    });
    return tempLengthArray;
  });

  const lengths = allLengthsInManyArrays.flat();

  function ArrayAvg(lengths) {
    const parsedLengths = lengths.map(data => parseInt(data));
    var i = 0,
      summ = 0,
      ArrayLen = parsedLengths.length;
    while (i < ArrayLen) {
      summ = summ + parsedLengths[i++];
    }
    return summ / ArrayLen;
  }
  var averageSize = ArrayAvg(lengths);
  const roundedNumber = Math.round((averageSize + Number.EPSILON) * 100) / 100;

  return (
    <div>
      <Stats>
        <StatsTitle>Catchbook</StatsTitle>
        <CatchList>
          <Numbers>
            {numbers.map((n, id) => (
              <span key={id}>{n}x </span>
            ))}
          </Numbers>
          <Catches>
            {eachSpecies.map((species, index) => (
              <span key={index}>{species}</span>
            ))}
          </Catches>
        </CatchList>
        <Average>
          <span>Average size:</span>ø{roundedNumber ? roundedNumber : ' 0'} cm
        </Average>
      </Stats>
      <Stats>
        <CatchStats filteredCardsByWater={filteredCardsByWater} />
      </Stats>
      <Stats>
        <StatsTitle>Weather stats</StatsTitle>
        <WeatherStats filteredCardsByWater={filteredCardsByWater} />
      </Stats>
    </div>
  );
}

const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  list-style: none;
  padding: 10px;
  margin: 15px 0;
  background-color: white;
  border: 1px solid #ff9c27;
  border-radius: 5px;
`;

const StatsTitle = styled.div`
  color: #687a48;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 7px;
`;

const CatchList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 7px;
`;

const Water = styled.span`
  color: #687a48;
  font-weight: bold;
  font-size: 24px;
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

  span {
    color: #687a48;
  }
`;
