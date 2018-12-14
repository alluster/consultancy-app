import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './styles/index.css'

import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import Project from './views/Project/Project'
import About from './views/About/About'
import Contact from './views/Contact/Contact'

class App extends Component {
  render() {
    return (
      <div>
        
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route  path='/about' component={About}/>
            <Route  path='/contact' component={Contact}/>
            <Route  exact path='/projects' component={Projects}/>
            <Route  path='/projects/:projectName' component={Project}/>
          </Switch>
      </div>
    )
  }
}
export default App;
