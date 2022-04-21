import Cards from './DayCard';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import moment from 'moment';

export default function DisplayDays({
  filteredCards,
  showModal,
  handleDelete,
  confirmDelete,
  cancelDelete,
}) {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [date, setDate] = useState('');
  const [water, setWater] = useState('');

  const m = moment();
  const currentYear = m.format('YYYY');
  const currentMonth = m.format('YYYY[-]MM');

  const filteredCardsByDate = filteredCards.filter(card =>
    card.date.includes(date)
  );

  const filteredCardsByDateAndWater = filteredCardsByDate.filter(card =>
    card.water.includes(water)
  );

  const allWaterInManyArrays = filteredCardsByDate.map(object => {
    return object.water;
  });

  const eachWater = [...new Set(allWaterInManyArrays)];

  return (
    <>
      <Filter>
        <FilterButton onClick={() => setShowFilterOptions(!showFilterOptions)}>
          {showFilterOptions && <IoIosArrowForward color={'#687a48'} />}
          {!showFilterOptions && <IoIosArrowDown color={'#687a48'} />}
          Filter
        </FilterButton>
        {showFilterOptions && (
          <Options>
            <Category>
              <Title>Date:</Title>
              <Together>
                <input
                  type="radio"
                  id="all"
                  name="date"
                  onChange={() => setDate('')}
                />
                <legend>all</legend>
              </Together>
              <Together>
                <input
                  type="radio"
                  id="this-year"
                  name="date"
                  onChange={() => setDate(currentYear)}
                />
                <legend>this year</legend>
              </Together>
              <Together>
                <input
                  type="radio"
                  id="this-month"
                  name="date"
                  onChange={() => setDate(currentMonth)}
                />
                <legend>this month</legend>
              </Together>
            </Category>
            <Category>
              <Title>Your waters:</Title>
              <WaterList>
                {eachWater.map((data, index) => (
                  <Together key={index}>
                    <input
                      type="radio"
                      name="waters"
                      onChange={() => setWater(data)}
                    />
                    <legend>{data}</legend>
                  </Together>
                ))}
              </WaterList>
            </Category>
          </Options>
        )}
      </Filter>
      <CardsList>
        {filteredCardsByDateAndWater
          ? filteredCardsByDateAndWater.map((data, tempId) => (
              <li key={tempId}>
                <Cards
                  data={data}
                  showModal={showModal}
                  onDelete={handleDelete}
                  confirmDelete={() => confirmDelete(data._id)}
                  cancelDelete={cancelDelete}
                />
              </li>
            ))
          : '...loading cards...'}
      </CardsList>
    </>
  );
}

const Filter = styled.div`
  width: 100%;
  margin: 15px 0;
  border: 1px solid #a2c36c;
  border-radius: 10px;
  background-color: #fffcf8;
  color: #687a48;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding-bottom: 10px;
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 10px;
  padding-left: 10px;
`;

const Options = styled.div`
  background-color: #fffcf8;
  color: #687a48;
  padding: 10px 10px 5px;
  border-top: 1px solid #a2c36c;
  display: flex;
  margin-top: 5px;
`;

const Category = styled.div`
  width: 50%;
`;

const WaterList = styled.div`
  height: 70px;
  overflow-y: auto;
`;

const Title = styled.div`
  color: #687a48;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Together = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  width: 100%;
  margin-bottom: 68px;
`;
