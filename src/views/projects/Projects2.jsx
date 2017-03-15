import React, {Component} from 'react';
//var MediaQuery = require('react-responsive');
import $ from 'jquery';
import HorizontalScroll from 'react-scroll-horizontal';

import station from '../../../public/loops/station.png';
import toneQuiz from '../../../public/tone-quiz.png';
import EightBit from '../../../public/8_bit/8_bit.png';
import gifHome from '../../../public/gif/gif_3.png';

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
	},
	arrow: {
  	opacity: '0.5',
		marginLeft: '-5px',
		marginRight: '20px',
		fontWeight: '100',
	},
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
	{imgSrc: gifHome, title: '_theGifthatKeepOnGifing', techUsed: 'MongoDB | Node | Express'},
]

class Projects2 extends Component {
	componentDidMount() {
		// Measuring spacerLine width by screen size:
		const windowWidth = window.innerWidth;
		$('#spacer-line').css('width', windowWidth * 0.8);
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
			</HorizontalScroll>
    );
  }
}

export default Projects2;