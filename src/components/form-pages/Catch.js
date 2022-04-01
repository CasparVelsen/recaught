import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiPlusCircle } from 'react-icons/hi';
import Catches from './Catches';
import Button from '../Button';

export default function Catch({ handleOnChange }) {
  const [showInputs, setShowInputs] = useState(true);
  function toggleShowInputs() {
    setShowInputs(!showInputs);
  }

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
                  onChange={handleOnChange}
                />
              </Part>
              <Part>
                <label htmlFor="timeto">Time</label>
                <Input
                  id="timeto"
                  name="timeto"
                  type="time"
                  onChange={handleOnChange}
                />
              </Part>
              <Part>
                <label htmlFor="length">Length</label>
                <Input
                  id="length"
                  name="length"
                  type="number"
                  min={0}
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                  placeholder="kg"
                />
              </Part>
              <Part>
                <label htmlFor="bait">Bait</label>
                <Input
                  id="bait"
                  name="bait"
                  type="text"
                  maxLength={100}
                  onChange={handleOnChange}
                />
              </Part>
              <Part>
                <label htmlFor="location">Location</label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  maxLength={100}
                  onChange={handleOnChange}
                />
              </Part>
              <Notes>
                <label htmlFor="notes">Notes</label>
                <Input
                  id="notes"
                  name="notes"
                  type="text"
                  maxLength={300}
                  onChange={handleOnChange}
                />
              </Notes>
            </Fieldset>
            <Button text={[<HiPlusCircle />, 'Add Catch']} isDark={true} />
          </div>
        )}
        <Catches handleOnChange={handleOnChange} />
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
