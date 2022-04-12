import styled from 'styled-components';

export default function Profile({ cards, catches }) {
  const succesRate = catches.length / cards.length;

  return (
    <StatsList>
      <Stats>
        catches <div>{catches.length}</div>
      </Stats>
      <Stats>
        trips <div>{cards.length}</div>
      </Stats>
      <Stats>
        fish/trip <div>{succesRate}</div>
      </Stats>
    </StatsList>
  );
}

const StatsList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 0.5px solid #a2c36c;
  border-radius: 10px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  padding: 10px;
`;

const Stats = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 100%;

  div {
    font-weight: normal;
  }

  :nth-child(2) {
    border-left: 0.5px solid #a2c36c;
    border-right: 0.5px solid #a2c36c;
  }
`;
