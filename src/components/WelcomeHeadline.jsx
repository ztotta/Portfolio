import React, {Component} from 'react';

const styles = {
	table: {
//		position: 'fixed',
//		bottom: '10px',
//		left: '20px',
//		width: '100px',
		alignSelf: 'center',
	},
	headline: {
		fontSize: 'calc(2em + 1.5vw)',	
		fontWeight: '300',
	}
}

class WelcomeHeadline extends Component {
  render() {
    return (
			<table style={styles.table}>
				<tbody>	
					<tr>
						<td style={styles.headline}>{this.props.headline}</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default WelcomeHeadline;