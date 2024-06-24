import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servers from './pages/Servers';
import ImpsLogin from './pages/ImpsLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Servers/>}></Route>
        <Route path='/login' element={<ImpsLogin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
