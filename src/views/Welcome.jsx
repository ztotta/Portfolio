import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
//import particlesJS from 'particles.js';
import Particles from 'react-particles-js';

import profilePic from '../../public/gh_profile.jpeg';

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
	img: {
		borderRadius: '50%',
		height: '0px',
		width: '0px',
		margin: '0px auto',
	},
	link: {
		textDecoration: 'none',
	},
	services: {
		letterSpacing: '0.8px',
		maxWidth: '600px',
		margin: '0px auto',
	},
	light: {
		opacity: '0.5',
	},
	intro: {
//		maxWidth: '600px',
		margin: '0px',
	},
	consult: {
		margin: '0px',
    border: 'none',
    border: '1px solid black',
    padding: '10px',
    fontSize: 'large',
    cursor: 'pointer',
		background: 'white',
		borderRadius: '10px 10px 0 0',
	},
	linkContainer: {
		// textAlign: 'center'
		display: 'flex',
		justifyContent: 'center'
	}
}

// Profile Img
// <img id='profile-img' style={styles.img} src={profile} alt="profile-pic"/>

class Welcome extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	
	constructor(props) {
		super(props);
		this.state = {numParticles: 50}
	}
	
	componentDidMount() {
		// Fade-in welcome screen
		$("#welcome-container").animate({ opacity: 1 }, 1500);                  
		
		///////////////////////////////////////
		// Profile Image Circle Animations: ///
		///////////////////////////////////////
		if (window.innerWidth > 499) {        // assign height depending on MediaQuery:
			$('.profile-img').css({height: '300px', width: '300px', margin: 'auto'});
		} else {
			$('.profile-img').css({height: '200px', width: '200px', margin: 'auto'});
		}
		///////////////////////////////////////
		
		// Determine height of table:
		$('#welcome-table').css({height: (window.innerHeight - 58) + 'px'});    // bottom nav size + margins = 58px	
		
		if (window.innerWidth > 499) this.setState({numParticles: 10});
	}

	toContact() {		
		this.mailTo.click();
		
		this.context.router.push(`/contact`);							
	}
	
  render() {
    return (

				<div id='welcome-container' style={styles.container}>
					
					
					<table id='welcome-table' style={styles.table}>
						<tbody>
							<tr>
								<WelcomeHeadline headline='zach totta' />
							</tr>
							<tr>
								<td>
									<img className='profile-img' style={styles.img} src={profilePic} />
								</td>
							</tr>
							<tr>
								<td>
									<p style={styles.intro}>software engineer</p>
									<p style={styles.intro}>- - - - - - - - - - -</p>
									<p style={styles.intro}>ripple labs</p>
								</td>
							</tr>
							<tr style={styles.linkContainer}>
								<td>
									<Link className='mailTo' href="https://github.com/ztotta">
										<button className='buttonz' style={styles.consult}>
											github
										</button>
									</Link>
								</td>
								<td>
									<Link className='mailTo' href="https://linkedin.com/in/ztotta">
										<button className='buttonz' style={styles.consult}>
											linked in 
										</button>
									</Link>
								</td>
								<td>
									<Link ref={mailTo => this.mailTo = mailTo} className='mailTo' href="mailto:ztotta@gmail.com">
										<button className='buttonz' style={styles.consult}>
											email
										</button>
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

    );
  }
}

export default Welcome;