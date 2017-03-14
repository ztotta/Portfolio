import React, {Component} from 'react';

class ProjectText extends Component {
  render() {
    return (
			<table className='project-text'>
				<tbody>
					<tr>
						<td className='project-text'>{this.props.text}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectText;