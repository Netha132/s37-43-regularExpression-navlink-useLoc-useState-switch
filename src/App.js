
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Services from './components/Services';
import Support from './components/Support';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/support' element={<Support/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
