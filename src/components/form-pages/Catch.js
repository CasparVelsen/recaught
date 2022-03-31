import styled from 'styled-components';

export default function Catch({ handleOnChange }) {
  return (
    <>
      <Title>Add</Title>
      <Title>Catch data</Title>
      <Small>4 of 5</Small>
      <Progressbar>
        <div></div>
      </Progressbar>
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
          <label htmlFor="location">Location</label>
          <Input
            id="location"
            name="location"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="notes">Notes</label>
          <Input
            id="notes"
            name="notes"
            type="text"
            maxLength={300}
            onChange={handleOnChange}
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
    width: 80%;
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
