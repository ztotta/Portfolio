import React, {Component} from 'react';

class ProjectSubHeadline extends Component {
  render() {
    return (
			<table className="project-subHeadline">
				<tr>
					<td className='headline'>{this.props.subHeadline}</td>
				</tr>
			</table>
    );
  }
}

export default ProjectSubHeadline;