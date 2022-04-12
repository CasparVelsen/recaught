import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function App() {
  const [showModal, setShowModal] = useState(false);
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
        <Route
          path="/"
          element={
            <HomePage
              cards={cards}
              handleDelete={handleDeleteCard}
              showModal={showModal}
              confirmDelete={handleConfirmDeleteCard}
              cancelDelete={() => setShowModal(false)}
            />
          }
        />
        <Route
          path="/formpage"
          element={<FormPage onCreateCard={createCard} />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
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

  function handleDeleteCard() {
    setShowModal(true);
  }

  async function handleConfirmDeleteCard(_id) {
    const filteredCards = cards.filter(card => card._id !== _id);
    setCards(filteredCards);
    setShowModal(false);

    await fetch('/api/cards', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
  }
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
