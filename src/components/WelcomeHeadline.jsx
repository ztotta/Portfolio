import React, {Component} from 'react';

const styles = {
	headline: {
		fontSize: 'calc(2em + 1.5vw)',	
		fontWeight: '300',
	}
}

class WelcomeHeadline extends Component {
  render() {
    return (
			<td style={styles.headline}>{this.props.headline}</td>
    );
  }
}

export default WelcomeHeadline;