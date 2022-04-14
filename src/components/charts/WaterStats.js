import styled from 'styled-components';

export default function WaterStats({ filteredCardsByTime }) {
  return (
    <WaterList>
      {filteredCardsByTime.map((data, index) => (
        <Water key={index}>
          <span>{data.water}</span>
        </Water>
      ))}
    </WaterList>
  );
}

const WaterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const Water = styled.li`
  display: flex;
  align-items: center;
  border: 0.5px solid #a2c36c;
  border-radius: 10px;
  padding: 10px;
  background-color: white;

  span {
    color: #687a48;
    font-size: 1.2rem;
    border-right: 2px solid #ff9c27;
    padding: 10px 20px 10px 10px;
  }
`;
