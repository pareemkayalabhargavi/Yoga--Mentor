import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Yoga from './Yoga';
import Home from './pages/Home';
import About from './pages/About/About';
import Tutorials from './pages/Tutorials/Tutorials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/start' element={<Yoga />} />
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tutorials' element={<Tutorials/>}/>
      </Routes>
    </Router>
  );
}

export default App;
