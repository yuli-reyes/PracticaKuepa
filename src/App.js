import React from "react";
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboardp/Dashboardp';
import Egresados from './pages/egresados/Egresados';
import Hvegresados from './pages/hvegresados/Hvegresados';
import FormEgre from './pages/formEgre/FormEgre';
import Seguimiento from './pages/seguimiento/Seguimiento';
import HVseguimiento from './pages/hvSeguimiento/HVseguimiento';
import FormularioSeguimiento from './pages/formSegui/FormSegui';

import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router basename={process.env.PUBLIC_URL}>
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
            <Route exact path="/hvegresados/:id">
              <Hvegresados />
            </Route>
            <Route exact path="/formegresados">
              <FormEgre />
            </Route>

            <Route exact path="/actualizacionformegresados/:id">
              <FormEgre />
            </Route>
            
            <Route exact path="/seguimiento">
              <Seguimiento /> 
            </Route>

            <Route exact path="/hvseguimiento/:id">
              <HVseguimiento /> 
            </Route>

             <Route exact path="/formseguimiento">
              <FormularioSeguimiento /> 
            </Route>
          </Switch> 
                    
          <Footer />

      </Router>
    </div>
  );
}
export default App;
