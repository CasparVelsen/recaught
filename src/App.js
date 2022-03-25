import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';

export default function App() {
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formpage" element={<FormPage />} />
    </Routes>
    <footer>
      <Navigation />
    </footer>
  </>;
}
