import React from "react";
import ReactDOM from 'react-dom';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboardp/Dashboardp';
import Egresados from './pages/egresados/Egresados';
import Hvegresados from './pages/hvegresados/Hvegresados';
import FormEgre from './pages/formEgre/FormEgre';
import FormDatoAca from './pages/formDatoAca/FormDatoAcademico';
import Seguimiento from './pages/seguimiento/Seguimiento';
import HVseguimiento from './pages/hvSeguimiento/HVseguimiento';
import FormSegui from './pages/formSegui/FormSegui';
import FormAcaSegui from './pages/formAcaSegui/FormAcaSegui';
import FormDatoLaboral from './pages/formDatoLaboral/FormDatoLaboral';

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
            <Route exact path="/hvegresados">
              <Hvegresados />
            </Route>
            <Route exact path="/formegresados">
              <FormEgre />
            </Route>
            <Route exact path="/formulariodatosacademicos">
              <FormDatoAca /> 
            </Route>

            <Route exact path="/seguimiento">
              <Seguimiento /> 
            </Route>

            <Route exact path="/hvseguimiento">
              <HVseguimiento /> 
            </Route>

             <Route exact path="/formseguimiento">
              <FormSegui /> 
            </Route>

            <Route exact path="/formacaseguimiento">
              <FormAcaSegui /> 
            </Route>

            <Route exact path="/formdatoslaborales">
              <FormDatoLaboral /> 
            </Route>


          </Switch>
                          
          <Footer />

      </Router>
    </div>
  );
}
export default App;
