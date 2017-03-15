import React, {Component} from 'react';
import { Link } from 'react-router';

class BottomNav extends Component {
  render() {
    return (
			<div className='navbar welcome center'>
				<Link to='/' className='nav'>home</Link>
				<Link className='nav'>skills</Link>
				<Link to='projects' className='nav'>projects</Link>
				<Link className='nav'>about</Link>
			</div>	
    );
  }
}

export default BottomNav;