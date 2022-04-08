import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CatchCard from './CatchCard';

export default function DisplayCatches() {
  const [catches, setCatches] = useState([]);

  async function handleDelete(_id) {
    const filteredCatches = catches.filter(fish => fish._id !== _id);
    setCatches(filteredCatches);

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
      {catches ? (
        catches.map((data, tempId, _id) => (
          <li key={tempId}>
            <CatchCard data={data} onDelete={handleDelete} />
          </li>
        ))
      ) : (
        <p>no catches yet</p>
      )}
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
