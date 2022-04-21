import Button from '../Button';
import styled from 'styled-components';

export default function DeleteModal({ text, confirmDelete, cancelDelete }) {
  return (
    <Container>
      <Description>Do you really want to delete this {text}?</Description>
      <Buttons>
        <Button text="Yes" isAccent={true} onClick={confirmDelete} />
        <Button text="No" isAccent={false} onClick={cancelDelete} />
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #a2c36c;
  border-radius: 20px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 0.5px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: normal;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;
