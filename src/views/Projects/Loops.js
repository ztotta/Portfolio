import React, {Component} from 'react';
import station from '../../../public/loops/station.png'
import { Link } from 'react-router';

class Loops extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				<h1 className='headline center'>zachTotta</h1>
				<img className='project-img center' src={station} alt='loop-station'/>
				<p className='p center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
				<div className='navbar welcome center'>
					<Link className='nav'>home</Link>
					<Link className='nav'>projects</Link>
					<Link className='nav'>skills</Link>
					<Link className='nav'>about</Link>
				</div>	
			</div>
    );
  }
}

export default Loops;