import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiPlusCircle, HiOutlineTrash } from 'react-icons/hi';
import Button from '../Button';
import FlyBoxSelect from './FlyBoxSelect';

const initialValues = {
  species: '',
  time: '',
  length: '',
  weight: '',
  bait: '',
  location: '',
  notes: '',
  _id: '',
  author: '',
};

export default function Catch({
  handleAddCatch,
  deleteCatch,
  catches,
  profile,
  profileCards,
}) {
  const [showInputs, setShowInputs] = useState(true);
  const [values, setValues] = useState(initialValues);
  const [showFlyBox, setShowFlyBox] = useState(false); // Zustand für FlyBox-Ansicht

  function toggleShowInputs() {
    setShowInputs(!showInputs);
  }

  const handleChange = event => {
    const { name, value } = event.target;
    const _id = Math.random();
    setValues({
      ...values,
      [name]: value,
      _id: _id,
      author: profile._id,
    });
  };

  const handleFlyChoice = bait => {
    setValues({
      ...values,
      bait: bait,
      _id: Math.random(),
      author: profile._id,
    });
    setShowFlyBox(prevState => !prevState);
  };

  const handleFlyBoxClick = () => {
    setShowFlyBox(prevState => !prevState);
  };

  const disabled = values === initialValues;

  return (
    <>
      <Section>
        <div onClick={toggleShowInputs}>
          <Title>
            My catches:
            {showInputs && (
              <AiOutlinePlusCircle onClick={toggleShowInputs} color="#FF9C27" />
            )}
            {!showInputs && (
              <AiOutlineMinusCircle
                onClick={toggleShowInputs}
                color="#FF9C27"
              />
            )}
          </Title>
        </div>
        {!showInputs && (
          <div>
            <Fieldset>
              <Part>
                <label htmlFor="species">Species</label>
                <Input
                  onChange={handleChange}
                  value={values.species}
                  id="species"
                  name="species"
                  type="text"
                  maxLength={100}
                />
              </Part>
              <Part>
                <label htmlFor="time">Time</label>
                <Input
                  onChange={handleChange}
                  value={values.time}
                  id="time"
                  name="time"
                  type="time"
                />
              </Part>
              <Part>
                <label htmlFor="length">Length</label>
                <Input
                  onChange={handleChange}
                  value={values.length}
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
                  onChange={handleChange}
                  value={values.weight}
                  id="weight"
                  name="weight"
                  type="number"
                  step={0.1}
                  min={0}
                  placeholder="kg"
                />
              </Part>
              <Part>
                <Wrapper>
                  <label htmlFor="bait">Bait</label>
                  {!showFlyBox && (
                    <FlyBoxButton onClick={handleFlyBoxClick}>
                      flybox
                    </FlyBoxButton>
                  )}
                  {showFlyBox && (
                    <FlyBoxSelect
                      profileCards={profileCards}
                      handleChange={handleChange}
                      handleFlyChoice={handleFlyChoice}
                      handleFlyBoxClick={handleFlyBoxClick}
                    />
                  )}
                </Wrapper>
                <Input
                  onChange={handleChange}
                  value={values.bait}
                  id="bait"
                  name="bait"
                  type="text"
                  list="baitlist"
                  maxLength={100}
                />
              </Part>
              <Part>
                <label htmlFor="location">Location</label>
                <Input
                  onChange={handleChange}
                  value={values.location}
                  id="location"
                  name="location"
                  type="text"
                  maxLength={100}
                />
              </Part>
              <Notes>
                <label htmlFor="notes">Notes</label>
                <Input
                  onChange={handleChange}
                  value={values.notes}
                  id="notes"
                  name="notes"
                  type="text"
                  maxLength={300}
                />
              </Notes>
            </Fieldset>
            <Button
              text="Add Catch"
              onClick={() => {
                handleAddCatch(values);
                setValues(initialValues);
              }}
              disabled={disabled}
              icon={<HiPlusCircle />}
            />
            <CatchList>
              <span>Catchlist:</span>
              {catches ? (
                catches.map((data, index) => (
                  <Catches key={index}>
                    <span>{index + 1}.</span>
                    <span>{data.species}</span>
                    <span>{data.length} cm</span>
                    <HiOutlineTrash
                      size={25}
                      color={'#a2c36c'}
                      onClick={() => deleteCatch(data._id, values)}
                    />
                  </Catches>
                ))
              ) : (
                <p>no catches yet, add some</p>
              )}
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlyBoxButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  color: #ff9c27;
  padding: 0;
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
  background-color: white;
  height: 25px;
`;

const CatchList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;

  span {
    font-weight: bold;
    color: #687a48;
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
