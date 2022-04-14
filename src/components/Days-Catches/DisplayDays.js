import Cards from './DayCard';
import styled from 'styled-components';

export default function DisplayDays({
  filteredCards,
  showModal,
  handleDelete,
  confirmDelete,
  cancelDelete,
}) {
  return (
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
  );
}

const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  padding: 0;
  width: 100%;
`;
