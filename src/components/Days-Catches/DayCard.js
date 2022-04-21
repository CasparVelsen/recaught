import styled from 'styled-components';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { BiTargetLock } from 'react-icons/bi';
import { MdWater } from 'react-icons/md';
import { IoFishOutline } from 'react-icons/io5';
import Button from '../Button';
import DeleteModal from '../modal/DeleteModal';

export default function Cards({
  data,
  onDelete,
  showModal,
  confirmDelete,
  cancelDelete,
}) {
  const [showDetails, setshowDetails] = useState(true);

  function toggleShowDetails() {
    setshowDetails(!showDetails);
  }

  return (
    <Card>
      <Preview onClick={toggleShowDetails}>
        <Year>{data.date.slice(0, 4)}</Year>
        <Date>
          <div>{data.date.slice(8, 10)}</div>
          <span>{data.date.slice(5, 7)}</span>
        </Date>
        <Infos>
          <Together>
            <MdWater size={20} color={'#687a48'} />
            {data.water}
          </Together>
          <Together>
            <BiTargetLock size={20} color={'#687a48'} />
            {data.target}
          </Together>
          <InSameRow>
            <span>
              <IoFishOutline color={'#687a48'} />
              {data.catches.length ? data.catches.length : '0'}
            </span>
            {showDetails && (
              <IoIosArrowForward onClick={toggleShowDetails} color="#FF9C27" />
            )}
            {!showDetails && (
              <IoIosArrowDown onClick={toggleShowDetails} color="#FF9C27" />
            )}
          </InSameRow>
        </Infos>
      </Preview>
      {!showDetails && (
        <Details>
          <Part>
            <PartTitle>Water</PartTitle>
            <Data>
              <Term>water:</Term> {data.water}
            </Data>
            {data.stretch && (
              <Data>
                <Term>stretch:</Term> {data.stretch}
              </Data>
            )}
            {data.watertemp && (
              <Data>
                <Term>watertemp:</Term> {data.watertemp} °C
              </Data>
            )}
            {data.watercolor && (
              <Data>
                <Term>watercolor:</Term> {data.watercolor}
              </Data>
            )}
            {data.waterlevel && (
              <Data>
                <Term>waterlevel:</Term> {data.waterlevel}
              </Data>
            )}
          </Part>
          <Part>
            <PartTitle>Weather</PartTitle>
            {data.weather && (
              <Data>
                <Term>weather:</Term> {data.weather}
              </Data>
            )}
            {data.airpressure && (
              <Data>
                <Term>airpressure:</Term> {data.airpressure} hPa
              </Data>
            )}
            {data.temperature && (
              <Data>
                <Term>temperature:</Term> {data.temperature} °C
              </Data>
            )}
            {data.moon && (
              <Data>
                <Term>moon:</Term> {data.moon}
              </Data>
            )}
            {data.wind && (
              <Data>
                <Term>wind:</Term> {data.wind}
              </Data>
            )}
            {data.windspeed && (
              <Data>
                <Term>windspeed:</Term> {data.windspeed} km/h
              </Data>
            )}
          </Part>
          {data.catches.length > 0 ? (
            data.catches.map((item, index) => (
              <Part key={index}>
                <PartTitle>Catch {index + 1})</PartTitle>
                {item.species && (
                  <Data>
                    <Term>species:</Term> {item.species}
                  </Data>
                )}
                {item.time && (
                  <Data>
                    <Term>time:</Term> {item.time}
                  </Data>
                )}
                {item.length && (
                  <Data>
                    <Term>length:</Term> {item.length} cm
                  </Data>
                )}
                {item.weight && (
                  <Data>
                    <Term>weight:</Term> {item.weight} kg
                  </Data>
                )}
                {item.bait && (
                  <Data>
                    <Term>bait:</Term> {item.bait}
                  </Data>
                )}
                {item.location && (
                  <Data>
                    <Term>location:</Term> {item.location}
                  </Data>
                )}
                {item.notes && (
                  <Data>
                    <Term>notes:</Term> {item.notes}
                  </Data>
                )}
              </Part>
            ))
          ) : (
            <Part>
              <PartTitle>Catch</PartTitle>
              <Data>
                <NoFish>no fish caught this day</NoFish>
              </Data>
            </Part>
          )}
          <Part>
            <PartTitle>Summary</PartTitle>
            <Data>
              <Term>total bites:</Term> {data.bites ? data.bites : '0'}
            </Data>
            <Data>
              <Term>lost fish:</Term> {data.lost ? data.lost : '0'}
            </Data>
          </Part>
          <Button text="Delete card" isAccent={true} onClick={onDelete} />
          <ModalWrapper>
            {showModal && (
              <DeleteModal
                text="card"
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
              />
            )}
          </ModalWrapper>
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

const Preview = styled.div`
  display: flex;
  position: relative;
`;

const Date = styled.div`
  padding: 0 15px;
  padding-right: 25px;
  margin-right: 15px;
  border-right: 3px dotted #a2c36c;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-size: 32px;
    font-weight: bold;
    padding: 0;
    margin: 0;
    color: #687a48;
  }

  span {
    font-size: 20px;
    font-weight: lighter;
    padding: 0;
    margin: 0;
    color: #687a48;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const Year = styled.span`
  color: #687a48;
  font-size: 16px;
  position: absolute;
  right: 5px;
`;

const Together = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const InSameRow = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: 1px;
  }
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
  margin-bottom: 5px;
  width: 100%;
  color: #687a48;
  border-bottom: 2px dotted #a2c36c;
`;

const Data = styled.small`
  font-size: 0.9rem;
`;

const Term = styled.span`
  font-weight: bold;
  color: #687a48;
`;

const NoFish = styled.span`
  font-weight: bold;
  color: #a2c36c;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
