import styled from 'styled-components';
import CatchCard from './CatchCard';

export default function DisplayCatches({ catches, onDelete }) {
  return (
    <Catches>
      {catches ? (
        catches.map((data, tempId, _id) => (
          <li key={tempId}>
            <CatchCard data={data} onDelete={onDelete} />
          </li>
        ))
      ) : (
        <p>no catches yet</p>
      )}
    </Catches>
  );
}

const Catches = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  width: 100%;
`;
