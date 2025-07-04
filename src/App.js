import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Question1 from './Pages/Question1';
import logo from './logo.svg';
import './App.css';
import Question2 from './Pages/Question2';
import Question3 from './Pages/Question3';
import Question4 from './Pages/Question4';
import Question5 from './Pages/Question5';
import Ending from './Pages/Ending';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/question1_748302900' element={<Question1/>}/>
        <Route path='/question2_123456789' element={<Question2/>}/>
        <Route path='/question3_234578900' element={<Question3/>} />
        <Route path='/question4_374829172' element={<Question4/>} />
        <Route path='/question5_172374930' element={<Question5/>} />
        <Route path='/ending_241234' element={<Ending/>} />


      </Routes>
    </Router>
  );
}

export default App;
