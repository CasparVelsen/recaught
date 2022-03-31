import styled from 'styled-components';

export default function SubmitButton({ text, isAccent, icon }) {
  return (
    <>
      <Button isAccent={isAccent} type="submit">
        {text} {icon}
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${props => (props.isAccent ? '#FF9C27' : '#A2C36C')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;

  :hover {
    transform: scale(1.1);
  }
`;
