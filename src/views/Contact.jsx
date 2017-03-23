import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import snowRiver from '../../public/snow_river2.png';

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
	consult: {
		margin: '50px 0px',
    border: 'none',
    border: '1px solid black',
    padding: '10px',
    fontSize: 'large',
    cursor: 'pointer',
		background: 'white',
		width: '200px',
		borderRadius: '10px 10px 0 0',
	},
	img: {
		borderRadius: '50%',
		margin: '0px auto',
		opacity: '0',
		position: 'fixed',
		top: '10px',
		right: '10px',
		height: '0px',
		width: '0px',
	},
}

class Contact extends Component {
	componentDidMount() {
		$("#contact-wrapper").animate({ opacity: 1 }, 1500);
		$('#contact-container').css({"animation":"rise 1s"});
		
		if (window.innerWidth > 499) {        // assign height depending on MediaQuery:
			$(".moon").animate({ height: '100px', width: '100px', opacity: 1 }, 1000);
		} else {
			$(".moon").animate({ height: '50px', width: '50px', opacity: 1 }, 1000);
		}
	}
	
  render() {
    return (
			<div id='contact-wrapper' style={styles.wrapper}>
				<div id='contact-container' style={styles.container}>
					<h2>Why yes, I'm available.</h2>
					<a href="mailto:ztotta@gmail.com?Subject=Development%20Consultation">
						<button className='buttonz' style={styles.consult}>
								say hey
						</button>
					</a>
					<h4>zach totta</h4>
					<h4>ztotta@gmail.com</h4>
					<h4>+1 (913) 558-0761</h4>
				</div>
				<div style={styles.navbar}>
					<Link to='/' className='nav'>home</Link>
					<Link to='skills' className='nav'>services</Link>
					<Link to='projects' className='nav'>work</Link>
					<Link to='about' className='nav'>about</Link>
				</div>
				<img className='moon' style={styles.img} src={snowRiver} />
			</div>
    );
  }
}

export default Contact;