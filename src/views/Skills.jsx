import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const styles = {
	wrapper: {
		opacity: '1',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	container: {
		opacity: '1',
		textAlign: 'left',
		width: '90%',
		maxWidth: '900px',
		borderCollapse: 'collapse',
		marginTop: '20px',
	},
	header: {
		fontSize: '2em',
		marginBottom: '30px',
	},
	subHeaderBar: {
		fontSize: '1.2em',
		borderBottom: '1px solid black',
		width: '90%',
		maxWidth: '900px',
	},
	subHeader: {
		cursor: 'pointer',
		paddingLeft: '10px',
		paddingRight: '10px',
		borderRadius: '10px 10px 0 0',
		border: '1px solid black',
		marginLeft: '2px',
	},
	emptyTD: {
		height: '60px',
	},
	navbar: {
		position: 'absolute',
		bottom: '20px',
	},
	arrow: {
		color: '#e0f7fa',
		width: '60px',
		textAlign: 'center',
	},
	tr: {
		verticalAlign: 'top',
		border: '15px solid white',
	},
}

class Skills extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showContent: true,
			content: 
				<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I build clean, modern websites that present your brand with professionalism and class.
							</td>
						</tr>	
						<tr className='skill-2-5' style={styles.tr}>
							<td>
								I use JavaScript + CSS + HTML & the most current frameworks available to deliver the experiences 
								that today's users have come to expect.
							</td>
						</tr>	
						<tr className='skill-2-6' style={styles.tr}>
							<td>
								I use Drupal as a Content Management System so that you can easily update and tweak 
								your site's content without relying on me or any other developer to do it for you.
							</td>
						</tr>
				</tbody>,
			showSites: true,
			showApps: false,
			showCommunication: false,
		}
	}
	
	componentDidMount() {
		$('#skills-header').css({"animation":"fall 1s"});
		$('.skills-subHeader').css({"animation":"slide-fade 1.25s"});
		$('#skill-nav').css({"animation":"rise 1.5s"});
		this.animateContent();
	}
	
	animateContent() {
		$('.skill-2').css({"animation":"slide-fade 1.1s"});
			setTimeout(() => {$('.skill-2').css({"animation":""})}, 1200)
		$('.skill-2-5').css({"animation":"slide-fade 1.3s"});
			setTimeout(() => {$('.skill-2-5').css({"animation":""})}, 1400)
		$('.skill-2-6').css({"animation":"slide-fade 1.5s"});
			setTimeout(() => {$('.skill-2-6').css({"animation":""})}, 1600)
	}
	
	showContent(tab) {
		if (tab === 'sites') { 
			this.setState({
				content: 
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I build clean, modern websites that present your brand with professionalism and class.
							</td>
						</tr>	
						<tr className='skill-2-5' style={styles.tr}>
							<td>
								I use JavaScript + CSS + HTML & the most current frameworks available to deliver the experiences 
								that today's users have come to expect.
							</td>
						</tr>	
						<tr className='skill-2-6' style={styles.tr}>
							<td>
								I use Drupal as a Content Management System so that you can easily update and tweak 
								your site's content without relying on me or any other developer to help you out in the future.
							</td>
						</tr>
				</tbody>,
				showSites: true,
				showApps: false,
				showCommunication: false,
			}, () => {
				this.animateContent();
			})
		} else if (tab === 'apps') {
			this.setState({
				content: 
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I build custom full-stack apps for Web, iOS, and Android to fit your business' needs.
							</td>
						</tr>
						<tr className='skill-2-5' style={styles.tr}>
							<td>
								I can build & deploy fully-realized apps, or whip up prototypes to bring to investors. 
							</td>
						</tr>
						<tr className='skill-2-6' style={styles.tr}>
							<td>
								I can also consult on your app: discussing ideas and feasability, working through roadblocks, 
								coding features, fixing bugs, etc.
							</td>
						</tr>
					</tbody>,
				showSites: false,
				showApps: true,
				showCommunication: false,
			}, () => {
				this.animateContent();
			})
		} else {
			this.setState({
				content:
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I work for <em>you</em>, and communication is my highest priority. From the very start, 
								I work with you to make sure we are on the same page and we never waste each other's time
								on false starts or dead ends. 
							</td>
						</tr>	
					</tbody>,
				showSites: false,
				showApps: false,
				showCommunication: true,
			}, () => {
				this.animateContent();
			})
		}	
	}
	
  render() {
		let sitesClasses         = ['skills-subHeader'];
		let appsClasses          = ['skills-subHeader'];
		let communicationClasses = ['skills-subHeader'];
		
		if (this.state.showSites) { sitesClasses.push('tabOpen') };
		if (this.state.showApps) { appsClasses.push('tabOpen') };
		if (this.state.showCommunication) { communicationClasses.push('tabOpen') };
		
    return (
			<div id='skills-wrapper' style={styles.wrapper}>
				<div id='skills-header' style={styles.header}>skills</div>
				<div className='skills-subHeader' style={styles.subHeaderBar}>
					<span className={sitesClasses.join(' ')}
								style={styles.subHeader}
								onClick={this.showContent.bind(this, 'sites')}>
						sites 
					</span>
					<span className={appsClasses.join(' ')} 
								style={styles.subHeader}
								onClick={this.showContent.bind(this, 'apps')}> 
							 apps 
					</span>
					<span className={communicationClasses.join(' ')} 
								style={styles.subHeader}
								onClick={this.showContent.bind(this, 'communication')}> 
							 communication 
					</span>
				</div>
				
				<table id='skills-container' style={styles.container}>
						{this.state.content}
				</table>
				
				<div id='skill-nav' style={styles.navbar}>
					<Link to='/' className='nav'>home</Link>
					<Link to='projects' className='nav'>projects</Link>
					<Link to='about' className='nav'>about</Link>
					<Link to='contact' className='nav'>contact</Link>
				</div>
			</div>
    );
  }
}

export default Skills;