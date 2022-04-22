import styled from 'styled-components';

export default function Loader() {
  return (
    <LoadingContainer>
      <LoadingCircle></LoadingCircle>
      <LoadingCircle></LoadingCircle>
      <LoadingCircle></LoadingCircle>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: space-around;
`;

const LoadingCircle = styled.div`
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #687a48;
  border-radius: 0.25rem;
`;
