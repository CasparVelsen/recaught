import styled from 'styled-components';

export default function HomePage() {
  return (
    <>
      <Header>Homepage</Header>
      <main>
        <h1>Your entries:</h1>
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
