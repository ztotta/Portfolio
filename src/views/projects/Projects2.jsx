import React, {Component} from 'react';

import station from '../../../public/loops/station.png';
//import EightBit from '../../../public/8_bit/8_bit.png';
//import toneQuiz from '../../../public/tone-quiz.png';
//import gifHome from '../../../public/gif/gif_3.png';
//
//import FlexContainerGrid from '../../components/FlexContainerGrid.jsx';
////import InvisiblePadding from '../../components/InvisiblePadding.jsx';
import ProjectCard from '../../components/projects/ProjectCard.jsx';
import ProjectHeadline from '../../components/projects/ProjectHeadline.jsx';

const styles = {
	container: {
		height: '100%',
		display: 'flex',
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
	spacerLg: {
		width: '280px',
	}
}

class Projects2 extends Component {
  render() {
    return (
			<div style={styles.container}>
				<table style={styles.table}>
					<tr style={styles.tr}>
					
						<td>
							<div style={styles.spacerLg}></div>
						</td>
					
						<td>
							<ProjectCard imgSrc={station} title='_loopsWithFriends' techUsed='Anguar | MongoDB | Node | Express' />
						</td>

						<td>
						<div style={styles.post}>
							<h2>Post Title Example Two</h2>
							<p>By <a href="http://css-tricks.com"><strong>CSS</strong>-Tricks</a></p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.</p>
						</div>
						</td>

						<td>
						<div style={styles.post}>
							<h2>Post Title Example Three</h2>
							<p>By <a href="http://css-tricks.com"><strong>CSS</strong>-Tricks</a></p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.</p>

							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.</p>
						</div>
						</td>

						<td>
						<div style={styles.post}>
							<h2>Post Title Example Four</h2>
							<p>By <a href="http://css-tricks.com"><strong>CSS</strong>-Tricks</a></p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.</p>
						</div>
						</td>

						<td>
						<div style={styles.post}>
							<h2>Post Title Example Five</h2>
							<p>By <a href="http://css-tricks.com"><strong>CSS</strong>-Tricks</a></p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.</p>
						</div>
						</td>

						<td>
						<div style={styles.post}>
							<h2>Post Title Example Six</h2>
							<p>By <a href="http://css-tricks.com"><strong>CSS</strong>-Tricks</a></p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse aliquet arcu a ipsum. Nunc arcu est, pulvinar vitae, consectetuer ac, pellentesque interdum, augue. Fusce iaculis nulla et sapien. Aliquam erat volutpat. Etiam iaculis turpis nec libero. Nam adipiscing ullamcorper quam. Pellentesque erat. Sed hendrerit. Duis id nisl. Cras arcu mauris, mollis vel, convallis Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.Cras arcu mauris, mollis vel, convallis non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.non, elementum a, tortor. Donec ac est eget elit consequat sollicitudin. In id odio quis tortor volutpat mollis. Nulla iaculis lobortis est. Pellentesque in elit vitae nulla tempus euismod. Nam non erat in lacus rutrum malesuada. Donec commodo purus sed quam posuere eleifend. Nam accumsan.</p>
						</div>
						</td>
						
					</tr>
				</table>
				
				<ProjectHeadline headline='_projects' />
			</div>
    );
  }
}

export default Projects2;