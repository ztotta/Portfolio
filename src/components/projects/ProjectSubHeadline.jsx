import React, {Component} from 'react';

class ProjectSubHeadline extends Component {
  render() {
    return (
			<table className="project-subHeadline">
				<tbody>
					<tr>
						<td className='headline'>{this.props.subHeadline}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectSubHeadline;