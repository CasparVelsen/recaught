import styled from 'styled-components';

export default function Catches({ handleOnChange }) {
  return (
    <>
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
    </>
  );
}

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
