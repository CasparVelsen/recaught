import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import styled from 'styled-components';
import { useState } from 'react';

export default function App() {
  const [cards, setCards] = useState([]);
  const [target, setTarget] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage target={target} cards={cards} />} />
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

  function createCard({ date, time, target }) {
    console.log(date, time, target);
    setTarget(target);
    setCards({ date, time, target });
    navigate('/');
  }
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
