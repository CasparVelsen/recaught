import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiPlusCircle, HiOutlineTrash } from 'react-icons/hi';
import Button from '../Button';

export default function Catch({ handleAddCatch, catches }) {
  const [showInputs, setShowInputs] = useState(true);
  function toggleShowInputs() {
    setShowInputs(!showInputs);
  }

  console.log(catches);

  return (
    <>
      <Section>
        <Title>
          Add your catches:
          {showInputs && (
            <AiOutlinePlusCircle onClick={toggleShowInputs} color="#FF9C27" />
          )}
          {!showInputs && (
            <AiOutlineMinusCircle onClick={toggleShowInputs} color="#FF9C27" />
          )}
        </Title>
        {!showInputs && (
          <div>
            <Fieldset>
              <Part>
                <label htmlFor="species">Species</label>
                <Input
                  id="species"
                  name="species"
                  type="text"
                  maxLength={100}
                />
              </Part>
              <Part>
                <label htmlFor="time">Time</label>
                <Input id="time" name="time" type="time" />
              </Part>
              <Part>
                <label htmlFor="length">Length</label>
                <Input
                  id="length"
                  name="length"
                  type="number"
                  min={0}
                  placeholder="cm"
                />
              </Part>
              <Part>
                <label htmlFor="weight">Weight</label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  step={0.01}
                  min={0}
                  placeholder="kg"
                />
              </Part>
              <Part>
                <label htmlFor="bait">Bait</label>
                <Input id="bait" name="bait" type="text" maxLength={100} />
              </Part>
              <Part>
                <label htmlFor="location">Location</label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  maxLength={100}
                />
              </Part>
              <Notes>
                <label htmlFor="notes">Notes</label>
                <Input id="notes" name="notes" type="text" maxLength={300} />
              </Notes>
            </Fieldset>
            <Button
              text={[<HiPlusCircle />, 'Add Catch']}
              isDark={true}
              onClick={handleAddCatch}
            />
            {console.log(catches)}
            <CatchList>
              <span>Your catches:</span>
              {catches.map((data, index) => (
                <Catches key={index}>
                  <span>{index + 1}.</span>
                  <span>{data.species}</span>
                  <span>{data.length} cm</span>
                  <HiOutlineTrash size={25} color={'#a2c36c'} />
                </Catches>
              ))}
            </CatchList>
          </div>
        )}
      </Section>
    </>
  );
}

const Section = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
  border: 0.5px solid #a2c36c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin-top: 20px;
`;

const Title = styled.div`
  color: #687a48;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 10px 0 30px;
  border: none;
  position: relative;
  font-size: 1rem;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notes = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
`;

const CatchList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;

  span {
    font-weight: bold;
  }
`;

const Catches = styled.li`
  border: 0.5px solid #ff9c27;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  background-color: #fffcf8;

  span {
    font-size: 1rem;
    color: #687a48;
    margin: 0;
    font-weight: bold;
  }
`;
