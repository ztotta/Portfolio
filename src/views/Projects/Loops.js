import React, {Component} from 'react';
import station from '../../../public/loops/station.png'
import createStation from '../../../public/loops/create-station.png'
import { Link } from 'react-router';

class Loops extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				<h1 className='headline project center'>loopsWithFriends</h1>
				<div className='hor-line-thin center'></div>
				<h1 className='sub-headline center'>Angular | MongoDB | Node | Express</h1>
				<div className='hor-line-thin center'></div>
				<h1 className='sub-sub-headline center'>WebSockets | JWTs | HTML5/CSS3 | Web Audio DAW</h1>
				<div className='hor-line-thick center'></div>
				<img className='project-img center' src={station} alt='loop-station'/>
				<div className='hor-line-thick center'></div>
				<p className='project-p center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
				<div className='hor-line center'></div>
				<img className='project-img center' src={createStation} alt='create-station'/>
				<div className='hor-line-thick center'></div>
				<p className='project-p center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
				<div className='hor-line center'></div>
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