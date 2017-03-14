import React, {Component} from 'react';
import { Link } from 'react-router';

import RightArrow from '../../../public/right_arrow.png';

//import FlexContainerCol from '../FlexContainerCol.jsx';

class ProjectContinue extends Component {
  render() {
    return (
			<div>
					<Link to='/'>
						<img className='project-continue center' src={RightArrow} alt=""/>
					</Link>
			</div>
    );
  }
}

export default ProjectContinue;