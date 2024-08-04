import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './component/Master';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
        <Route path='/' element={<Home/>}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
