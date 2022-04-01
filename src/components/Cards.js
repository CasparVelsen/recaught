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
        {showDetails && (
          <IoIosArrowForward onClick={toggleShowDetails} color="#FF9C27" />
        )}
        {!showDetails && (
          <IoIosArrowDown onClick={toggleShowDetails} color="#FF9C27" />
        )}
      </InSameRow>
      {!showDetails && (
        <Details>
          <Part>
            <PartTitle>Fishing water</PartTitle>
            <PartTitle>Water</PartTitle>
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
  padding: 10px;
  background-color: #fffcf8;
  color: #a2c36c;
  border: 0.5px solid #a2c36c;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
  color: #687a48;
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
  width: 50%;
  color: #687a48;
  border-bottom: 1px solid #ff9c27;
`;

const Data = styled.small`
  font-size: 0.8rem;
`;

const Term = styled.span`
  font-weight: bold;
  color: #687a48;
`;
