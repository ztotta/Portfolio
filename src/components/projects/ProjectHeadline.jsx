import React, {Component} from 'react';

class ProjectHeadline extends Component {
  render() {
    return (
			<table className="project-headline">
				<tr>
					<td className='headline'>{this.props.headline}</td>
				</tr>
			</table>
    );
  }
}

export default ProjectHeadline;