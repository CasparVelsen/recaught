import styled from 'styled-components';

export default function Button({ text, isDark }) {
  return (
    <>
      <NormalButton isDark={isDark} type="button">
        {text}
      </NormalButton>
    </>
  );
}

const NormalButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${props => (props.isDark ? '#687a48' : '#A2C36C')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 20px;

  :hover {
    transform: scale(1.1);
  }
`;
