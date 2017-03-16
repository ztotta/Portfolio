import React, {Component} from 'react';
import { Link } from 'react-router';
var MediaQuery = require('react-responsive');
import $ from 'jquery';

const styles = {
	explore: {
		fontWeight: '300',
		fontSize: 'calc(0.5em + 0.75vw)',
		marginBottom: '5px',
		opacity: '0',
	},
	exploreLine: {
		opacity: '0.5',
		height: '1px', 
		background: 'black', 
		marginLeft: '0px',
		marginBottom: '5px',
		width: '0',
	},
	projectCard: {
		opacity: '0',
	},
	img: {
		width: '100%',
		zIndex: '10',
	},	
	h2: {
		fontSize: 'calc(1em + 1vw)',
		fontWeight: '300',
		marginTop: '0px',
		marginBottom: '0px',
	},
	h4: {
		fontSize: 'calc(0.5em + 0.75vw)',
		fontWeight: '300',
		marginTop: '5px',
	},
	cardLg: {
		width: '500px',
		marginRight: '100px',
	},
	cardXXSm: {
		width: '300px',
		marginRight: '50px',
	},
}


class ProjectCard extends Component {
	componentDidMount() {
		$(".project-card").animate({ opacity: 1 }, 1500); // fade-in project card opacity
//		$(".project-img-hover").animate({ width: '100%' }, 1000); // fade-in project card img width
	}

	explore(id) {
		$(`#${id}-text`).animate({ opacity: 1 }, 1000);
		// fade-in explore line
		$(`#${id}-line`).animate({ width: 100 }, 1000); 
	}
	
	exploreNot(id) {
		$(`#${id}-text`).animate({ opacity: 0 }, 400);       // fade-in explore text
		$(`#${id}-line`).animate({ width: 0 }, 400);         // fade-out explore line
	}
	
  render() {
		let exploreId = this.props.toUrl
		
    return (
			<div className='project-card' style={styles.projectCard}>
				<MediaQuery minWidth={500}>
					<h4 id={`${exploreId}-text`} style={styles.explore}>explore project</h4>
					<div id={`${exploreId}-line`} style={styles.exploreLine}></div>
					<div style={styles.cardLg}>
						<Link to={this.props.toUrl}
							    onMouseEnter={this.explore.bind(this, exploreId)}
							    onMouseLeave={this.exploreNot.bind(this, exploreId)}>
							<img className='project-img-hover' style={styles.img} src={this.props.imgSrc} alt=""/>
						</Link>
						<h2 style={styles.h2}>{this.props.title}</h2>
						<h4 style={styles.h4}>{this.props.techUsed}</h4>
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={500}>
					<h4 id={`${exploreId}-text`} style={styles.explore}>explore project</h4>
					<div id={`${exploreId}-line`} style={styles.exploreLine}></div>
					<div style={styles.cardXXSm}>
						<Link to={this.props.toUrl}
							    onMouseEnter={this.explore.bind(this, exploreId)}
							    onMouseLeave={this.exploreNot.bind(this, exploreId)}>
							<img className='project-img-hover' style={styles.img} src={this.props.imgSrc} alt=""/>
						</Link>
						<h2 style={styles.h2}>{this.props.title}</h2>
						<h4 style={styles.h4}>{this.props.techUsed}</h4>
					</div>
				</MediaQuery>
			</div>
    );
  }
}

export default ProjectCard;