import React, {Component} from 'react';
import profile from '../../public/profile.jpg'
import { Link } from 'react-router';

class Welcome extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				<h1 className='headline center'>zachTotta</h1>
				<img className='profile center' src={profile} alt="profile-pic"/>
				<p className='p welcome center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
				<div className='navbar welcome center'>
					<Link className='nav'>home</Link>
					<Link to="loops-with-friends" className='nav'>projects</Link>
					<Link className='nav'>skills</Link>
					<Link className='nav'>about</Link>
				</div>	
			</div>
    );
  }
}

export default Welcome;