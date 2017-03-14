import React, {Component} from 'react';

const styles = {
	flexContainer: {
//		position: 'absolute',
//		left: '0px',
//		bottom: '0px',
//		top: '0px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '4800px',
		height: '100%',
		padding: '10px',
		textAlign: 'center',
		overflowX: 'scroll',
		border: '1px solid red',
//		paddingLeft: '90%',
	}
}

class FlexContainerGrid extends Component {
  render() {
    return (
			<div style={styles.flexContainer}>
				{this.props.children}	
			</div>
    );
  }
}

export default FlexContainerGrid;