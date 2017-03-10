import React, {Component} from 'react';

class ProjectImg extends Component {
  render() {
    return (
			<img className='project-img center' src={this.props.source} alt={this.props.alt} />
    );
  }
}

export default ProjectImg;