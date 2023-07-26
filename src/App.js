
import Navbar from './components/navbar';
import React from 'react';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const title = "Textutils"

  return (
    <>

      <Navbar title={title} />
      <div className='container my-3'>

        <Router>
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter text to analyze" />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
