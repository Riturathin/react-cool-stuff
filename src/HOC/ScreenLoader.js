import React from 'react';
import '../styles/loading-view.css';

const ScreenLoader = ( WrappedComponent ) => {
	return class extends React.Component {
		render() {
			return this.props.user.length === 0 ? <div className='loader text-center'></div>: <WrappedComponent { ...this.props } />
		}
	}
}

export default ScreenLoader;