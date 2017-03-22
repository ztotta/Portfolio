import React, {Component} from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';

import EightBitGif from '../../../public/8_bit/8bit.gif';
import EightBitCode from '../../../public/8_bit/8_bit_code.png';

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
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 'auto',
		marginTop: '20px',
		marginBottom: '20px',
	},
}

class EightBit extends Component {
	componentDidUpdate() { 
		console.log('updated component')
//		ReactDOM.findDOMNode(this).scrollToTop(); 
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
				<FlexContainerCol>
					<ExploreHeadline headline='_8_Bit_Beatdown' />

					<ProjectSubHeadline subHeadline='JavaScript | CSS | HTML' />

					<HorizontalLine />
					
					<ProjectText text='A browser game employing JavaScript, jQuery, HTML5 + Canvas, CSS, Web Audio API, Wad.JS, and Logic Pro X for audio production & sound FX.' />
					
					<HorizontalLine />
					
					<ProjectText text="8_Bit_Beatdown is an electronic drum-off between the user and an old computer that thinks it has rhythm. The computer lays down an 'objectively calculated' 'beat to end all beats' that it challenges the user to recreate with their 'limited human processing power', wagering its hardcopy of The Oregon Trail as bait.
							When the user succeeds, the computer hands over its hardcopy of The Oregon Trail in a moment of defeat so palpably painful that our entire understanding of AI sentience and emotion comes into question.
							Do you have what it takes to put this outdated machine back in the storage basement for the good of humanity?
							Someone's gotta do it..." />
				
					<HorizontalLine />
					
					<img style={styles.img} src={EightBitGif} alt='pic' />

					<HorizontalLine />

					<ProjectText text="The biggest challenge here was getting the loops to trigger only the user-selected notes and for them to actually play in tempo. This was
							achieved with for loops and setTimeouts that incremented by 1/16th note's time on each iteration." />	

					<HorizontalLine />

					<ProjectImg source={EightBitCode} alt='create-loops' />

					<HorizontalLine />

					<div style={styles.nav}>
						<a href="https://ztotta.github.io/8bitbeatdown/" target='_blank' className='nav'>live site</a>
						<a href="https://github.com/ztotta/8bitbeatdown" target='_blank' className='nav'>repository</a>
					</div>
					
					<BottomNavExplore prev='tone-quiz' next='gif-ing' />	
				</FlexContainerCol>
			</div>
    );
  }
}

export default EightBit;