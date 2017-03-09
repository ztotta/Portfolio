import React, { Component } from 'react';

class ContainerApp extends Component {
	
	render() {
    return (
			<div className='App-container'>
				{this.props.children}
			</div>
    );
  }
}

export default ContainerApp;