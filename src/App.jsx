import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './App.css';
import ContainerMain from './containers/ContainerMain.jsx';
import Welcome from './views/Welcome.jsx';
import Loops from './views/projects/Loops.jsx';
import Tone from './views/projects/Tone.jsx';
import EightBit from './views/projects/EightBit.jsx';
import Gif from './views/projects/Gif.jsx';
import Skills from './views/Skills.jsx';
import Projects from './views/projects/Projects.jsx';
import Testimonials from './views/Testimonials.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={ContainerMain}>
					<IndexRoute component={Welcome} />
					<Route path='skills' component={Skills} />
					<Route path='projects' component={Projects} />
						<Route path='loops-with-friends' component={Loops} />
						<Route path='tone-quiz' component={Tone} />
						<Route path='8-bit-beatdown' component={EightBit} />
						<Route path='gif-ing' component={Gif} />
					<Route path='testimonials' component={Testimonials} />
					<Route path='about' component={About} />
					<Route path='contact' component={Contact} />
				</Route>
			</Router>
    );
  }
}

export default App;