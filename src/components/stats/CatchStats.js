import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import Bait from './charts/catch/Bait';
import Species from './charts/catch/Species';

export default function CatchStats({ filteredCardsByWater }) {
  const [showOptions, setShowOptions] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <>
      <Select onClick={() => setShowOptions(!showOptions)}>
        <Header>
          select statistics for:
          {!showOptions && <IoIosArrowForward size={20} color={'#a2c36c'} />}
          {showOptions && <IoIosArrowDown size={20} color={'#a2c36c'} />}
        </Header>

        {showOptions && (
          <Options>
            <div>
              <button onClick={() => setPage(0)}>Species</button>
              <button onClick={() => setPage(1)}>Bait</button>
            </div>
            <div>
              <button onClick={() => setPage(2)}>Length</button>
              <button onClick={() => setPage(3)}>Weight</button>
            </div>
          </Options>
        )}
      </Select>

      <div>
        {page === 0 && (
          <div>
            <Title>Species:</Title>
            <Species filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 1 && (
          <div>
            <Title>Bait:</Title>
            <Bait filteredCardsByWater={filteredCardsByWater} />
          </div>
        )}
        {page === 2 && (
          <div>
            <Title>Length:</Title>
          </div>
        )}
        {page === 3 && (
          <div>
            <Title>Weight:</Title>
          </div>
        )}
      </div>
    </>
  );
}

const Select = styled.div`
  width: 100%;
  border: 1px solid #a2c36c;
  border-radius: 10px;
  color: #aaa;
  background-color: white;
  font-size: 1rem;
  padding: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  background-color: white;
  margin: 10px 0;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    border: 1px solid #a2c36c;
    border-radius: 10px;
    background-color: white;
    padding: 5px;
    margin-bottom: 10px;
    color: #aaa;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  }
`;

const Title = styled.div`
  margin: 10px 0 0 0;
`;
