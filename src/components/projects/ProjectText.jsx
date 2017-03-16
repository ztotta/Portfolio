import React, {Component} from 'react';

const styles = {
	table: {
		textAlign: 'left',
		width: '100%',
		maxWidth: '900px',
		margin: 'auto',
	},
	text: {
		
	},
}

class ProjectText extends Component {
  render() {
    return (
			<table style={styles.table}>
				<tbody>
					<tr>
						<td style={styles.text}>{this.props.text}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default ProjectText;