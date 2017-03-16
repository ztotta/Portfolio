import React, {Component} from 'react';
import { Link } from 'react-router';

const styles = {
	navbar: {
		alignSelf: 'center',
		position: 'absolute',
		bottom: '10px',
		margin: '0 auto',
	},
}

class BottomNav extends Component {
  render() {
    return (
			<div style={styles.navbar}>
				<Link to='/' className='nav'>home</Link>
				<Link to='skills' className='nav'>skills</Link>
				<Link to='projects' className='nav'>projects</Link>
				<Link to='about' className='nav'>about</Link>
				<Link to='contact' className='nav'>contact</Link>
			</div>	
    );
  }
}

export default BottomNav;