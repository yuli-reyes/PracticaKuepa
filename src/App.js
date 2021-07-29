import React from "react";
import ReactDOM from 'react-dom';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboardp/Dashboardp';
import Egresados from './pages/egresados/Egresados';

import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Switch>

            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/egresados">
              <Egresados />
            </Route>

          </Switch>
          <Footer />

      </Router>
    </div>
  );
}
export default App;
