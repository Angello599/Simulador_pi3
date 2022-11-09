import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import CalendarHeader from './components/CalendarHeader';
import Weekview from './components/weekview';
import Side from './components/side';


function App() {
  return (
    <Router>
      <div className='flex flex-columns'>
        <Side />
        <div className="flex flex-columns">
          <CalendarHeader />
          <div className='py-10 px-20 flex flex-1'>
            <Weekview/>
          </div>
          
        </div>
        
     </div>
    </Router>
  )
}

export default App;
