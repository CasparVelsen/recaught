import styled from 'styled-components';
import SubmitButton from '../SubmitButton';

export default function Summary({ handleOnChange, formData }) {
  return (
    <>
      <Fieldset>
        <Part>
          <label htmlFor="bites">Total bites</label>
          <Input
            id="bites"
            name="bites"
            type="number"
            min={0}
            onChange={handleOnChange}
            value={formData.bites}
          />
        </Part>
        <Part>
          <label htmlFor="lost">Lost fish</label>
          <Input
            id="lost"
            name="lost"
            type="number"
            min={0}
            onChange={handleOnChange}
            value={formData.lost}
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
