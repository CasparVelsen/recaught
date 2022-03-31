import styled from 'styled-components';
import moment from 'moment';

export default function Start({ handleOnChange }) {
  return (
    <>
      <Title>Create a</Title>
      <Title>new entry:</Title>
      <Small>1 of 5</Small>
      <Progressbar>
        <div></div>
      </Progressbar>
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
            required
          />
        </Part>
      </Fieldset>
    </>
  );
}

const Title = styled.h1`
  color: #687a48;
  font-size: 32px;
  width: 100%;
  margin: 0;
`;
const Small = styled.small`
  font-size: 0.8rem;
  color: #aaa;
  position: absolute;
  right: 10px;
  top: 70px;
  background-color: #fffcf8;
`;
const Progressbar = styled.div`
  border: 0.5px solid #ff9c27;
  height: 10px;
  border-radius: 10px;
  margin: 15px 0 15px;

  div {
    width: 20%;
    height: 100%;
    background-color: #a2c36c;
    border-radius: 10px;
  }
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
