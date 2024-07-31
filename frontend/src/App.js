import logo from './logo.svg';
import './style/App.css';
import HomeScreen from './Components/HomeScreen.js';
import CalendarView from './Components/CalendarView.js';
import {Routes, Route} from 'react-router-dom';
import { GlobalStoreContextProvider } from './GlobalStore.js';

function App() {
  return (
        <div className="App">
          <Routes>
            <Route path = "/" element = {<HomeScreen/>}></Route>
            <Route path = "/calendar-view" element = {<CalendarView/>}></Route>
          </Routes>
        </div>
  );
}

export default App;
