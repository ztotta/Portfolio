import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './App.css';
import ContainerMain from './containers/ContainerMain';
import Welcome from './views/Welcome';
import Loops from './views/projects/Loops';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={ContainerMain}>
					<IndexRoute component={Welcome} />
					<Route path='loops-with-friends' component={Loops} />
				</Route>
			</Router>
    );
  }
}

export default App;