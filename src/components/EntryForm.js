import styled from 'styled-components';

export default function EntryForm() {
  return (
    <div>
      <form>
        <Fieldset>
          <div>
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" required />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input id="time" name="time" type="time" required />
          </div>
        </Fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const Fieldset = styled.fieldset`
  border: none;
`;
