import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import CalendarHeader from './components/CalendarHeader';
import Side from './components/side';
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div className='flex flex-columns'>
        <Side />
        <div className="flex flex-columns">
          <CalendarHeader />
          <div className=' px-20 flex flex-1'>
            <Dashboard/>
          </div>
        </div>
     </div>
    </Router>
  )
}

export default App;
