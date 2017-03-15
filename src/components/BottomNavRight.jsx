import React, {Component} from 'react';

const styles = {
	table: {
		position: 'fixed',
		top: '10px',
		right: '20px',
//		width: '100px',
	},
	headline: {
		fontSize: 'calc(12px + 1vw)',	
	}
}

class BottomNavRight extends Component {
  render() {
    return (
			<table style={styles.table}>
				<tbody>	
					<tr>
						<td style={styles.headline}>home </td>
					</tr>
					<tr>
						<td style={styles.headline}>projects </td>
					</tr>
					<tr>
						<td style={styles.headline}>references </td>
					</tr>
					<tr>
						<td style={styles.headline}>about</td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default BottomNavRight;