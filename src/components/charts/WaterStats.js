import styled from 'styled-components';
import { useState } from 'react';
import SubmitButton from '../SubmitButton';

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
    const waterName = document.getElementById('water');
    setWater(waterName.value);
    waterName.value = '';
  }

  console.log(eachSpecies);

  return (
    <div>
      <WaterForm onSubmit={handleSubmit}>
        <Select id="water" value={water.title}>
          <option value="" disabled selected>
            Search for water
          </option>
          {filteredCardsByWater.map((opt, id) => (
            <option key={id}>{opt.water}</option>
          ))}
        </Select>
        <SubmitButton text="Search" />
      </WaterForm>
      <WaterList>
        <Water>{water ? water : 'All catches'}:</Water>
        <CatchList>
          <Numbers>
            {numbers.map((n, id) => (
              <span key={id}>{n}x </span>
            ))}
          </Numbers>
          <Catches>
            {eachSpecies.map((species, index) => (
              <span key={index}>{species} </span>
            ))}
          </Catches>
        </CatchList>
      </WaterList>
    </div>
  );
}

const WaterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 10px;
  margin: 10px 0;
  background-color: white;
  border: 1px solid #ff9c27;
  border-radius: 5px;
`;

const WaterForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const Select = styled.select`
  width: 100%;
  border: 1px solid #ff9c27;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 32px;
`;

const CatchList = styled.div`
  display: flex;
  gap: 10px;
`;

const Water = styled.span`
  color: #687a48;
  font-weight: bold;
  font-size: 1.2rem;
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
