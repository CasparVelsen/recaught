import Cards from './DayCard';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export default function DisplayDays({
  filteredCards,
  showModal,
  handleDelete,
  confirmDelete,
  cancelDelete,
}) {
  return (
    <>
      <Filter>
        <FilterButton>
          <IoIosArrowDown color={'#687a48'} />
          Filter
        </FilterButton>
        <div></div>
      </Filter>
      <CardsList>
        {filteredCards
          ? filteredCards.map((data, tempId) => (
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
`;

const FilterButton = styled.div`
  border: 1px solid #a2c36c;
  border-radius: 10px;
  background-color: #fffcf8;
  color: #687a48;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
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
