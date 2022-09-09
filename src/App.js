import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { createBrowserHistory } from 'history';
import { Router, Route, Switch} from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'

import { Campaign } from './components/Campaign';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

export const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Container>
          <Menu secondary>
            <Menu.Item
            name='home'
            onClick={this.navigateToHome}
            />
          </Menu>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/campaigns/:address' component={Campaign}/>
            <Route component={NotFound}/>
          </Switch>

        </Container>
			</Router>
		);
	}

  navigateToHome(e){
    e.preventDefault();
//    history.pushState('/');
  }
};
  export default App;


//function App() {
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
//


