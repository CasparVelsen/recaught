import styled from 'styled-components';
import CatchCard from './CatchCard';

export default function DisplayCatches({ catches }) {
  return (
    <>
      <Catches>
        {catches ? (
          catches.map((data, tempId, _id) => (
            <li key={tempId}>
              <CatchCard data={data} />
            </li>
          ))
        ) : (
          <p>no catches yet</p>
        )}
      </Catches>
    </>
  );
}

const Catches = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0 auto; 
  margin: 20px 0 68px 0; 
  box-sizing: border-box:
`;
