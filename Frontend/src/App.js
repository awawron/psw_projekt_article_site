import './App.scss';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './components/Main/HomePage';
import LoginPage from './components/Profile/LoginPage';
import ProfilePage from './components/Profile/ProfilePage';
import ArticlePage from './components/Article/ArticlePage';
import Navbar from './components/Main/Navbar';

const PageNotFound = ({ location }) => (
  <div>
    <h3>Couldn't find element: {location.pathname}</h3>
  </div>
);

const App = () => {
  return (
      <div className='body'>
        <Routes>
          <Route path="/" element={<Navigate to="/home" /> }/>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="*" element={<PageNotFound location={useLocation()} />} />
        </Routes>
      </div>
  );
}

export default App;