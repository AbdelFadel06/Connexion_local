// import { useEffect } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  // useEffect(()=>{
  //   localStorage.setItem("email", "abdelfadelsaliou@gmail.com");
  //   localStorage.setItem("password", "abdel")
  // },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LoginPage/>} />
        <Route path="/home" element= {<HomePage/>} />

      </Routes>
    </Router>
  )
}

export default App
