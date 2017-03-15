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
			<Link to='/projects'><SidebarItem className='sidebarItem'>skills</SidebarItem></Link>,
			<Link to='/projects'><SidebarItem className='sidebarItem'>projects</SidebarItem></Link>,
			<Link to='/projects'><SidebarItem className='sidebarItem'>testimonials</SidebarItem></Link>,
			<Link to='/projects'><SidebarItem className='sidebarItem'>about</SidebarItem></Link>,
//			<Link to='/sdfs'><SidebarItem>SKILLS</SidebarItem></Link>
//			<Link to='/takisdsng-quiz'><SidebarItem>ABOUT ME</SidebarItem></Link>
//			<Link to='/taking-sdsggsquiz'><SidebarItem>EXPERIENCE</SidebarItem></Link>
//			<Link to='/taking-quigsgsgz'><SidebarItem>REFERENCES</SidebarItem></Link>
//			<Link to='/taking-qsgsdgdguiz'><SidebarItem>EDUCATION</SidebarItem></Link>
//			<Link to='/taking-quigfdz'><SidebarItem>GITHUB</SidebarItem></Link>
//			<Link to='/taking-dfgquiz'><SidebarItem>LINKED IN</SidebarItem></Link>
//			<Link to='/taking-qusddfeiz'><SidebarItem>MUSIC</SidebarItem></Link>
		];
		
    return (
			<div>
				<Sidebar content={items} 
						background={'#e0f7fa'} 
						breakPoint={2000}
						toggleIconColor={'black'}
						width={200}
				>
					<ContainerApp>
						{this.props.children}
					</ContainerApp>
  			</Sidebar>
			</div>
    );
  }
}

export default ContainerMain;