import React, {Component} from 'react';
//import MediaQuery from 'react-responsive';

const styles = {
	table: {
		padding: '0',
		width: '100%',
		minWidth: '300px',
		maxWidth: '500px',
		maxHeight: '600px',
		marginRight: '100px',
//	  border: '1px solid pink',
//		position: 'absolute',

		boxShadow: '2px 1px 5px 1px black', /* h-shadow v-shadow blur spread color */
	},
	tbody: {
		
	},
	td: {
		verticalAlign: 'center',
  	textAlign: 'center',
	},
	img: {
		width: '100%',
	},
	card: {
		width: '500px',
	},
}


class ProjectCard extends Component {
  render() {
    return (
			<div style={styles.card}>
				<img style={styles.img} src={this.props.imgSrc} alt=""/>
				<h2>{this.props.title}</h2>
				<h4>{this.props.techUsed}</h4>
			</div>
    );
  }
}

export default ProjectCard;