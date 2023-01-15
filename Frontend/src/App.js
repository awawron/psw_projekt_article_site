import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ArticlePage from './components/ArticlePage';
import Navbar from '../components/Main/NavBar';

const PageNotFound = ({ location }) => (
  <div>
    <h3>Couldn't find element: {location.pathname}</h3>
  </div>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<PageNotFound location={useLocation()} />} />
      </Routes>
    </div>
  );
}

export default App;
