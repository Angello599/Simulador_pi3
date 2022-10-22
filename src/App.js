import './App.css';
import horario from './horario.png'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Swithc, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Sidebar />
      <img src={horario} alt="Italian Trulli"></img>
    </Router>
  );
}

export default App;
