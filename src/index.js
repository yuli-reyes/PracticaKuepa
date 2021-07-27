import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Login from './pages/login/Login';*/
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';


ReactDOM.render(
  <React.StrictMode>
  <div>
      <Header />
      <Dashboard />
      <Footer />
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
