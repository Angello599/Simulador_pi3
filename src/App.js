import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import CalendarHeader from './components/CalendarHeader';
import Side from './components/side';
import Dashboard from "./Dashboard";
import Sidebar from "./components/Activities"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-datetime/css/react-datetime.css";

function App() {
  return (
    <Router>
      <div className='flex flex-columns'>
        <Sidebar />
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
