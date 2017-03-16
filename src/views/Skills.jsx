import React, {Component} from 'react';
import $ from 'jquery';

const styles = {
	exploreContainer: {
		opacity: '0',
	},
}

class Skills extends Component {
	componentDidMount() {
//		$(".explore-container").animate({ opacity: 1 }, 1500);
	}
	
  render() {
    return (
			<h1>skills</h1>
    );
  }
}

export default Skills;