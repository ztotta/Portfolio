import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const styles = {
	wrapper: {
		opacity: '1',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
	},
	container: {
		opacity: '1',
		textAlign: 'left',
		width: '90%',
		maxWidth: '900px',
	},
	header: {
		
	},
	subHeader: {
		
	},
	emptyTD: {
		height: '60px',
	},
	navbar: {
		position: 'absolute',
		bottom: '20px',
	},
	navItem: {
		marginLeft: '10px',
		marginRight: '10px',
	}
}

class Skills extends Component {
	componentDidMount() {
//		$("#skills-wrapper").animate({ opacity: 1 }, 1500);
		$('#skill-1').css({"animation":"slide-fade 1s"});
		$('.skill-2').css({"animation":"slide-fade 1.5s"});
		$('.skill-3').css({"animation":"slide-fade 2s"});
		
		$('#skill-nav').css({"animation":"rise 2s"});
	}
	
  render() {
    return (
			<div id='skills-wrapper' style={styles.wrapper}>
				<table id='skills-container' style={styles.container}>
					<tbody>
						<tr id='skill-1'>
							<td>
								<h1 style={styles.header}>skills</h1>
							</td>
						</tr>
						<tr className='skill-2'>
							<td>
								<h3 style={styles.subHeader}>sites</h3>	
							</td>
							<td>
								=> 
							</td>
							<td>
								I build clean, modern websites that present your brand with professionalism and class.
							</td>
						</tr>	
						<tr className='skill-2'>
							<td style={styles.emptyTD}>
							</td>
							<td>
								=> 
							</td>
							<td>
								I use JavaScript + CSS + HTML & the most current frameworks available to deliver the experiences that today's users have come to expect.
							</td>
						</tr>
						<tr className='skill-2'>
							<td style={styles.emptyTD}>
							</td>
							<td>
								=> 
							</td>
							<td>
								I use WordPress as a Content Management System so that you can easily update and tweak your site's content without relying on me or any other developer to help you out in the future.
							</td>
						</tr>
						<tr className='skill-3'>
							<td>
								<h3 style={styles.subHeader}>apps</h3>
							</td>
							<td>
								=> 
							</td>
							<td>
								I build custom full-stack apps for Web, iOS, and Android to fit your business' needs.
							</td>
						</tr>
						<tr className='skill-3'>
							<td style={styles.emptyTD}>
							</td>
							<td>
								=> 
							</td>
							<td>
								I can build & deploy fully-realized apps, or whip up prototypes to bring to investors. 
							</td>
						</tr>
					</tbody>
				</table>
				<div id='skill-nav' style={styles.navbar}>
					<Link to='/' style={styles.navItem}>home</Link>
					<Link to='projects' style={styles.navItem}>projects</Link>
					<Link to='about' style={styles.navItem}>about</Link>
					<Link to='contact' style={styles.navItem}>contact</Link>
				</div>
			</div>
    );
  }
}

export default Skills;