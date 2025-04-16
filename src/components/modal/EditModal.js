import { useState } from 'react';
import Button from '../Button';
import styled from 'styled-components';
import FlyBoxSelect from '../form-pages/FlyBoxSelect';
import { HiPlusCircle, HiOutlineTrash } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { BiTargetLock } from 'react-icons/bi';
import { MdWater } from 'react-icons/md';
import { IoFishOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import moment from 'moment';

const initialValues = {
  species: '',
  time: '',
  length: '',
  weight: '',
  bait: '',
  location: '',
  notes: '',
  _id: '',
};

export default function EditModal({
  dataforEdit,
  toggleEditing,
  handleEdit,
  profile,
  profileCards,
}) {
  console.log(dataforEdit);
  const [editData, setEditData] = useState(dataforEdit);
  const [values, setValues] = useState(initialValues);
  const [showFlyBox, setShowFlyBox] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  console.log(editData);

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

  async function handleAddCatch(values) {
    const previousCatches = dataforEdit.catches ?? [];
    setEditData({
      ...dataforEdit,
      catches: [...previousCatches, values],
    });
    setEditData({
      ...dataforEdit,
      catches: [...(editData.catches || []), values],
    });
  }

  async function deleteCatch(_id) {
    const filteredCatches = editData.catches.filter(fish => fish._id !== _id);
    setEditData(prevState => ({
      ...prevState,
      catches: filteredCatches,
    }));
  }

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

  const toggleShowInputs = () => {
    setShowInputs(prevState => !prevState);
  };

  return (
    <Card>
      <Preview onClick={toggleEditing}>
        <Year>{editData.date.slice(0, 4)}</Year>
        <Date>
          <div>{editData.date.slice(8, 10)}</div>
          <span>{editData.date.slice(5, 7)}</span>
        </Date>
        <Infos>
          <Together>
            <MdWater size={20} color={'#687a48'} />
            {editData.water}
          </Together>
          <Together>
            <BiTargetLock size={20} color={'#687a48'} />
            {editData.target}
          </Together>
          <InSameRow>
            <span>
              <IoFishOutline color={'#687a48'} />
              {editData.catches ? editData.catches.length : '0'}
            </span>
            <IoIosArrowDown onClick={toggleEditing} color="#FF9C27" />
          </InSameRow>
        </Infos>
      </Preview>
      <Details>
        <PartTitle>General Infos:</PartTitle>
        <Fieldset>
          <Data>
            <Term>date:</Term>
            <Input
              type="date"
              value={editData.date}
              onChange={e => setEditData({ ...editData, date: e.target.value })}
              required
              max={moment().format('YYYY-MM-DD')}
            />
          </Data>
          <Data>
            <Term>water:</Term>
            <Input
              type="text"
              value={editData.water}
              onChange={e =>
                setEditData({ ...editData, water: e.target.value })
              }
              required
              maxLength={25}
            />
          </Data>
          <Data>
            <Term>target:</Term>
            <Input
              type="text"
              value={editData.target}
              onChange={e =>
                setEditData({ ...editData, target: e.target.value })
              }
              required
              maxLength={25}
            />
          </Data>
        </Fieldset>
        <PartTitle>Water Data:</PartTitle>
        <Fieldset>
          <Data>
            <Term>stretch:</Term>
            <Input
              type="text"
              value={editData.stretch}
              onChange={e =>
                setEditData({ ...editData, stretch: e.target.value })
              }
              maxLength={25}
            />
          </Data>
          <Data>
            <Term>water temperature:</Term>
            <Wrapper>
              <Input
                type="number"
                value={editData.watertemp}
                onChange={e =>
                  setEditData({ ...editData, watertemp: e.target.value })
                }
                min={-5}
                max={50}
              />
              <span>°C</span>
            </Wrapper>
          </Data>
          <Data>
            <Term>water color:</Term>
            <Select
              value={editData.watercolor}
              onChange={e =>
                setEditData({ ...editData, watercolor: e.target.value })
              }
            >
              <option value="">select</option>
              <option value="cloudy">cloudy</option>
              <option value="normal">normal</option>
              <option value="clear">clear</option>
            </Select>
          </Data>
          <Data>
            <Term>water level:</Term>
            <Select
              value={editData.waterlevel}
              onChange={e =>
                setEditData({ ...editData, waterlevel: e.target.value })
              }
            >
              <option value="">select</option>
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="high">high</option>
            </Select>
          </Data>
        </Fieldset>
        <PartTitle>Weather data:</PartTitle>
        <Fieldset>
          <Data>
            <Term>weather:</Term>
            <Select
              value={editData.weather}
              onChange={e =>
                setEditData({ ...editData, weather: e.target.value })
              }
            >
              <option value="">select</option>
              <option value="sunny">sunny</option>
              <option value="cloudy">cloudy</option>
              <option value="rainy">rainy</option>
              <option value="stormy">stormy</option>
              <option value="foggy">foggy</option>
              <option value="snow">snow</option>
            </Select>
          </Data>
          <Data>
            <Term>air pressure:</Term>
            <Wrapper>
              <Input
                value={editData.airpressure}
                onChange={e =>
                  setEditData({ ...editData, airpressure: e.target.value })
                }
                type="number"
                min={850}
                max={1150}
              />
              <span>hPa</span>
            </Wrapper>
          </Data>
          <Data>
            <Term>temperature:</Term>
            <Wrapper>
              <Input
                value={editData.temperature}
                onChange={e =>
                  setEditData({ ...editData, temperature: e.target.value })
                }
                type="number"
                min={-50}
                max={50}
              />
              <span>°C</span>
            </Wrapper>
          </Data>
          <Data>
            <Term>moon:</Term>
            <Select
              value={editData.moon}
              onChange={e => setEditData({ ...editData, moon: e.target.value })}
            >
              <option value="">select</option>
              <option value="full moon">full moon</option>
              <option value="increasing moon">increasing moon</option>
              <option value="waning moon">waning moon</option>
              <option value="new moon">new moon</option>
              <option value="snow">snow</option>
            </Select>
          </Data>
          <Data>
            <Term>wind:</Term>
            <Select
              value={editData.wind}
              onChange={e => setEditData({ ...editData, wind: e.target.value })}
            >
              <option value="">select</option>
              <option value="full moon">full moon</option>
              <option value="increasing moon">increasing moon</option>
              <option value="waning moon">waning moon</option>
              <option value="new moon">new moon</option>
              <option value="snow">snow</option>
            </Select>
          </Data>
          <Data>
            <Term>wind speed:</Term>
            <Wrapper>
              <Input
                value={editData.windspeed}
                onChange={e =>
                  setEditData({ ...editData, windspeed: e.target.value })
                }
                type="number"
                min={0}
              />
              <span>km/h</span>
            </Wrapper>
          </Data>
        </Fieldset>
        <Section>
          <div onClick={toggleShowInputs}>
            <CatchesTitle>
              Edit your catches:
              {showInputs && (
                <AiOutlineMinusCircle
                  onClick={toggleShowInputs}
                  color="#FF9C27"
                />
              )}
              {!showInputs && (
                <AiOutlinePlusCircle
                  onClick={toggleShowInputs}
                  color="#FF9C27"
                />
              )}
            </CatchesTitle>
          </div>
          {showInputs && (
            <div>
              {!Array.isArray(dataforEdit.catches) ||
              dataforEdit.catches.length > 0 ? (
                dataforEdit.catches.map((item, index) => (
                  <>
                    <PartTitle>Catch {index + 1}):</PartTitle>
                    <Fieldset key={index}>
                      <Data>
                        <Term>species:</Term>
                        <Input
                          type="text"
                          maxLength={100}
                          value={item.species}
                          onChange={e => {
                            const updatedCatches = [...editData.catches];
                            updatedCatches[index].species = e.target.value;
                            setEditData({
                              ...editData,
                              catches: updatedCatches,
                            });
                          }}
                        />
                      </Data>
                      <Data>
                        <Term>time:</Term>
                        <Input
                          type="time"
                          value={item.time}
                          onChange={e => {
                            const updatedCatches = [...editData.catches];
                            updatedCatches[index].time = e.target.value;
                            setEditData({
                              ...editData,
                              catches: updatedCatches,
                            });
                          }}
                        />
                      </Data>
                      <Data>
                        <Term>length:</Term>
                        <Wrapper>
                          <Input
                            type="number"
                            min={0}
                            value={item.length}
                            onChange={e => {
                              const updatedCatches = [...editData.catches];
                              updatedCatches[index].length = e.target.value;
                              setEditData({
                                ...editData,
                                catches: updatedCatches,
                              });
                            }}
                          />
                          <span>cm</span>
                        </Wrapper>
                      </Data>
                      <Data>
                        <Term>weight:</Term>
                        <Wrapper>
                          <Input
                            type="number"
                            step={0.1}
                            min={0}
                            value={item.weight}
                            onChange={e => {
                              const updatedCatches = [...editData.catches];
                              updatedCatches[index].weight = e.target.value;
                              setEditData({
                                ...editData,
                                catches: updatedCatches,
                              });
                            }}
                          />
                          <span>kg</span>
                        </Wrapper>
                      </Data>
                      <Data>
                        <Wrapper>
                          <Term>bait:</Term>
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
                          type="text"
                          maxLength={100}
                          value={item.bait}
                          onChange={e => {
                            const updatedCatches = [...editData.catches];
                            updatedCatches[index].bait = e.target.value;
                            setEditData({
                              ...editData,
                              catches: updatedCatches,
                            });
                          }}
                        />
                      </Data>
                      <Data>
                        <Term>location:</Term>
                        <Input
                          type="text"
                          maxLength={100}
                          value={item.location}
                          onChange={e => {
                            const updatedCatches = [...editData.catches];
                            updatedCatches[index].location = e.target.value;
                            setEditData({
                              ...editData,
                              catches: updatedCatches,
                            });
                          }}
                        />
                      </Data>
                      <Notes>
                        <Term>notes:</Term>
                        <Input
                          type="text"
                          maxLength={100}
                          value={item.notes}
                          onChange={e => {
                            const updatedCatches = [...editData.catches];
                            updatedCatches[index].notes = e.target.value;
                            setEditData({
                              ...editData,
                              catches: updatedCatches,
                            });
                          }}
                        />
                      </Notes>
                    </Fieldset>
                  </>
                ))
              ) : (
                <>
                  <PartTitle>Catch:</PartTitle>
                  <Fieldset>
                    <Data>
                      <Term>species:</Term>
                      <Input
                        onChange={handleChange}
                        value={values.species}
                        id="species"
                        name="species"
                        type="text"
                        maxLength={100}
                      />
                    </Data>
                    <Data>
                      <Term htmlFor="time">time</Term>
                      <Input
                        onChange={handleChange}
                        value={values.time}
                        id="time"
                        name="time"
                        type="time"
                      />
                    </Data>
                    <Data>
                      <Term htmlFor="length">length</Term>
                      <Input
                        onChange={handleChange}
                        value={values.length}
                        id="length"
                        name="length"
                        type="number"
                        min={0}
                        placeholder="cm"
                      />
                    </Data>
                    <Data>
                      <Term htmlFor="weight">weight</Term>
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
                    </Data>
                    <Part>
                      <Wrapper>
                        <Term htmlFor="bait">bait</Term>
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
                    <Data>
                      <Term htmlFor="location">location</Term>
                      <Input
                        onChange={handleChange}
                        value={values.location}
                        id="location"
                        name="location"
                        type="text"
                        maxLength={100}
                      />
                    </Data>
                    <Data>
                      <Term>notes</Term>
                      <Input
                        onChange={handleChange}
                        value={values.notes}
                        id="notes"
                        name="notes"
                        type="text"
                        maxLength={300}
                      />
                    </Data>
                  </Fieldset>
                  <Button
                    text="Add Catch"
                    onClick={() => {
                      handleAddCatch(values);
                      setValues(initialValues);
                    }}
                    icon={<HiPlusCircle />}
                  />
                  <CatchList>
                    <span>Your catches:</span>
                    {editData.catches ? (
                      editData.catches.map((data, index) => (
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
                </>
              )}
            </div>
          )}
        </Section>
        <PartTitle>Summary</PartTitle>
        <Fieldset>
          <Data>
            <Term>total bites:</Term>
            <Input
              value={editData.bites}
              onChange={e =>
                setEditData({ ...editData, bites: e.target.value })
              }
              type="number"
              min={0}
            />
          </Data>
          <Data>
            <Term>lost fish:</Term>
            <Input
              value={editData.lost}
              onChange={e => setEditData({ ...editData, lost: e.target.value })}
              type="number"
              min={0}
            />
          </Data>
        </Fieldset>
      </Details>
      <Submit>
        <Button
          text="Save changes"
          onClick={() => {
            handleEdit(editData);
            toggleEditing();
          }}
        />
        <Button text="Cancel" isAccent={true} onClick={toggleEditing} />
      </Submit>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; // wichtig für volle Höhe
`;

const Preview = styled.div`
  display: flex;
  position: relative;
  padding: 15px;
  flex-shrink: 0;
  border: 0.5px solid #a2c36c;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
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
  right: 15px;
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
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Section = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
  border: 0.5px solid #a2c36c;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const PartTitle = styled.h3`
  font-size: 1rem;
  padding: 0;
  padding-bottom: 2px;
  margin: 0;
  margin-bottom: 5px;
  width: 100%;
  color: #687a48;
  border-bottom: 2px dotted #a2c36c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const CatchesTitle = styled.h3`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  width: 100%;
  color: #687a48;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
`;

const Term = styled.div`
  font-size: 1rem;
  color: #a2c36c;
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

const Select = styled.select`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 25px;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 5px 0 10px;
  border: none;
  position: relative;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 8px;
    color: #687a48;
  }
`;

const FlyBoxButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  color: #ff9c27;
  padding: 0;
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

const Notes = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Submit = styled.div`
  flex-shrink: 0;
  background-color: #fffcf8;
  padding: 20px 10px 10px 10px;
`;
