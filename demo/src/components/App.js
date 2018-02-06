import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    );
  }
}

export default App;
