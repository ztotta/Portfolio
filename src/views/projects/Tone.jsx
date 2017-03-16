import React, {Component} from 'react';
import $ from 'jquery';

import tone from '../../../public/tone/toneQuiz.gif';
import toneCode from '../../../public/tone/tone-quiz-code.png';

import FlexContainerCol from '../../components/FlexContainerCol.jsx';
import BottomNavExplore from '../../components/BottomNavExplore.jsx';
import ProjectImg from '../../components/projects/ProjectImg.jsx';
import HorizontalLine from '../../components/HorizontalLine.jsx';
import ExploreHeadline from '../../components/projects/ExploreHeadline.jsx';
import ProjectSubHeadline from '../../components/projects/ProjectSubHeadline.jsx';
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
	img: {
		width: '100%',
		minWidth: '300px',
		maxWidth: '600px',
		margin: 'auto',
	},
}

class Tone extends Component {
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
				<FlexContainerCol>
					<ExploreHeadline headline='_toneQuiz' />

					<ProjectSubHeadline subHeadline='React | React-Motion | Node' />

					<HorizontalLine />

					<img style={styles.img} src={tone} />

					<HorizontalLine />

					<ProjectText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet pariatur in doloribus id blanditiis magni inventore? Eum quia quae itaque quod ullam! Aspernatur excepturi veritatis cum, harum ipsa perferendis?' />

					<HorizontalLine />

					<ProjectImg source={toneCode} alt='create-station' />

					<HorizontalLine />

					<ProjectText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet pariatur in doloribus id blanditiis magni inventore? Eum quia quae itaque quod ullam! Aspernatur excepturi veritatis cum, harum ipsa perferendis?' />

					<HorizontalLine />

					<BottomNavExplore prev='loops-with-friends' next='8-bit-beatdown' />	
				</FlexContainerCol>
			</div>
    );
  }
}

export default Tone;