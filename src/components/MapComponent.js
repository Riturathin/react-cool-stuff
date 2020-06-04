import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/map-component.css';

const Marker = ({ ...props }) =>
	(
		<div className='image-wrap'>
			<img src={ props.userimg } 
								className='google-map-user-image' 
								/> 
			<span className='text-name'>{ props.name }</span>
		</div>
	)

// ( <img src={ img_src } className='google-map-user-image' /> )

class MapComponent extends React.Component { 
  render() {
    return (
      <div style={{ height: '40vw', width: '100%' }}>
        <GoogleMapReact
        	bootstrapURLKeys={{ key: `AIzaSyAORaXUdJgJLcY70FRAGXbyE8Ff2871nww` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        {
        	this.props.location.map( item => {
        		return <Marker
        				key={ item.name.first }
		            lat={parseFloat(item.location.coordinates.latitude)}
		            lng={parseFloat(item.location.coordinates.longitude)}
		            userimg={item.picture.thumbnail}
		            name={ item.name.last, item.name.first }
		          />
        	})
        }
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapComponent;