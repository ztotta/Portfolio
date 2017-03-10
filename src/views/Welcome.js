import React, {Component} from 'react';
import profile from '../../public/profile.jpg'

import BottomNav from '../components/BottomNav.jsx';

class Welcome extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				<h1 className='headline center'>zachTotta</h1>
				<img className='profile center' src={profile} alt="profile-pic"/>
				<p className='p welcome center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
				<BottomNav />
			</div>
    );
  }
}

export default Welcome;