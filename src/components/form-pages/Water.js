import styled from 'styled-components';
import ScreenRaderOnly from '../ScreenRaderOnly';

export default function Water({ handleOnChange }) {
  return (
    <>
      <Title>Add</Title>
      <Title>water data:</Title>
      <Small>2 of 5</Small>
      <Progressbar>
        <div></div>
      </Progressbar>
      <Fieldset>
        <Part>
          <label htmlFor="water">
            water<ScreenRaderOnly>Waters</ScreenRaderOnly>
          </label>
          <Input
            id="water"
            name="water"
            type="text"
            maxLength={25}
            onChange={handleOnChange}
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
            onChange={handleOnChange}
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
            onChange={handleOnChange}
            placeholder="°C"
          />
        </Part>
        <Part>
          <label htmlFor="watercolor">Water Color</label>
          <Select
            id="watercolor"
            name="watercolor"
            type="text"
            onChange={handleOnChange}
          >
            <option value="cloudy">cloudy</option>
            <option value="normal">normal</option>
            <option value="clear">clear</option>
          </Select>
        </Part>
        <Part>
          <label htmlFor="waterlevel">Water Level</label>
          <Select
            id="waterlevel"
            name="waterlevel"
            type="text"
            onChange={handleOnChange}
          >
            <option value="low">low</option>
            <option value="normal">normal</option>
            <option value="high">high</option>
          </Select>
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
    width: 40%;
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

const Select = styled.select`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 25px;
`;
