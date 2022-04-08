import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function App() {
  const [cards, setCards] = useState([]);

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
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
