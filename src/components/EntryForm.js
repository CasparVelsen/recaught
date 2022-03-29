import styled from 'styled-components';
import moment from 'moment';

import { useState } from 'react';

import SubmitButton from './Button';

export default function EntryForm({ onCreateCard }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [targetSpecies, setTargetSpecies] = useState('');
  const [water, setWater] = useState('');
  const [stretch, setStretch] = useState('');
  const [waterTemp, setWaterTemp] = useState('');
  const [waterColor, setWaterColor] = useState('');
  const [waterLevel, setWaterLevel] = useState('');

  return (
    <div>
      <Form
        aria-labelledby="formHeader"
        onSubmit={handleSubmit}
        autoComplete="off"
        labeltext="form"
      >
        <small>general infos</small>
        <Fieldset>
          <Part>
            <label htmlFor="date">Date</label>
            <Input
              id="date"
              name="date"
              type="date"
              max={moment().format('YYYY-MM-DD')}
              onChange={event => setDate(event.target.value)}
              value={date}
              required
            />
          </Part>
          <Part>
            <label htmlFor="time">Time</label>
            <Input
              id="time"
              name="time"
              type="time"
              onChange={event => setTime(event.target.value)}
              value={time}
              required
            />
          </Part>
          <Part>
            <label htmlFor="target">Target species</label>
            <Input
              id="target"
              name="target"
              type="text"
              maxLength={25}
              onChange={event => setTargetSpecies(event.target.value)}
              value={targetSpecies}
              required
            />
          </Part>
        </Fieldset>
        <small>water</small>
        <Fieldset>
          <Part>
            <label htmlFor="water">water</label>
            <Input
              id="water"
              name="water"
              type="text"
              maxLength={25}
              onChange={event => setWater(event.target.value)}
              value={water}
              placeholder="water"
              required
            />
          </Part>
          <Part>
            <label htmlFor="stretch">Stretch</label>
            <Input
              id="stretch"
              name="stretch"
              type="text"
              maxLength={100}
              onChange={event => setStretch(event.target.value)}
              value={stretch}
            />
          </Part>
          <Part>
            <label htmlFor="watertemp">Water temperature</label>
            <Input
              id="watertemp"
              name="watertemp"
              type="number"
              min={-5}
              max={50}
              onChange={event => setWaterTemp(event.target.value)}
              value={waterTemp}
              placeholder="°C"
            />
          </Part>
          <Part>
            <label htmlFor="watercolor">Water Color</label>
            <select
              id="watercolor"
              name="watercolor"
              type="text"
              onChange={event => setWaterColor(event.target.value)}
              value={waterColor}
            >
              <option value="cloudy">cloudy</option>
              <option value="normal">normal</option>
              <option value="clear">clear</option>
            </select>
          </Part>
          <Part>
            <label htmlFor="waterlevel">Water Level</label>
            <select
              id="waterlevel"
              name="waterlevel"
              type="text"
              onChange={event => setWaterLevel(event.target.value)}
              value={waterLevel}
            >
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="high">high</option>
            </select>
          </Part>
        </Fieldset>
        <SubmitButton text="Submit" isAccent={true} />
      </Form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateCard({
      date,
      time,
      water,
      targetSpecies,
    });
    setDate('');
    setTime('');
    setTargetSpecies('');
    setWater('');
    setStretch('');
    setWaterTemp('');
    setWaterColor('');
    setWaterLevel('');
  }
}

const Form = styled.form`
  padding: 0 10px;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 30px 0;
  border: none;
  border-top: 1px solid black;
  position: relative;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
`;
