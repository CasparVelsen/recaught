import styled from 'styled-components';

export default function Cards({ data }) {
  console.log(data);

  return (
    <Card>
      <Div>
        <Title>{data.date}</Title>
        <div>
          <span>{data.time}</span>-<span>{data.timeto}</span>
        </div>
      </Div>
      <span>{data.water}</span>
      <span>{data.target}</span>
      <Invisible>
        <small>
          <Term>stretch:</Term> {data.stretch}
        </small>
        <small>
          <Term>watertemp:</Term> {data.watertemp}
        </small>
        <small>
          <Term>watercolor:</Term> {data.watercolor}
        </small>
        <small>
          <Term>waterlevel:</Term> {data.waterlevel}
        </small>
        <small>
          <Term>weather:</Term> {data.weather}
        </small>
        <small>
          <Term>airpressure:</Term> {data.airpressure}
        </small>
        <small>
          <Term>temperature:</Term> {data.temperature}
        </small>
        <small>
          <Term>moon:</Term> {data.moon}
        </small>
        <small>
          <Term>wind:</Term> {data.wind}
        </small>
        <small>
          <Term>windspeed:</Term> {data.windspeed}
        </small>
        <small>
          <Term>species:</Term> {data.species}
        </small>
        <small>
          <Term>bait:</Term> {data.bait}
        </small>
        <small>
          <Term>length:</Term> {data.length}
        </small>
        <small>
          <Term>weight:</Term> {data.weight}
        </small>
        <small>
          <Term>location:</Term> {data.location}
        </small>
        <small>
          <Term>notes:</Term> {data.notes}
        </small>
        <small>
          <Term>total bites:</Term> {data.bites}
        </small>
        <small>
          <Term>lost fish:</Term> {data.lost}
        </small>
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
  gap: 3px;
  border: 1px solid #ddd;
  padding: 5px;
  margin-top: 10px;
`;

const Term = styled.span`
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
`;
