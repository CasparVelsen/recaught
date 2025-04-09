import styled from 'styled-components';
import WeatherStats from './WeatherStats';
import Species from './charts/catch/Species';
import Bait from './charts/catch/Bait';

export default function WaterStats({filteredCardsByWater }) {
  

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
      <Period>
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
        <Species filteredCardsByWater={filteredCardsByWater} />
      </Period>
      <Period>
        <Wrapper>
          <StatsTitle>Flybox</StatsTitle>
          <Hint>Catches</Hint>
        </Wrapper>
        <Bait filteredCardsByWater={filteredCardsByWater} />
      </Period>
      <Period>
        <WeatherStats filteredCardsByWater={filteredCardsByWater} />
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
