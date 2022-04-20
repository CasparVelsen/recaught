import styled from 'styled-components';

function Bait({ filteredCardsByWater }) {
  const findBaits = filteredCardsByWater.map(card =>
    card.catches.map(data => data.bait)
  );
  const baits = findBaits.flat();

  const count = {};

  baits.forEach(item => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });

  const numbers = Object.values(count);

  const noDubsBait = [...new Set(baits)];

  return (
    <BaitContainer>
      <Baits>
        {noDubsBait.map((data, index) => (
          <div key={index}>{data ? data : 'no name'}</div>
        ))}
      </Baits>
      <Catches>
        {numbers.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </Catches>
    </BaitContainer>
  );
}

export default Bait;

const BaitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px inset;
  margin-top: 10px;
`;

const Baits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Catches = styled.div`
  display: flex;
  flex-direction: column;
  color: #687a48;
  gap: 5px;
`;
