import Cards from './DayCard';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import moment from 'moment';
import Loader from '../Loader';

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
  const today = m.format('YYYY[-]MM[-]D');

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

                <legend>All</legend>
              </Together>
              <Together>
                <input
                  type="radio"
                  id="this-year"
                  name="date"
                  onChange={() => setDate(currentYear)}
                />

                <legend>This year</legend>
              </Together>
              <Together>
                <input
                  type="radio"
                  id="this-month"
                  name="date"
                  onChange={() => setDate(currentMonth)}
                />

                <legend>This month</legend>
              </Together>
              <Together>
                <input
                  type="radio"
                  id="today"
                  name="date"
                  onChange={() => setDate(today)}
                />

                <legend>Today</legend>
              </Together>
            </Category>
            <Category>
              <Title>Your waters:</Title>
              <WaterList>
                <Together>
                  <input
                    type="radio"
                    name="waters"
                    onChange={() => setWater('')}
                  />
                  <legend>All</legend>
                </Together>
                {eachWater.length > 0
                  ? eachWater.map((data, index) => (
                      <Together key={index}>
                        <input
                          type="radio"
                          name="waters"
                          onChange={() => setWater(data)}
                        />
                        <legend>{data}</legend>
                      </Together>
                    ))
                  : '...none'}
              </WaterList>
            </Category>
          </Options>
        )}
      </Filter>
      <CardsList>
        {filteredCardsByDateAndWater.length > 0 ? (
          filteredCardsByDateAndWater.map((data, tempId) => (
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
        ) : (
          <div>
            <LoaderBox>
              <Loader />
            </LoaderBox>
            <Error>no matches found</Error>
          </div>
        )}
      </CardsList>
    </>
  );
}

const Filter = styled.div`
  width: 100%;
  margin: 15px 0;
  border: 1px solid #687a48;
  border-radius: 10px;
  background-color: #fffcf8;
  color: #687a48;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding-bottom: 5px;
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 5px;
  padding-left: 10px;
  font-weight: bold;
`;

const Options = styled.div`
  background-color: #fffcf8;
  color: #687a48;
  padding: 10px 10px 5px;
  border-top: 1px solid #ff9c27;
  display: flex;
`;

const Category = styled.div`
  width: 50%;
  color: #a2c36c;
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

const Together = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    height: 17px;
    width: 17px;
  }
`;

const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  width: 100%;
  margin-bottom: 68px;
  height: 100%;
  position: relative;
`;

const fadeOut = keyframes`
  from {color: #687a48;}
  to {color: white;}
`;

const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 55%;
  animation-name: ${fadeOut};
  animation-delay: 3s;
  animation-duration: 0s;
  animation-fill-mode: forwards;
  padding-right: 10px;
`;

const fadeIn = keyframes`
  from {color: white;}
  to {color: #687a48;}
`;

const Error = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
  position: fixed;
  top: 58%;
  animation-name: ${fadeIn};
  animation-delay: 3s;
  animation-duration: 0s;
  animation-fill-mode: forwards;
  padding-right: 10px;
`;
