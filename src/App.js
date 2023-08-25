import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Teacher from './pages/Teacher/Teacher';
import Header from './components/Header/Header';
import Questions from './components/Questions';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Student from './pages/student/student';
import QuizDetails from './pages/quiz/quiz';
import QuizResult from './pages/quiz_result/quizresult';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/questions' element={<Questions/>}/> 
      <Route path='/student' element={<Student/>}/>
      <Route path='/quiz/:id' element={<QuizDetails/>}/>
      <Route path="/quiz/:id/result" element={<QuizResult/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
