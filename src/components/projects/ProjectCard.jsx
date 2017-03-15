import React, {Component} from 'react';
var MediaQuery = require('react-responsive');

const styles = {
	img: {
		width: '100%',
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
  render() {
    return (
			<div>
				<MediaQuery minWidth={500}>
					<div style={styles.cardLg}>
						<img style={styles.img} src={this.props.imgSrc} alt=""/>
						<h2>{this.props.title}</h2>
						<h4>{this.props.techUsed}</h4>
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={500}>
					<div style={styles.cardXXSm}>
						<img style={styles.img} src={this.props.imgSrc} alt=""/>
						<h2>{this.props.title}</h2>
						<h4>{this.props.techUsed}</h4>
					</div>
				</MediaQuery>
			</div>
    );
  }
}

export default ProjectCard;