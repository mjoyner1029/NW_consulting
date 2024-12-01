// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        <Switch>
          <Route exact path="/about-us" component={AboutUsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/services" component={ServicesPage} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
