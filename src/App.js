import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import styled from 'styled-components';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
