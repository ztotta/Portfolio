import React, {Component} from 'react';
import $ from 'jquery';

const styles = {
	exploreContainer: {
		opacity: '0',
	},
}

class FlexContainerCol extends Component {
	componentDidMount() {
		$(".explore-container").animate({ opacity: 1 }, 1500);
	}
	
  render() {
    return (
			<div style={styles.exploreContainer} className='flex-container welcome explore-container'>
				{this.props.children}	
			</div>
    );
  }
}

export default FlexContainerCol;