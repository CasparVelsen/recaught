import styled from 'styled-components';

export default function SubmitButton({ text }) {
  return (
    <>
      <Button type="submit">{text}</Button>
    </>
  );
}

const Button = styled.button``;
