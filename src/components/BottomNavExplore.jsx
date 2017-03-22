import React, {Component} from 'react';
import { Link } from 'react-router';

const styles = {
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 'auto',
		marginTop: '20px',
		marginBottom: '20px',
	},
}

class BottomNavExplore extends Component {
  render() {
    return (
			<div style={styles.nav}>
				<Link to={this.props.prev} className='nav'>previous</Link>
				<Link to='/' className='nav'>home</Link>
				<Link to='contact' className='nav'>contact</Link>
				<Link to={this.props.next} className='nav'>next</Link>
			</div>	
    );
  }
}

export default BottomNavExplore;