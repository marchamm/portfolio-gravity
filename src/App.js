import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './routes/Home/';
import Spotlight from './routes/Spotlight/';
import About from './routes/About/';
import './styles/foundations.module.scss'

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 500,
    beforeChildren: true
  },
  exit: {
    opacity: 0,
    beforeChildren: true
  }
});

class App extends Component {
  render(props) {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <PoseGroup enterAfterExit={true}>
              <RouteContainer
                key={!location.key ? 'homeComing' : location.key}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="Home" />
                  <Route path="/spotlight" component={Spotlight} key="Spotlight" />

                  <Route exact path="/about" component={About} key="About" />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
