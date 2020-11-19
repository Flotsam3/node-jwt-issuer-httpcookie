import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Edit from './Edit';
import Delete from './Delete';

function App() {
  
  return (
    <Router>
        <>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
        <li>
        <Link to="/delete">Delete</Link>
        </li>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/delete" component={Delete}/>
        </>
    </Router>
  );
}

export default App;
