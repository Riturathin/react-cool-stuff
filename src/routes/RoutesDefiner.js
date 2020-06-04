import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Location from '../components/Location';
import { Row } from 'react-bootstrap';

const RoutesDefiner = () => (
	<Row>
		<Route path='/' exact component={ Dashboard }/>
	  <Route path='/location-finder' component={ Location }/>
	</Row>
)

export default RoutesDefiner;