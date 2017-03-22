import React, {Component} from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
//import ReactDOM from 'react-dom';

import gif from '../../../public/gif/gif.gif';
import gifCode from '../../../public/gif/promises.png';

import FlexContainerCol from '../../components/FlexContainerCol.jsx';
//import BottomNavExplore from '../../components/BottomNavExplore.jsx';
import ProjectImg from '../../components/projects/ProjectImg.jsx';
import HorizontalLine from '../../components/HorizontalLine.jsx';
import ExploreHeadline from '../../components/projects/ExploreHeadline.jsx';
import ProjectSubHeadline from '../../components/projects/ProjectSubHeadline.jsx';
import ProjectText from '../../components/projects/ProjectText.jsx';

const styles = {
	wrapper: {
		margin: 'auto',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	spacerLine: {
		opacity: '0.5',
		height: '0px', 
		background: 'black', 
		margin: 'auto',
		width: '1px',
	},
	arrowTip: {
  	opacity: '0.6',
		margin: 'auto',
		fontWeight: '100',
		marginTop: '-5px',
		textAlign: 'center',
	},
	img: {
		width: '100%',
		minWidth: '300px',
		maxWidth: '600px',
		margin: 'auto',
	},
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 'auto',
		marginTop: '20px',
		marginBottom: '20px',
	},
}

class Gif extends Component {
	componentDidUpdate() { 
		console.log('updated component')
//		ReactDOM.findDOMNode(this).scrollIntoView(); 
	}
	
	componentDidMount() {
		// Grow-right animation by windowHeight:
		$(".spacer-line-vertical").animate({ height: window.innerHeight * 0.7 }, 1000);
	}
	
  render() {
    return (
			<div style={styles.wrapper}>
				<div className='spacer-line-vertical' style={styles.spacerLine}></div>
				<div style={styles.arrowTip}>v</div>
				<FlexContainerCol>
					<ExploreHeadline headline='_theGif _ThatKeepsOn _Gifing' />

					<ProjectSubHeadline subHeadline='JavaScript | CSS | HTML' />

					<HorizontalLine />

					<ProjectText text='A team-built full-stack app using MongoDB, Node.js + Express, JavaScript, jQuery / AJAX, Google OAuth 2.0, Materialize, HTML, CSS and the Giphy API. Deployed via Heroku.' />
					
					<HorizontalLine />
								
					<ProjectText text='After signing up through Google OAuth 2.0, users answer survey questions about their lives. Their results are then returned in a vertical timeline with their responses represented by corresponding .gifs pulled from the Giphy API.
											 Users can then share these results with a unique URL and/or retake the survey.
											 They can also search for individual .gifs from the Giphy API, without logging in, through our homepage InstaGif feature.' />
											 
					<HorizontalLine />
					
					<img style={styles.img} src={gif} alt='pic' />

					<HorizontalLine />
					
					<ProjectText text="The biggest challenge for me was sending data to and from our Mongo database and the Giphy API using a mix of AJAX and HTTP requests, and then 
											 populating that data onto the Results page timeline in the correct order. I resolved this by writing a Promise.all 
											 that gathers the asynchronous responses into one array so that they can then be sorted by their index property into the
											 correct order again." />
					
					<HorizontalLine />

					<ProjectImg source={gifCode} alt='create-loops' />

					<HorizontalLine />
					
					<div style={styles.nav}>
						<a href="http://pacific-river-56706.herokuapp.com/" target='_blank' className='nav'>live site</a>
						<a href="https://github.com/ztotta/the-gif-that-keeps-on-gifing" target='_blank' className='nav'>repository</a>
					</div>

					<div style={styles.nav}>
						<Link to='8-bit-beatdown' className='nav'>previous</Link>
						<Link to='/' className='nav'>home</Link>
						<Link to='skills' className='nav'>skills</Link>
						<Link to='contact' className='nav'>contact</Link>
					</div>
				</FlexContainerCol>
			</div>
    );
  }
}

export default Gif;