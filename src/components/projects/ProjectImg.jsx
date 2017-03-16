import React, {Component} from 'react';

const styles = {
	img: {
		width: '100%',
		minWidth: '300px',
		maxWidth: '900px',
		margin: 'auto',
	},
}

class ProjectImg extends Component {
  render() {
    return (
			<img style={styles.img} src={this.props.source} alt={this.props.alt} />
    );
  }
}

export default ProjectImg;