import styled from 'styled-components';
import { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Cards({ data }) {
  console.log(data);

  const [active, setActive] = useState(true);

  function toggleInvisibleData() {
    setActive(!active);
  }

  return (
    <Card>
      <Header>
        <Title>{data.date}</Title>
        <div>
          <span>{data.time}</span>-<span>{data.timeto}</span>
        </div>
      </Header>
      <span>{data.water}</span>
      <span>{data.target}</span>
      <MdOutlineArrowForwardIos onClick={toggleInvisibleData} />
      {!active && (
        <Invisible>
          <Part>
            <PartTitle>Fishing water</PartTitle>
            <Data>
              <Term>water:</Term> {data.water}
            </Data>
            <Data>
              <Term>stretch:</Term> {data.stretch}
            </Data>
            <Data>
              <Term>watertemp:</Term> {data.watertemp}
            </Data>
            <Data>
              <Term>watercolor:</Term> {data.watercolor}
            </Data>
            <Data>
              <Term>waterlevel:</Term> {data.waterlevel}
            </Data>
          </Part>
          <Part>
            <PartTitle>Weather</PartTitle>
            <Data>
              <Term>weather:</Term> {data.weather}
            </Data>
            <Data>
              <Term>airpressure:</Term> {data.airpressure}
            </Data>
            <Data>
              <Term>temperature:</Term> {data.temperature}
            </Data>
            <Data>
              <Term>moon:</Term> {data.moon}
            </Data>
            <Data>
              <Term>wind:</Term> {data.wind}
            </Data>
            <Data>
              <Term>windspeed:</Term> {data.windspeed}
            </Data>
          </Part>
          <Part>
            <PartTitle>Catch</PartTitle>
            <Data>
              <Term>species:</Term> {data.species}
            </Data>
            <Data>
              <Term>bait:</Term> {data.bait}
            </Data>
            <Data>
              <Term>length:</Term> {data.length}
            </Data>
            <Data>
              <Term>weight:</Term> {data.weight}
            </Data>
            <Data>
              <Term>location:</Term> {data.location}
            </Data>
            <Data>
              <Term>notes:</Term> {data.notes}
            </Data>
          </Part>
          <Part>
            <PartTitle>Summary</PartTitle>
            <Data>
              <Term>total bites:</Term> {data.bites}
            </Data>
            <Data>
              <Term>lost fish:</Term> {data.lost}
            </Data>
          </Part>
        </Invisible>
      )}
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

const Title = styled.h2`
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Invisible = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 5px;
  margin-top: 10px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const PartTitle = styled.h3`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  border-bottom: 0.5px solid black;
`;

const Data = styled.small`
  font-size: 0.8rem;
`;

const Term = styled.span`
  font-weight: bold;
`;
