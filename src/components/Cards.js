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
      <Invisible>
        <small>{data.stretch}</small>
        <small>{data.watertemp}</small>
        <small>{data.watercolor}</small>
        <small>{data.waterlevel}</small>
        <small>{data.weather}</small>
        <small>{data.temperature}</small>
        <small>{data.airpressure}</small>
        <small>{data.moon}</small>
        <small>{data.wind}</small>
        <small>{data.windspeed}</small>
      </Invisible>
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

const Invisible = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 5px;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
`;
