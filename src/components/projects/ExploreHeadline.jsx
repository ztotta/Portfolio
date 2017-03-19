import React, {Component} from 'react';

const styles = {
	table: {
    margin: 'auto',
	},
	headline: {
		fontSize: 'calc(2em + 1.5vw)',
		fontWeight: '300',
		opacity: '1',
	}
}

class ProjectHeadline extends Component {	
  render() {
    return (
			<table style={styles.table}>
				<tbody>	
					<tr>
						<td style={styles.headline} className='project-headline'>{this.props.headline}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectHeadline;