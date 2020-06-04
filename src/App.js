import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import RoutesDefiner from './routes/RoutesDefiner';
import Location from './components/Location';
import Header from './commons/Header';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  	<React.Fragment>
	  	<Router>
		  	<Header />
		    <Container>
		    	 <RoutesDefiner />
		    </Container>
		  </Router>
		</React.Fragment>
  );
}

export default App;
