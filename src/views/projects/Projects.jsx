import React, {Component} from 'react';

import station from '../../../public/loops/station.png';
import EightBit from '../../../public/8_bit/8_bit.png';
import toneQuiz from '../../../public/tone-quiz.png';
import gifHome from '../../../public/gif/gif_3.png';

import FlexContainerGrid from '../../components/FlexContainerGrid.jsx';
//import InvisiblePadding from '../../components/InvisiblePadding.jsx';
import ProjectCard from '../../components/projects/ProjectCard.jsx';
import ProjectHeadline from '../../components/projects/ProjectHeadline.jsx';

const styles = {
	leftMargin: {
		border: '1px solid pink',
		width: '280px',
		float: 'left',
	},
	position: {
		left: '300px',
	}
}

class Projects extends Component {
  render() {
    return (
			<FlexContainerGrid>
				<ProjectHeadline headline='_projects' />
				
				<ProjectCard left='300px' imgSrc={station} title='_loopsWithFriends' techUsed='Angular | MongoDB | Node | Express' />
				<ProjectCard left='600px' imgSrc={toneQuiz} title='_toneQuiz' techUsed='React | React-Motion | Node' />
				<ProjectCard left='900px' imgSrc={EightBit} title='8_Bit_Beatdown' techUsed='JavaScript | CSS | HTML' />
				<ProjectCard left='1200px' imgSrc={gifHome} title='_theGif ThatKeepsOnGif-ing' techUsed='Node | MongoDB | Express' />
			</FlexContainerGrid>
    );
  }
}

export default Projects;