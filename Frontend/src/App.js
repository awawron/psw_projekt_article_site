import './App.scss';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './components/Main/HomePage';
import LoginPage from './components/Profile/LoginPage';
import ProfilePage from './components/Profile/ProfilePage';
import ArticlePage from './components/Article/ArticlePage';
import ToolsPage from './components/Tools/ToolsPage'

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="*" element={<PageNotFound location={useLocation()} />} />
        </Routes>
      </div>
  );
}

export default App;