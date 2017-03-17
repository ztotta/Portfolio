import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
//import particlesJS from 'particles.js';
import Particles from 'react-particles-js';

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
	particlesContainer: {
		height: '100%',
		width: '100%',
	},
	table: {
		alignSelf: 'center',
		height: '100%',
		position: 'absolute',
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

// Profile Img
// <img id='profile-img' style={styles.img} src={profile} alt="profile-pic"/>

class Welcome extends Component {
	componentDidMount() {
		// Fade-in welcome screen
		$("#welcome-container").animate({ opacity: 1 }, 1500);                  
		
		///////////////////////////////////////
		// Profile Image Circle Animations: ///
		///////////////////////////////////////
		const $kanvas = $('canvas').first()
		
		$kanvas.css({"animation":"spin 5s"}); // spin profile image animation
		
		if (window.innerWidth > 499) {        // assign height depending on MediaQuery:
			$kanvas.css({height: '300px', width: '300px', borderRadius: '50%', margin: 'auto'});
		} else {
			$kanvas.css({height: '200px', width: '200px', borderRadius: '50%', margin: 'auto'});
		}
		
//		$kanvas.hover(() => {
//			$(this).animate({ background: 'red' }, 1000);
//		})
		///////////////////////////////////////
		
		// Determine height of table:
		$('#welcome-table').css({height: (window.innerHeight - 58) + 'px'});    // bottom nav size + margins = 58px	
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
									<Link to='projects'>
										<Particles 
											params={{
												particles: {
													line_linked: {
														shadow: {
															enable: true,
															color: 'black',
															blur: 1
														}
													},
													move: {
														enable: true,
														speed: 5,
														direction: "none",
														random: false,
														straight: false,
														out_mode: "out",
														bounce: true,
														attract: {
															enable: false,
															rotateX: 600,
															rotateY: 1200
														}
													},
													interactivity: {
														detect_on: "welcome-container",
														events: {
															onhover: {
																enable: true,
																mode: "repulse"
															},
															onclick: {
																enable: false,
																mode: "push"
															},
															resize: true
														},
													}
												}}} 
										/>
									</Link>
								</td>
							</tr>
							<tr>
								<td>
									<p style={styles.intro}>Why hello! My name is Zach Totta and I’m a San Francisco-based freelancer. 
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p style={styles.intro}>I build custom, modern websites & apps with the most up-to-date techniques and technologies available.  
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p style={styles.intro}>
										Please, come in. Stay a while. 
									</p>
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