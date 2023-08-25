import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Teacher from './pages/Teacher/Teacher';
import Header from './components/Header/Header';
import Questions from './components/Questions';
import Login from './pages/Login';
import SignUp from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/questions' element={<Questions/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App