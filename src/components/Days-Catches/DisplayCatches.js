import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiWeight } from 'react-icons/gi';
import { BiRuler } from 'react-icons/bi';

export default function DisplayCatches() {
  const [catches, setCatches] = useState([]);

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
        ? catches.map((data, tempId) => (
            <li key={tempId}>
              <Card>
                <Title>{data.species}</Title>
                <span>
                  <BiRuler size={30} color={'#687a48'} />
                  {data.length} cm
                </span>
                <span>
                  <GiWeight size={30} color={'#687a48'} />
                  {data.weight} kg
                </span>
              </Card>
            </li>
          ))
        : '...loading cards...'}
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
  padding: 5px;
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
