import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import styled from 'styled-components';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [cards, setCards] = useLocalStorage('cards', []);
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cards={cards} />} />
        <Route
          path="/formpage"
          element={<FormPage onCreateCard={createCard} />}
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </>
  );

  function createCard(formData) {
    console.log(formData);
    setCards([...cards, formData]);
    navigate('/');
  }
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
