import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import RequirePermission from './components/RequirePermission';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import moment from 'moment';

const initalProfile = {
  _id: '',
  name: '',
};

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const [token, setToken] = useLocalStorage('token', {});
  const [profile, setProfile] = useState(initalProfile);

  const [id, setID] = useState(null); //id confirmDelete mitgeben zum löschen der richtigen Karte

  const [cards, setCards] = useState([]);

  const profileCards = cards
    .filter(card => card.author === profile._id)
    .map(card => ({
      ...card,
      catches: card.catches ?? [], // Setze 'catches' auf ein leeres Array, wenn es undefined ist
    }))
    .sort((a, b) => {
      const dateA = moment(a.date, 'YYYY-MM-DD');
      const dateB = moment(b.date, 'YYYY-MM-DD');
      return dateB.isAfter(dateA) ? 1 : -1; // Neueste zuerst
    });

  useEffect(() => {}, [token]);

  const loginWithNameAndPassword = async credentials => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setToken(data.token);
    navigate('/');
  };

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch('/api/users/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(setProfile);
  }, [token]);

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

  function onLogout() {
    setToken('');
    window.location.reload(false);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequirePermission token={token}>
              <HomePage
                showModal={showModal}
                profileCards={profileCards}
                handleDelete={handleDeleteCard}
                confirmDelete={handleConfirmDeleteCard}
                cancelDelete={() => setShowModal(false)}
                handleEdit={handleEditCard}
                profile={profile}
              />
            </RequirePermission>
          }
        />
        <Route
          path="/formpage"
          element={
            <RequirePermission token={token}>
              <FormPage
                onCreateCard={createCard}
                profile={profile}
                profileCards={profileCards}
              />
            </RequirePermission>
          }
        />
        <Route
          path="/profile"
          element={
            <RequirePermission token={token}>
              <ProfilePage
                token={token}
                logout={onLogout}
                profile={profile}
                profileCards={profileCards}
              />
            </RequirePermission>
          }
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={loginWithNameAndPassword} />}
        />
        <Route path="/signup" element={<SignUp onCreateUser={createUser} />} />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </>
  );

  async function createCard(formData) {
    const trimmedData = Object.keys(formData).reduce((acc, key) => {
      acc[key] =
        typeof formData[key] === 'string'
          ? formData[key].trim()
          : formData[key];
      return acc;
    }, {});
    setCards([...cards, trimmedData]);
    navigate('/');

    await fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trimmedData),
    });
  }

  async function handleEditCard(editData) {
    try {
      const response = await fetch('/api/cards', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });

      if (!response.ok) throw new Error('Failed to update card');

      const updatedCard = await response.json();

      setCards(prevCards =>
        prevCards.map(card =>
          card._id === updatedCard._id ? updatedCard : card
        )
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  function handleDeleteCard(_id) {
    setID(_id);
    setShowModal(true);
  }

  async function handleConfirmDeleteCard() {
    const filteredCards = cards.filter(card => card._id !== id);
    setCards(filteredCards);
    setShowModal(false);

    await fetch('/api/cards', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    });
  }

  async function createUser(userData) {
    navigate('/profile');

    await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  }
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
