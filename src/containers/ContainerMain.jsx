import React, { Component } from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { Link } from 'react-router';

import ContainerApp from './ContainerApp';

//const styles = {
//	sidebarItem: {
//		color: 'pink',
//	}
//}

class ContainerMain extends Component {
	
	render() {
	
		let items = [
			<Link to='/'><SidebarItem className='sidebarItem'>home</SidebarItem></Link>,
			<Link to='/skills'><SidebarItem className='sidebarItem'>services</SidebarItem></Link>,
			<Link to='/projects'><SidebarItem className='sidebarItem'>work</SidebarItem></Link>,
//			<Link to='/testimonials'><SidebarItem className='sidebarItem'>testimonials</SidebarItem></Link>,
//			<Link to='/about'><SidebarItem className='sidebarItem'>about</SidebarItem></Link>,
			<Link to='/contact'><SidebarItem className='sidebarItem'>contact</SidebarItem></Link>,
		];
		
    return (
			<div>
				{/*<Sidebar content={items} 
						background={'#e0f7fa'} 
						breakPoint={2000}
						toggleIconColor={'black'}
						width={200}
				>
  			</Sidebar> */}
					<ContainerApp>
						{this.props.children}
					</ContainerApp>
			</div>
    );
  }
}

export default ContainerMain;