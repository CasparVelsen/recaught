import styled from 'styled-components';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

export default function Cards({ data }) {
  console.log(data);

  const [showDetails, setshowDetails] = useState(true);

  function toggleShowDetails() {
    setshowDetails(!showDetails);
  }

  return (
    <Card>
      <InSameRow>
        <Title>{data.date}</Title>
        <div>
          <span>{data.time}</span>-<span>{data.timeto}</span>
        </div>
      </InSameRow>
      <span>{data.water}</span>
      <InSameRow>
        <span>{data.target}</span>
        {showDetails && <IoIosArrowForward onClick={toggleShowDetails} />}
        {!showDetails && <IoIosArrowDown onClick={toggleShowDetails} />}
      </InSameRow>
      {!showDetails && (
        <Details>
          <Part>
            <PartTitle>Fishing water</PartTitle>
            <Data>
              <Term>water:</Term> {data.water}
            </Data>
            <Data>
              <Term>stretch:</Term> {data.stretch}
            </Data>
            <Data>
              <Term>watertemp:</Term> {data.watertemp} °C
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
              <Term>airpressure:</Term> {data.airpressure} hPa
            </Data>
            <Data>
              <Term>temperature:</Term> {data.temperature} °C
            </Data>
            <Data>
              <Term>moon:</Term> {data.moon}
            </Data>
            <Data>
              <Term>wind:</Term> {data.wind}
            </Data>
            <Data>
              <Term>windspeed:</Term> {data.windspeed} km/h
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
              <Term>length:</Term> {data.length} cm
            </Data>
            <Data>
              <Term>weight:</Term> {data.weight} kg
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
        </Details>
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

const InSameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.div`
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
