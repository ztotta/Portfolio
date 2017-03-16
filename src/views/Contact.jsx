import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const styles = {
	wrapper: {
		opacity: '0',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
	},
	container: {
		opacity: '1',
		textAlign: 'center',
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

class Contact extends Component {
	componentDidMount() {
		$("#contact-wrapper").animate({ opacity: 1 }, 1500);
		$('#contact-container').css({"animation":"rise 1s"});
	}
	
  render() {
    return (
			<div id='contact-wrapper' style={styles.wrapper}>
				<div id='contact-container' style={styles.container}>
					<h1>say hey</h1>
					<h4>zach totta</h4>
					<h4>ztotta@gmail.com</h4>
					<h4>+1 (913) 558-0761</h4>
				</div>
				<div style={styles.navbar}>
					<Link to='/' style={styles.navItem}>home</Link>
					<Link to='skills' style={styles.navItem}>skills</Link>
					<Link to='projects' style={styles.navItem}>projects</Link>
					<Link to='about' style={styles.navItem}>about</Link>
				</div>
			</div>
    );
  }
}

export default Contact;