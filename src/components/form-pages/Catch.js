import styled from 'styled-components';

export default function Catch({ handleOnChange, formData }) {
  return (
    <>
      <Fieldset>
        <Part>
          <label htmlFor="species">Species</label>
          <Input
            id="species"
            name="species"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
            value={formData.species}
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
            value={formData.bait}
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
            value={formData.length}
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
            value={formData.weight}
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
            value={formData.location}
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
            value={formData.notes}
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
