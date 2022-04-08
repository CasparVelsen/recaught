import styled from 'styled-components';

export default function Button({ text, isAccent, onClick, icon }) {
  return (
    <>
      <NormalButton isAccent={isAccent} type="button" onClick={onClick}>
        {icon} {text}
      </NormalButton>
    </>
  );
}

const NormalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isAccent ? '#ff9c27' : '#687a48')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;

  :hover {
    transform: scale(1.1);
  }
`;
