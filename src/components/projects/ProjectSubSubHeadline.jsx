import React, {Component} from 'react';

const styles = {
	table: {
		textAlign: 'center',
		margin: 'auto',
	},
	subSubHeadline: {
		margin: 'auto',
		marginTop: '10px',
		fontSize: 'calc(.5em + 1vw)',
		color: 'grey',
		fontWeight: '300',
	},
}

class ProjectSubSubHeadline extends Component {
  render() {
    return (
			<table style={styles.table}>
				<tbody>
					<tr>
						<td style={styles.subSubHeadline}>{this.props.subSubHeadline}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectSubSubHeadline;