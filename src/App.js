import './App.scss';
import Login from './pages/Login';
import HomeAdmin from './pages/HomeAdmin';
import AddUser from './pages/AddUser';
import ProfilePage from './pages/ProfilePage';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='page-wrapper'>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<HomeAdmin />} /> 
        <Route path="/addUser" element={<AddUser />} /> 
        <Route path="/profilePage" element={<ProfilePage />} /> 
      </Routes>
    </div>
  );
}

export default App;
