import React, {Component} from 'react';

const styles = {
	horLine: {
	height: '1px',
	width: '100%',
	maxWidth: '900px',
	margin: '20px auto',
	background: 'black',
	opacity: '0.5',
}
}

class HorizontalLine extends Component {
  render() {
    return (
			<div style={styles.horLine}></div>
    );
  }
}

export default HorizontalLine;