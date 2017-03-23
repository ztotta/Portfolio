import React, {Component} from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

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
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '20px auto 0 auto',
	},
	consult: {
		margin: '0px',
    border: 'none',
    border: '1px solid black',
    padding: '10px',
    fontSize: 'large',
    cursor: 'pointer',
		background: 'white',
	},
	linkBtn: {
		margin: '0px 10px',
    border: 'none',
    border: '1px solid black',
    padding: '10px',
    fontSize: 'medium',
    cursor: 'pointer',
		background: 'white',
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

					<div style={styles.nav}>
						<a href="http://l00ps-with-fri3nds.herokuapp.com/#/" target='_blank' className=''><button className='buttonz' style={styles.linkBtn}>live site</button></a>
						<a href="https://github.com/ztotta/loops-with-friends" target='_blank' className=''><button className='buttonz' style={styles.linkBtn}>repository</button></a>
					</div>
					
					<HorizontalLine />

					<ProjectText text='This is a single-page, real-time, MEAN-stack app built with MongoDB, AngularJS / UI-Router, Node.js + Express, JavaScript, 
						 					 Socket.io, JSON Webtoken Authentication, Materialize, HTML, & CSS. The sounds are synthesized with basic waveforms via the 
											 Web Audio API, made simpler by the Web Audio DAW library.' />	
					
					<HorizontalLine />
					
					<ProjectText text='Users build loop-based beats with 6 instruments, 384 launch-pads, and as many friends as they care to invite.
											 Each pad on each instrument panel represents one 1/16th note, the grey pads are quarter notes, there are 4 measures, and 
											 the metronome cycles through in red to help the user follow the beat.
											 The "instrument" buttons at the top of the page toggle Mute On/Off.
											 The percussion instrument pads simply toggle On/Off, while the melodic instrument pads cycle through the Javanese slendro 
											 scale.' />	
					
					<HorizontalLine />					 											 						 
											 											 
					<ProjectImg source={station} alt='station' />
					
					<HorizontalLine />

					<ProjectText text='A challenge here was building the loop-stations as reusable components, where each station has 6 instruments, and each instrument has 64 
						  				 launchpads, so that they can all be manipulated, monitored, and updated predictably. This allows for simple expansion if more 
											 instruments were to be added in the future. See code snippet below:' />
					<HorizontalLine />
					
					<ProjectImg source={createStation} alt='create-station' />

					<HorizontalLine />

					<ProjectText text="Another challenge was triggering the loop-stations to play back in real-time and adjust for mid-loop 
						  			   changes to the steps. This was resolved with a Promise.all for each of the 64 steps, where for each step it cycles through 
						  			   the 6 instruments and calls a setTimeout on each. 
						  			   Once they all resolve, it cycles through again and calls 'playStep'   			 for each instrument, triggering the correct note for the 
						  			   step at the current iteration (wherever 'i' is in the count), granted the instrument is unmuted. Meanwhile, the next step's 
						  			   Promise.all is underway, granted the loop is still toggled 'On'. See code snippet below:" />
				
					<HorizontalLine />

					<ProjectImg source={loopCode} alt='loop-code' />

					<HorizontalLine />
					
					<Link to='contact'>
						<button className='buttonz' style={styles.consult}>
							free quote and consultation
						</button>
					</Link>
				
					<BottomNavExplore prev='gif-ing' next='tone-quiz' />	
				</FlexContainerCol>
			</div>
    );
  }
}

export default Loops;