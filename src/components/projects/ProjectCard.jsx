import React, {Component} from 'react';
import { Link } from 'react-router';
var MediaQuery = require('react-responsive');

const styles = {
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
	constructor(props) {
    super(props);
    this.state = {explore: false};
  }
	

	explore() {
		this.setState({explore: true})
		console.log('exploringnnn')
	}
	
	
  render() {
		let exploring = null;
		
		if (this.state.explore || true) {
			exploring = <h4 style={styles.h4}>explore</h4>
		} else {
			exploring = null
		}
		
    return (
			<div>
				<MediaQuery minWidth={500}>
					<div style={styles.cardLg}>
						{exploring}
						<Link to='/'>
								<img className='project-img-hover' style={styles.img} src={this.props.imgSrc} alt=""/>
						</Link>
						<h2 style={styles.h2}>{this.props.title}</h2>
						<h4 style={styles.h4}>{this.props.techUsed}</h4>
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={500}>
					<div style={styles.cardXXSm}>
						<img style={styles.img} src={this.props.imgSrc} alt=""/>
						<h2 style={styles.h2}>{this.props.title}</h2>
						<h4 style={styles.h4}>{this.props.techUsed}</h4>
					</div>
				</MediaQuery>
			</div>
    );
  }
}

export default ProjectCard;