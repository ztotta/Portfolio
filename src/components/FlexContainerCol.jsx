import React, {Component} from 'react';

class FlexContainerCol extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				{this.props.children}	
			</div>
    );
  }
}

export default FlexContainerCol;