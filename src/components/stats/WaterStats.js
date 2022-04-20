import styled from 'styled-components';
import { useState } from 'react';
import SubmitButton from '../SubmitButton';
import WeatherStats from './WeatherStats';
import CatchStats from './CatchStats';

export default function WaterStats({ filteredCardsByTime }) {
  const [water, setWater] = useState('');

  const filteredCardsByWater = filteredCardsByTime.filter(card =>
    card.water.includes(water)
  );

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

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { waterName } = form.elements;
    setWater(waterName.value);
    waterName.value = '';
  }

  const allLengthsInManyArrays = filteredCardsByWater.map(object => {
    const tempLengthArray = object.catches.map(entry => {
      return entry.length;
    });
    return tempLengthArray;
  });

  const lengths = allLengthsInManyArrays.flat();

  function ArrayAvg(lengths) {
    var i = 0,
      summ = 0,
      ArrayLen = lengths.length;
    while (i < ArrayLen) {
      summ = summ + lengths[i++];
    }
    return summ / ArrayLen;
  }
  var averageSize = ArrayAvg(lengths);

  const allWaterInManyArrays = filteredCardsByTime.map(object => {
    return object.water;
  });

  const eachWater = [...new Set(allWaterInManyArrays)];

  return (
    <div>
      <WaterForm onSubmit={handleSubmit}>
        <Select id="water" name="waterName">
          <option value="" disabled selected>
            Search for water
          </option>
          {eachWater.map((opt, id) => (
            <option key={id}>{opt}</option>
          ))}
        </Select>
        <SubmitButton text="Search" />
      </WaterForm>
      <Water>{water ? water : 'All waters'}:</Water>
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
          <span>Average size:</span>ø{averageSize ? averageSize : ' 0'} cm
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

const WaterForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  height: 30px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  border: 1px solid #a2c36c;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 30px;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
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
