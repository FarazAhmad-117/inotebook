import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';



export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar heading={"iNotebook"} />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

