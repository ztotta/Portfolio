import React, {Component} from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';

import station from '../../../public/loops/station.png';
import createStation from '../../../public/loops/create-station.png';
import loopCode from '../../../public/loops/loop-code.png';

import FlexContainerCol from '../../components/FlexContainerCol.jsx';
import BottomNavExplore from '../../components/BottomNavExplore.jsx';
import ProjectImg from '../../components/projects/ProjectImg.jsx';
import HorizontalLine from '../../components/HorizontalLine.jsx';
import ExploreHeadline from '../../components/projects/ExploreHeadline.jsx';
import ProjectSubHeadline from '../../components/projects/ProjectSubHeadline.jsx';
import ProjectSubSubHeadline from '../../components/projects/ProjectSubSubHeadline.jsx';
import ProjectText from '../../components/projects/ProjectText.jsx';

const styles = {
	wrapper: {
		margin: 'auto',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	spacerLine: {
		opacity: '0.5',
		height: '0px', 
		background: 'black', 
		margin: 'auto',
		width: '1px',
	},
	arrowTip: {
  	opacity: '0.6',
		margin: 'auto',
		fontWeight: '100',
		marginTop: '-5px',
		textAlign: 'center',
	},
}

class Loops extends Component {
	componentDidUpdate() { 
		console.log('updated component')
//		ReactDOM.findDOMNode(this).scrollTop = 0
	}
	
	componentWillUnmount() {
		console.log('componentWillUnmount() loop')
//		this._div.scrollTop = 0
	}
	
	componentDidMount() {
		// Measuring spacerLine width by screen size:
		const windowHeight = window.innerHeight;
		// Grow-right animation:
		$(".spacer-line-vertical").animate({ height: windowHeight * 0.7 }, 1000);
	}
	
  render() {
    return (
			<div style={styles.wrapper}>
				<div className='spacer-line-vertical' style={styles.spacerLine}></div>
				<div style={styles.arrowTip}>v</div>
				<FlexContainerCol ref={(ref) => this._div = ref} >
					<ExploreHeadline headline='_loopsWithFriends' />

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

					<BottomNavExplore prev='gif-ing' next='tone-quiz' />	
				</FlexContainerCol>
			</div>
    );
  }
}

export default Loops;