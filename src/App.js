import './App.scss';
import Login from './pages/Login';
import HomeAdmin from './pages/HomeAdmin';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='page-wrapper'>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<HomeAdmin />} /> 
      </Routes>
    </div>
  );
}

export default App;
