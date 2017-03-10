import React, {Component} from 'react';

class ProjectText extends Component {
  render() {
    return (
			<table className='project-text'>
				<tr>
					<td className='project-text'>{this.props.text}</td>
				</tr>
			</table>
    );
  }
}

export default ProjectText;