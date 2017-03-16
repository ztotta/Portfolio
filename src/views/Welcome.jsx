import React, {Component} from 'react';
import $ from 'jquery';

import profile from '../../public/snow_river2.png';

import BottomNav from '../components/BottomNav.jsx';
import WelcomeHeadline from '../components/WelcomeHeadline.jsx';

const styles = {
	container: {
		opacity: '0',
		display: 'flex',
		width: '100%',
		height: '100%',
		padding: '10px',
		textAlign: 'center',
		flexDirection: 'column'
	},
	table: {
		alignSelf: 'center',
		height: '100%',
	},
	img : {
		borderRadius: '50%',
		height: '0px',
		width: '0px',
		margin: 'auto',
	},
	services: {
		letterSpacing: '0.8px',
		maxWidth: '600px',
		margin: '0px',
	},
	light: {
		opacity: '0.5',
	},
	intro: {
		maxWidth: '600px',
		margin: '0px',
	},
}

// TO DO: convert to table

//<div id='welcome-container' style={styles.container}>
//	<WelcomeHeadline headline='_zachTotta' />
//	<img id='profile-img' style={styles.img} src={profile} alt="profile-pic"/>
//	<p style={styles.services} id='services' style={styles.services}>web development <span style={styles.light}>|</span> apps <span style={styles.light}>|</span> prototyping</p>
//	<p style={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
//</div>

class Welcome extends Component {
	componentDidMount() {
		$("#welcome-container").animate({ opacity: 1 }, 1500);                 // fade-in welcome screen
		
		// Determine height of table:
		$('#welcome-table').css({height: (window.innerHeight - 58) + 'px'});   // bottom nav size + margins = 58px
		
		// Profile Image Animations:
		if (window.innerWidth > 499) {
			$("#profile-img").animate({width: '300px', height: '300px' }, 1000); // grow profile image animation
		} else {
			$("#profile-img").animate({width: '200px', height: '200px' }, 1000); // grow profile image animation
		}
		$('#profile-img').css({"animation":"spin 1s"});                        // spin profile image animation
	}
	
  render() {
    return (
			<div id='welcome-container' style={styles.container}>
				<table id='welcome-table' style={styles.table}>
					<tbody>
						<tr>
							<WelcomeHeadline headline='_zachTotta' />
						</tr>
						<tr>
							<td>
								<p style={styles.services} id='services' style={styles.services}>sites <span style={styles.light}>|</span> apps <span style={styles.light}>|</span> prototyping</p>
							</td>
						</tr>
						<tr>
							<td>
								<img id='profile-img' style={styles.img} src={profile} alt="profile-pic"/>
							</td>
						</tr>
						<tr>
							<td>
								<p style={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio iusto accusantium earum veniam, cupiditate harum. Molestiae perspiciatis eveniet nam, necessitatibus officiis error assumenda provident totam magni voluptatibus pariatur nemo.</p>
							</td>
						</tr>
					</tbody>
				</table>
				<BottomNav />
			</div>
    );
  }
}

export default Welcome;