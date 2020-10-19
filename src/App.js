import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather/Weather.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Sliders from './components/Sliders/Sliders.js'

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
             <Route path="/" exact component={Weather}/>
             <Route path="/slides" component={Sliders}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
