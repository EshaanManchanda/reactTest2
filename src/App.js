// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/home';
import Register from './page/Register';
import Error401 from './page/Error401';
import Error404 from './page/Error404';
import Error500 from './page/Error500';
import Charts from './page/charts';
import Password from './page/Password';
import LayoutSideNav from './page/LayoutSideNav';
import LayoutStatic from './page/LayoutStatic';
import Table from './page/Table';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/password' element={<Password />}></Route>
        <Route exact path='/dashboard' element={<Home />}></Route>
        <Route exact path='/error401' element={<Error401 />}></Route>
        <Route exact path='/error404' element={<Error404 />}></Route>
        <Route exact path='/error500' element={<Error500 />}></Route>
        <Route exact path='/error500' element={<Error500 />}></Route>
        <Route exact path='/charts' element={<Charts />}></Route>
        <Route exact path='/layoutsidenav' element={<LayoutSideNav />}></Route>
        <Route exact path='/layoutstatic' element={<LayoutStatic />}></Route>
        <Route exact path='/table' element={<Table />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
