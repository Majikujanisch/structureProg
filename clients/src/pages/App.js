
import './App.css';
import Navbar from '../components/navigationbar'
import React  from 'react';
import Login from '../pages/login'
import Regis from '../pages/regristration'
import Error from './ErrorPage'
import Auth from './checkLogin'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
            <Route exact path='/' element={<Login></Login>}/>
            <Route path='/regristration' element={<Regis></Regis>}/>
            <Route path='/secret' element={<Auth></Auth>}/>
            <Route path='/*' element={<Error></Error>}/>
        </Routes>
      </Router>
      
      
      <p>Hello World2</p>
      
    </div>
  );
}

export default App;
