import { GiWeight } from 'react-icons/gi';
import { BiRuler } from 'react-icons/bi';
import Button from '../Button';
import styled from 'styled-components';
import { useState } from 'react';

export default function CatchCard({ onDelete, data }) {
  const [showMore, setShowMore] = useState(true);

  function handleshowMore() {
    setShowMore(!showMore);
  }

  return (
    <Card onClick={handleshowMore}>
      <Title>{data.species}</Title>
      <span>
        <BiRuler size={30} color={'#687a48'} />
        {data.length} cm
      </span>
      {showMore && (
        <div>
          <span>
            <GiWeight size={30} color={'#687a48'} />
            {data.weight} kg
          </span>
        </div>
      )}
      {!showMore && (
        <Button
          text={'Delete'}
          isAccent={true}
          onClick={() => onDelete(data._id)}
        />
      )}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  background-color: #fffcf8;
  font-size: 1rem;
  color: #a2c36c;
  border: 0.5px solid #a2c36c;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 110px;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin: 0 2px;
  }
`;

const Title = styled.h2`
  font-size: 1.1rem;
  padding: 0;
  margin: 0;
  color: #687a48;
  text-align: center;
`;
