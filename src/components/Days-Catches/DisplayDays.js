import Cards from '../Cards';
import styled from 'styled-components';

export default function DisplayDays({ cards, handleDelete }) {
  return (
    <CardsList>
      {cards
        ? cards.map((data, tempId) => (
            <li key={tempId}>
              <Cards data={data} onDelete={() => handleDelete(data._id)} />
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
