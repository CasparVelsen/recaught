import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import styled from 'styled-components';
import useLocalStorage from './hooks/useLocalStorage';
import { useState } from 'react';

export default function App() {
  const [cards, setCards] = useLocalStorage('cards', []);
  const [catches, setCatches] = useState([]);

  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage cards={cards} catches={catches} />}
        />
        <Route
          path="/formpage"
          element={
            <FormPage onCreateCard={createCard} handleAddCatch={createCatch} catches={catches} />
          }
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </>
  );

  function createCard(formData) {
    setCards([...cards, formData]);
    navigate('/');
  }

  function createCatch(event) {
    event.preventDefault();
    let newCatch = {
      id: Date.now(),
      species: document.getElementById('species').value,
      time: document.getElementById('time').value,
      length: document.getElementById('length').value,
      weight: document.getElementById('weight').value,
      bait: document.getElementById('bait').value,
      location: document.getElementById('location').value,
      notes: document.getElementById('notes').value,
    };
    setCatches([...catches, newCatch]);
  }
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
