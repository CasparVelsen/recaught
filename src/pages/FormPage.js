import styled from 'styled-components';

export default function FormPage() {
  return (
    <>
      <Header>formpage</Header>
      <main>
        <h1>Create your entry:</h1>
      </main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 38px;
  border: 1px solid black;
`;
