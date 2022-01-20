import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Account from './Components/Account/Account';
import WatchedList from './Components/WatchedList/WatchedList';
import Login from './Components/Login/Login';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/mylist" element={<WatchedList />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
