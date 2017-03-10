import React, {Component} from 'react';

class FlexContainer extends Component {
  render() {
    return (
			<div className='flex-container welcome'>
				{this.props.children}	
			</div>
    );
  }
}

export default FlexContainer;