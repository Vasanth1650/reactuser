import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './components/LoginPage'
import Dashboard from './components/dashboard';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
