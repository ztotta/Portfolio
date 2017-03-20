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
		flexDirection: 'column',
	},
	container: {
		opacity: '1',
		textAlign: 'left',
		width: '90%',
		maxWidth: '900px',
	},
	header: {
		fontSize: '2em',
		alignSelf: 'left',
		marginBottom: '30px',
	},
	subHeader: {
		fontSize: '1.2em',
		fontWeight: 'bold',
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
	},
	arrow: {
		color: '#e0f7fa',
		width: '60px',
		textAlign: 'center',
	},
	tr: {
		verticalAlign: 'top',
	},
}

class Skills extends Component {
	componentDidMount() {
//		$("#skills-wrapper").animate({ opacity: 1 }, 1500);
		$('#skills-header').css({"animation":"fall 1s"});
		
		$('.skill-1').css({"animation":"slide-fade 1s"});
		$('.skill-2').css({"animation":"slide-fade 1.1s"});
		$('.skill-2-5').css({"animation":"slide-fade 1.2s"});
		$('.skill-2-6').css({"animation":"slide-fade 1.3s"});
		$('.skill-3').css({"animation":"slide-fade 1.4s"});
		$('.skill-3-5').css({"animation":"slide-fade 1.5s"});
		$('.skill-3-6').css({"animation":"slide-fade 1.6s"});
		$('.skill-4').css({"animation":"slide-fade 1.7s"});
		
		$('#skill-nav').css({"animation":"rise 1.7s"});
	}
	
  render() {
    return (
			<div id='skills-wrapper' style={styles.wrapper}>
				<div id='skills-header' style={styles.header}>skills</div>
				<table id='skills-container' style={styles.container}>
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td style={styles.subHeader}>
								sites
							</td>
						</tr>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I build clean, modern websites that present your brand with professionalism and class.
							</td>
						</tr>	
						<tr className='skill-2-5' style={styles.tr}>
							<td>
								I use JavaScript + CSS + HTML & the most current frameworks available to deliver the experiences 
								that today's users have come to expect.
							</td>
						</tr>
						<tr className='skill-2-6' style={styles.tr}>
							<td>
								I use WordPress as a Content Management System so that you can easily update and tweak 
								your site's content without relying on me or any other developer to help you out in the future.
							</td>
						</tr>
						<tr className='skill-3' style={styles.tr}>
							<td style={styles.subHeader}>
								apps
							</td>
						</tr>
						<tr className='skill-3' style={styles.tr}>
							<td>
								I build custom full-stack apps for Web, iOS, and Android to fit your business' needs.
							</td>
						</tr>
						<tr className='skill-3-5' style={styles.tr}>
							<td>
								I can build & deploy fully-realized apps, or whip up prototypes to bring to investors. 
							</td>
						</tr>
						<tr className='skill-3-6' style={styles.tr}>
							<td>
								I can also consult on your app: discussing ideas and feasability, working through roadblocks, 
								coding features, fixing bugs, etc.
							</td>
						</tr>
						<tr className='skill-4' style={styles.tr}>
							<td style={styles.subHeader}>
								communication
							</td>
						</tr>	
						<tr className='skill-4' style={styles.tr}>
							<td>
								I work for <em>you</em>, and communication is my highest priority. From the very start, 
								I work with you to make sure we are on the same page and we never waste each other's time
								on false starts or dead ends. 
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