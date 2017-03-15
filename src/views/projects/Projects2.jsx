import React, {Component} from 'react';
//var MediaQuery = require('react-responsive');
import $ from 'jquery';

import station from '../../../public/loops/station.png';
import toneQuiz from '../../../public/tone-quiz.png';
import EightBit from '../../../public/8_bit/8_bit.png';
import gifHome from '../../../public/gif/gif_3.png';

//import FlexContainerGrid from '../../components/FlexContainerGrid.jsx';
////import InvisiblePadding from '../../components/InvisiblePadding.jsx';
import ProjectCard from '../../components/projects/ProjectCard.jsx';
import ProjectHeadline from '../../components/projects/ProjectHeadline.jsx';

const styles = {
	container: {
		height: '100%',
		display: 'flex',
	},
	spacerLine: {
		height: '1px', 
		background: 'black', 
  	opacity: '0.25',
		marginLeft: '20px',
	},
	arrow: {
  	opacity: '0.25',
		marginLeft: '-5px',
		marginRight: '20px',
		fontWeight: '100',
	},
//// Line MediaQueries:
//	lineSm: { // 1000-600px
//		height: '1px',
//		width: '400px',
//		background: 'black',
//		opacity: '0.25',
//	},
//	lineXSm: { // 600-300px
//		height: '1px',
//		width: '150px',
//		background: 'black',
//		opacity: '0.25',
//	},
//	lineXXSm: { // 300-0px
//		height: '1px',
//		width: '100px',
//		background: 'black',
//		opacity: '0.25',
//	},
	table: {
		alignSelf: 'center',
		cellspacing: '30px'
	},
	post: {
		width: '500px',
	},
	tr: {
		height: '100%',
		verticalAlign: 'middle',
	},
}

const projects = [
	{imgSrc: station, title: '_loopsWithFriends', techUsed: 'Anguar | MongoDB | Node | Express'},
	{imgSrc: toneQuiz, title: '_toneQuiz', techUsed: 'React | React-Motion | Node'},
	{imgSrc: EightBit, title: '_8_Bit_Beatdown', techUsed: 'JavaScript | CSS | HTML'},
	{imgSrc: gifHome, title: '_theGif thatKeepOnGif-ing', techUsed: 'MongoDB | Node | Express'},
]

class Projects2 extends Component {
	componentDidMount() {
		// Measuring spacerLine width by screen size:
		const windowWidth = window.innerWidth;
		$('#spacer-line').css('width', windowWidth * 0.8)
	}
	
  render() {
    return (
			<div style={styles.container}>
				<table style={styles.table}>
				<tbody>
					<tr style={styles.tr}>
					
						<td>
						{/*
							<MediaQuery minWidth={1000}>
								<div style={styles.lineLg}></div>
							</MediaQuery>
							<MediaQuery maxWidth={1000} minWidth={600}>
								<div style={styles.lineSm}></div>
							</MediaQuery>
							<MediaQuery maxWidth={600} minWidth={299}>
								<div style={styles.lineXSm}></div>
							</MediaQuery>
							<MediaQuery maxWidth={299}>
								<div style={styles.lineXSm}></div>
							</MediaQuery>
						*/}
								<div id='spacer-line' style={styles.spacerLine}>
								</div>
						</td>
						
						<td>
							<div style={styles.arrow}>></div>
						</td>
						
						{projects.map(project => {
							return(
								<td key={project.title}>
									<ProjectCard imgSrc={project.imgSrc} title={project.title} techUsed={project.techUsed} />
								</td>
							)
						})}
						
					</tr>
				</tbody>
				</table>
				
				<ProjectHeadline headline='_projects' />
			</div>
    );
  }
}

export default Projects2;