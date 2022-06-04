import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import WebDevelopment from './pages/Home/WebDevelopment';
import Header from './pages/Home/Header';

function App() {
  return (
    <div className="">
       <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/webDevelopment' element={<WebDevelopment></WebDevelopment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
