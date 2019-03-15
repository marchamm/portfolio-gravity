import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './routes/Home/';
import ScrollToTop from './components/ScrollToTop'
import Spotlight from './routes/Spotlight/';
import DesignSystem from './routes/Spotlight/DesignSystem';
import About from './routes/About/';
import './App.module.scss'

const RouteContainer = posed.div({
  enter: {
    y: 0,
    x: 0,
    opacity: 1,
    delay: 600,
    beforeChildren: true,
    transition: {
      ease: 'linear',
    }
  },
  start: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      ease: 'linear',
    }
  }
});

class App extends Component {
  render(props) {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={!location.key ? 'homeComing' : location.key} initialPose="start" onRest={<ScrollToTop />}>
                {console.log(location.key)}
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="Home" />
                  <Route exact path="/spotlight" component={Spotlight} key="Case" />
                  <Route exact path="/spotlight/design-system" component={DesignSystem} key="DS" />
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
