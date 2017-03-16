import React, {Component} from 'react';
import $ from 'jquery';

const styles = {
	table: {
		position: 'fixed',
		bottom: '10px',
		left: '20px',
		width: '100px',
	},
	headline: {
		fontSize: 'calc(2em + 1.5vw)',
		fontWeight: '300',
		opacity: '0',
	}
}

class ProjectHeadline extends Component {
	componentDidMount() {
		$(".project-headline").animate({ opacity: 1 }, 1500);
	}
	
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