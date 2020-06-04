import React from 'react';
import MapComponent from './MapComponent';

class Location extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			locationData: []
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
		const locationData = data ;
		this.setState({
			locationData: data
		});
	}

	render() {
		return (
			<React.Fragment>
				<MapComponent 
								location={ this.state.locationData }
								center={{ lat: 0.0, lng: 0.0 }} 
								zoom={1}/>
			</React.Fragment>
		)
	}
}

export default Location;