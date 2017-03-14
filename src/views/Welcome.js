import React, {Component} from 'react';
import profile from '../../public/snow_river2.png';

import BottomNav from '../components/BottomNav.jsx';
import ProjectHeadline from '../components/projects/ProjectHeadline.jsx';

class Welcome extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				<ProjectHeadline headline='zachTotta' />
				<img className='profile center' src={profile} alt="profile-pic"/>
				<p className='p welcome center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
				<BottomNav />
			</div>
    );
  }
}

export default Welcome;