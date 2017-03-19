import React, {Component} from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';

import gif from '../../../public/gif/gif.gif';
import gifCode from '../../../public/gif/promises.png';

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

class Gif extends Component {
	componentDidUpdate() { 
		console.log('updated component')
//		ReactDOM.findDOMNode(this).scrollIntoView(); 
	}
	
	componentDidMount() {
		// Grow-right animation by windowHeight:
		$(".spacer-line-vertical").animate({ height: window.innerHeight * 0.7 }, 1000);
	}
	
  render() {
    return (
			<div style={styles.wrapper}>
				<div className='spacer-line-vertical' style={styles.spacerLine}></div>
				<div style={styles.arrowTip}>v</div>
				<FlexContainerCol>
					<ExploreHeadline headline='_theGif _ThatKeepsOn _Gifing' />

					<ProjectSubHeadline subHeadline='JavaScript | CSS | HTML' />

					<HorizontalLine />

					<img style={styles.img} src={gif} alt='pic' />

					<HorizontalLine />

					<ProjectText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet pariatur in doloribus id blanditiis magni inventore? Eum quia quae itaque quod ullam! Aspernatur excepturi veritatis cum, harum ipsa perferendis?' />

					<HorizontalLine />

					<ProjectImg source={gifCode} alt='create-loops' />

					<HorizontalLine />

					<ProjectText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet pariatur in doloribus id blanditiis magni inventore? Eum quia quae itaque quod ullam! Aspernatur excepturi veritatis cum, harum ipsa perferendis?' />

					<HorizontalLine />

					<BottomNavExplore prev='8-bit-beatdown' next='loops-with-friends' />	
				</FlexContainerCol>
			</div>
    );
  }
}

export default Gif;