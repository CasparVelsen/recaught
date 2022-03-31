import styled from 'styled-components';
import moment from 'moment';

export default function Start({ handleOnChange, formData }) {
  return (
    <>
      <Fieldset>
        <Part>
          <label htmlFor="date">
            Date <Hint>(no future dates)</Hint>
          </label>
          <Input
            id="date"
            name="date"
            type="date"
            max={moment().format('YYYY-MM-DD')}
            onChange={handleOnChange}
            value={formData.date}
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
            onChange={handleOnChange}
            value={formData.target}
            required
          />
        </Part>
        <Part>
          <label htmlFor="time">
            From <Hint>(half hour values)</Hint>
          </label>
          <Input
            id="time"
            name="time"
            type="time"
            step={1800}
            onChange={handleOnChange}
            value={formData.time}
            required
          />
        </Part>
        <Part>
          <label htmlFor="timeto">
            To <Hint>(half hour values)</Hint>
          </label>
          <Input
            id="timeto"
            name="timeto"
            type="time"
            step={1800}
            onChange={handleOnChange}
            value={formData.timeto}
            required
          />
        </Part>
      </Fieldset>
    </>
  );
}

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

const Input = styled.input`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
`;

const Hint = styled.small`
  font-size: 0.8rem;
  color: #aaa;
`;
