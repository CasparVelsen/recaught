import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function LocationSelect({
  setInputLocation,
  submitLocation,
  inputLocation,
}) {
  return (
    <Overlay>
      <Container>
        <label htmlFor="location">Location</label>
        <Wrapper>
          <Input
            id="location"
            name="location"
            type="text"
            value={inputLocation}
            onChange={e => setInputLocation(e.target.value)}
            placeholder="city name"
          />
          <Button type="button" onClick={submitLocation}>
            <AiOutlineCheckCircle />
          </Button>
        </Wrapper>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Halbtransparenter Hintergrund */
  z-index: 999; /* Overlay muss hinter dem Popup liegen */
`;

const Container = styled.div`
  background-color: #fffcf8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #687a48;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Zentriert den Container */
  width: 80%; /* Oder jede gewünschte Breite */
  max-width: 600px; /* Optional: Maximale Breite für größere Bildschirme */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Damit der Container vor allem anderen liegt */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ff9c27;
  padding: 2px 5px;
  border-radius: 5px;
  color: #aaa;
  background-color: white;
  height: 25px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #687a48;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  width: 25%;
`;
