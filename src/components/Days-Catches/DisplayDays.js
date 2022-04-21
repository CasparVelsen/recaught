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

  const m = moment();
  const currentYear = m.format('YYYY');
  const currentMonth = m.format('YYYY[-]MM');

  const filteredCardsByDate = filteredCards.filter(card =>
    card.date.includes(date)
  );

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
            <div>
              <Category>Date:</Category>
              <Together>
                <input type="radio" onChange={() => setDate('')} />
                <legend>all</legend>
              </Together>
              <Together>
                <input type="radio" onChange={() => setDate(currentYear)} />
                <legend>this year</legend>
              </Together>
              <Together>
                <input type="radio" onChange={() => setDate(currentMonth)} />
                <legend>this month</legend>
              </Together>
            </div>
          </Options>
        )}
      </Filter>
      <CardsList>
        {filteredCardsByDate
          ? filteredCardsByDate.map((data, tempId) => (
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
  padding: 5px 10px;
  border-top: 1px solid #a2c36c;
`;

const Category = styled.div`
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
