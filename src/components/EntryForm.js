import styled from 'styled-components';

export default function EntryForm() {
  return (
    <div>
      <Form>
        <Fieldset>
          <Legend>general infos</Legend>
          <Div>
            <label htmlFor="date">Date</label>
            <Input id="date" name="date" type="date" required />
          </Div>
          <Div>
            <label htmlFor="time">Time</label>
            <Input id="time" name="time" type="time" required />
          </Div>
          <Div>
            <label htmlFor="target-species">target species</label>
            <Input
              id="target-species"
              name="target-species"
              type="text"
              required
            />
          </Div>
        </Fieldset>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
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

const Legend = styled.legend`
  position: absolute;
  width: 100%;
  font-size: smaller;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
`;
