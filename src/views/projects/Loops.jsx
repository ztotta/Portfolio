import React, {Component} from 'react';

import station from '../../../public/loops/station.png';
import createStation from '../../../public/loops/create-station.png';
import loopCode from '../../../public/loops/loop-code.png';

import FlexContainer from '../../components/FlexContainer.jsx';
import BottomNav from '../../components/BottomNav.jsx';
import ProjectImg from '../../components/projects/ProjectImg.jsx';
import HorizontalLine from '../../components/HorizontalLine.jsx';
import InvisiblePadding from '../../components/InvisiblePadding.jsx';
import ProjectHeadline from '../../components/projects/ProjectHeadline.jsx';
import ProjectSubHeadline from '../../components/projects/ProjectSubHeadline.jsx';
import ProjectSubSubHeadline from '../../components/projects/ProjectSubSubHeadline.jsx';
import ProjectText from '../../components/projects/ProjectText.jsx';

class Loops extends Component {
  render() {
    return (
			<FlexContainer>
				<ProjectHeadline headline='loopsWithFriends' />

				<ProjectSubHeadline subHeadline='Angular | MongoDB | Node | Express' />
				
				<ProjectSubSubHeadline subSubHeadline='WebSockets | JWTs | HTML5/CSS3 | Web Audio DAW' />
				
				<HorizontalLine />
				
				<ProjectImg source={station} alt='station' />
				
				<HorizontalLine />
				
				<ProjectText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet pariatur in doloribus id blanditiis magni inventore? Eum quia quae itaque quod ullam! Aspernatur excepturi veritatis cum, harum ipsa perferendis?' />
				
				<HorizontalLine />
				
				<ProjectImg source={createStation} alt='create-station' />
				
				<HorizontalLine />
				
				<ProjectText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet pariatur in doloribus id blanditiis magni inventore? Eum quia quae itaque quod ullam! Aspernatur excepturi veritatis cum, harum ipsa perferendis?' />
				
				<HorizontalLine />
				
				<ProjectImg source={loopCode} alt='loop-code' />
				
				<HorizontalLine />
				
				<BottomNav />	
			</FlexContainer>
    );
  }
}

export default Loops;