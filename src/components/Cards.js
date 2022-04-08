import styled from 'styled-components';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import Button from './Button';

export default function Cards({ data }) {
  const [showDetails, setshowDetails] = useState(true);

  function toggleShowDetails() {
    setshowDetails(!showDetails);
  }

  return (
    <Card>
      <div onClick={toggleShowDetails}>
        <Title>{data.date}</Title>
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
      </div>
      {!showDetails && (
        <Details>
          <Part>
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
          {data.catches.map((item, index) => (
            <Part key={index}>
              <PartTitle>Catch {index + 1})</PartTitle>
              <Data>
                <Term>species:</Term> {item.species}
              </Data>
              <Data>
                <Term>time:</Term> {item.time}
              </Data>
              <Data>
                <Term>length:</Term> {item.length} cm
              </Data>
              <Data>
                <Term>weight:</Term> {item.weight} kg
              </Data>
              <Data>
                <Term>bait:</Term> {item.bait}
              </Data>
              <Data>
                <Term>location:</Term> {item.location}
              </Data>
              <Data>
                <Term>notes:</Term> {item.notes}
              </Data>
            </Part>
          ))}
          <Part>
            <PartTitle>Summary</PartTitle>
            <Data>
              <Term>total bites:</Term> {data.bites}
            </Data>
            <Data>
              <Term>lost fish:</Term> {data.lost}
            </Data>
          </Part>
          <Button text="Delete card" isAccent={true} />
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
