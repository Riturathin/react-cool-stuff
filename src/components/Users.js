import React from 'react';
import ScreenLoader from '../HOC/ScreenLoader';
import { ListGroup , Col, Row } from 'react-bootstrap';

class Users extends React.Component {
	render() {
		return (
			<ListGroup>
				{ this.props.user.map( (item, index) => 
						<ListGroup.Item key={ index }>
							<Row>
								<Col md={2} >
									<img src={ item.picture.thumbnail } style={{ 'borderRadius' : '50%' }}/>
								</Col>
								<Col md={8} >
									{ item.name.title } <b>{ item.name.last }</b>,
									{ item.name.first }
									<p><b>Country: </b>{ item.location.country }</p>
									<p><b>@email: </b>{ item.email }</p>
								</Col>
							</Row>
						</ListGroup.Item>
				)}
		</ListGroup>
	)}
}

export default ScreenLoader(Users);