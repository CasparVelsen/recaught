import styled from 'styled-components';

export default function Water({ handleOnChange }) {
  return (
    <>
      <Fieldset>
        <Part>
          <label htmlFor="water">water</label>
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
