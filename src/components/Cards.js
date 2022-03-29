import styled from 'styled-components';

export default function Cards({ data }) {
  console.log(data);

  return (
    <Card>
      <Div>
        <Title>{data.date}</Title>
        <span>{data.time}</span>
      </Div>
      <span>{data.water}</span>
      <span>{data.target}</span>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 0.5px solid green;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
`;
