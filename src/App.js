import logo from './logo.svg';
import './App.css';
import React, { Component, Route, Router, Switch } from "react";
//import history from './react-router-dom';
import { Container, Menu } from 'semantic-ui-react'

import { Campaign } from './components/Campaign';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';



class App extends Component {
	render() {
		return (
			<Router history={History}>
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

  bavigateToHome(e){
    e.preventDefault();
//    history.pushState('/');
  }
};

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

export default App;
