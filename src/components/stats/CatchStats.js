import styled from 'styled-components';
import Bait from './charts/catch/Bait';
import Species from './charts/catch/Species';

export default function CatchStats({ filteredCardsByWater }) {
  return (
    <>
      <div>
        <StatsTitle>Species:</StatsTitle>
        <Species filteredCardsByWater={filteredCardsByWater} />
      </div>
      <div>
        <StatsTitle>Your baits:</StatsTitle>
        <Bait filteredCardsByWater={filteredCardsByWater} />
      </div>
    </>
  );
}

const StatsTitle = styled.div`
  color: #687a48;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 7px;
`;
