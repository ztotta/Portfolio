import React, {Component} from 'react';
import { Link } from 'react-router';
//var MediaQuery = require('react-responsive');
import $ from 'jquery';
import HorizontalScroll from 'react-scroll-horizontal';

import station from '../../../public/loops/station.png';
//import toneQuiz from '../../../public/tone/tone-quiz.png';
import tone from '../../../public/tone/toneQuiz.gif';
//import EightBitPic from '../../../public/8_bit/8_bit.png';
import EightBitGif from '../../../public/8_bit/8bit.gif';
//import gifHome from '../../../public/gif/gif_3.png';
import gif from '../../../public/gif/gif.gif';

//import FlexContainerGrid from '../../components/FlexContainerGrid.jsx';
////import InvisiblePadding from '../../components/InvisiblePadding.jsx';
import ProjectCard from '../../components/projects/ProjectCard.jsx';
import ProjectHeadline from '../../components/projects/ProjectHeadline.jsx';
//import BottomNavRight from '../../components/BottomNavRight';

const styles = {
	container: {
		height: '100%',
		display: 'flex',
	},
	spacerLine: {
		opacity: '0.5',
		height: '1px', 
		background: 'black', 
		marginLeft: '20px',
		width: '0',
	},
	arrowTip: {
  	opacity: '0.6',
		marginLeft: '-5px',
		marginRight: '20px',
		fontWeight: '100',
	},
	table: {
		alignSelf: 'center',
		cellspacing: '30px',
	},
//	post: {
//		width: '500px',
//	},
	tr: {
		height: '100%',
		verticalAlign: 'middle',
	},
	navbar: {
		position: 'absolute',
		right: '100px',
		bottom: '10px',
	},
	link: {
		marginRight: '10px',
		marginLeft: '10px',
	},
}

const projects = [
	{imgSrc: station, title: '_loopsWithFriends', techUsed: 'Anguar | MongoDB | Node | Express', toUrl: 'loops-with-friends'},
	{imgSrc: tone, title: '_toneQuiz', techUsed: 'React | React-Motion | Node', toUrl: 'tone-quiz'},
	{imgSrc: EightBitGif, title: '_8_Bit_Beatdown', techUsed: 'JavaScript | CSS | HTML', toUrl: '8-bit-beatdown'},
	{imgSrc: gif, title: '_theGif _ThatKeepsOn _Gifing', techUsed: 'MongoDB | Node | Express', toUrl: 'gif-ing'},
]

class Projects extends Component {
	
	componentDidMount() {
		// Measuring spacerLine width by screen size:
		const windowWidth = window.innerWidth;
		// Grow-right animation:
		$("#spacer-line").animate({ width: windowWidth * 0.65 }, 1000);
		// Calculate gallery-navbar margin to match MediaQuery of ProjectCards (ProjectCard marginRight & Link marginRight):
		$("#gallery-navbar").css({ right: windowWidth > 499 ? '93px' : '43px'});
	}
	
  render() {
    return (
			<HorizontalScroll>
				<div id='wrapper' style={styles.container}>
					<table style={styles.table}>
					<tbody>
						<tr style={styles.tr}>

							<td> {/* Arrow line */}
									<div id='spacer-line' style={styles.spacerLine}></div>
							</td>

							<td> {/* Arrow tip */}
								<div style={styles.arrowTip}>></div>
							</td>

							{projects.map(project => {
								return(
									<td key={project.title}>
										<ProjectCard imgSrc={project.imgSrc} title={project.title} techUsed={project.techUsed} toUrl={project.toUrl} />
									</td>
								)
							})}
							
							
						</tr>
					</tbody>
					</table>

					<div id='gallery-navbar' style={styles.navbar}>
						<Link to='/' style={styles.link}>home</Link>
						<Link to='skills' style={styles.link}>skills</Link>
						<Link to='about' style={styles.link}>about</Link>
						<Link to='contact' style={styles.link}>contact</Link>
					</div>
					
					<ProjectHeadline headline='_projects' />
				</div>
			</HorizontalScroll>
    );
  }
}

export default Projects;