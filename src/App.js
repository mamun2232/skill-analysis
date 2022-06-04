import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import WebDevelopment from './pages/Home/WebDevelopment';
import Header from './pages/Home/Header';
import AppDevelopment from './pages/Home/AppDevelopment';

function App() {
  return (
    <div className="">
       <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/webDevelopment' element={<WebDevelopment></WebDevelopment>}></Route>
       <Route path='/appDevelopment' element={<AppDevelopment></AppDevelopment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
