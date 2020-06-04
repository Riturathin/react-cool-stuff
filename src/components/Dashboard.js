import React from 'react';
import { ListGroup, Col, Badge } from 'react-bootstrap';
import ScreenLoader from '../HOC/ScreenLoader';
import Users from './Users';

class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		const self = this;

		fetch('https://randomuser.me/api/?results=50')
			.then( response => response.json())
			.then( data => {
				self.getUserData(data.results)
			})		
	}

	getUserData(data) {
		const users = data ;
		this.setState({
			users: users
		});
	}


	render() {
		return (
			<Col sm={12} md={{ span:6, offset: 3}}>
				<h1>
			    Users <Badge variant="secondary"><small>React Bootstrap</small></Badge>
			  </h1>
				<ListGroup>
					<Users user={ this.state.users } />
				</ListGroup>
			</Col>
		)
	}
}

export default Dashboard;
