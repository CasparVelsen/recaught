import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function App() {
  const [cards, setCards] = useState([]);
  const [catches, setCatches] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/cards').then(async res => {
      const data = await res.json();
      if (!res.ok) {
        console.error(data);
        return [];
      }
      setCards([...data]);
    });
  }, []);

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
            <FormPage
              onCreateCard={createCard}
              handleAddCatch={createCatch}
              catches={catches}
            />
          }
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </>
  );

  async function createCard(formData) {
    setCards([...cards, formData]);
    navigate('/');

    await fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

  async function createCatch(event) {
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

    await fetch('/api/catches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCatch),
    });
  }
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
