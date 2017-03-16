import React, {Component} from 'react';

const styles = {
	table: {
		textAlign: 'center',
		margin: 'auto',
	},
	subHeadline: {
		margin: 'auto',
		marginTop: '10px',
		fontSize: 'calc(1em + 1vw)',
		color: 'grey',
		fontWeight: '300',
	},
}

class ProjectSubHeadline extends Component {
  render() {
    return (
			<table style={styles.table}>
				<tbody>
					<tr>
						<td style={styles.subHeadline}>{this.props.subHeadline}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectSubHeadline;