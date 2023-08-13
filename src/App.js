import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Teacher from './pages/Teacher/Teacher';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
