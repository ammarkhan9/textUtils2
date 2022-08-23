import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [dmText, setDmText] = useState("Enable dark mode")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor ='#042743'
      document.body.style.color ='white'
      setDmText("Disable dark mode")
      showAlert("Dark mode has been enabled", "succsess")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor ='white'
      document.body.style.color ='black'
      setDmText("Enable dark mode")
      showAlert("Dark mode has been disabled", "succsess")
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" home="Home" about="AboutText" mode={mode} toggleMode={toggleMode} dmText={dmText}/>
      <Alert alert={alert}/>
      <div> 
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading = 'Try TextUtils - word counter, word counter, character counter' mode={mode}/>} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
