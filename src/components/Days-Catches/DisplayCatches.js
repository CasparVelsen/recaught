import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiWeight } from 'react-icons/gi';
import { BiRuler } from 'react-icons/bi';
import Button from '../Button';

export default function DisplayCatches() {
  const [catches, setCatches] = useState([]);
  const [showMore, setShowMore] = useState(true);

  console.log(catches);

  function handleshowMore() {
    setShowMore(!showMore);
  }

  async function onDelete(_id) {
    const filteredCatches = catches.filter(fish => fish._id !== _id);
    setCatches([
      {
        ...catches,
        filteredCatches,
      },
    ]);

    await fetch('api/catches', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
  }

  useEffect(() => {
    fetch('/api/catches').then(async res => {
      const data = await res.json();
      if (!res.ok) {
        console.error(data);
        return [];
      }
      setCatches([...data]);
    });
  }, []);

  return (
    <Catches>
      {catches
        ? catches.map((data, tempId, _id) => (
            <li key={tempId}>
              <Card onClick={handleshowMore}>
                <div>
                  <Title>{data.species}</Title>
                  <span>
                    <BiRuler size={30} color={'#687a48'} />
                    {data.length} cm
                  </span>
                  <span>
                    <GiWeight size={30} color={'#687a48'} />
                    {data.weight} kg
                  </span>
                </div>
                {!showMore && (
                  <Button
                    text={'Delete'}
                    isAccent={true}
                    onClick={() => onDelete(_id)}
                  />
                )}
              </Card>
            </li>
          ))
        : 'no catches yet'}
    </Catches>
  );
}

const Catches = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  width: 100%;
`;

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

  span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 1.1rem;
  padding: 0;
  margin: 0;
  color: #687a48;
  text-align: center;
`;
