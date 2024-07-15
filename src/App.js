import logo from './logo.svg';
import './style/App.css';
import HomeScreen from './HomeScreen.js';
import Calendar from './Calendar.js'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path = "/" element = {<HomeScreen/>}></Route>
          <Route path = "/calendar-view" element = {<Calendar/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
