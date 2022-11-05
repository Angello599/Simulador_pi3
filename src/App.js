import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Swithc, Route } from 'react-router-dom'
import { week } from './util'
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';



function App() {
  const [currenMonth, setCurrenMonth] = useState(week)
  return (
    <Router>
      <Sidebar />
     { /*<img src={horario} alt="Italian Trulli"></img> */}
     <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth}/>
      </div>
     </div>
     {/*
      <div className="h-screen flex flex-columns">
          <CalendarHeader />
          <div className="flex flex-1">
              <Month month={getMonth}/>
          </div>
      </div>
     */}

    </Router>


    
  );
}

export default App;
