import React, {Component} from 'react';

class ProjectSubSubHeadline extends Component {
  render() {
    return (
			<table className="project-subSubHeadline">
				<tbody>
					<tr>
						<td className='headline'>{this.props.subSubHeadline}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectSubSubHeadline;