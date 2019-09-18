import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import ScrollToTop from './components/ScrollToTop/';
import Home from './routes/Home/';
import Spotlight from './routes/Spotlight/';
import About from './routes/About/';
import './styles/foundations.module.scss'

const animationDelay = 500;

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: animationDelay,
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
        <ScrollToTop timing={animationDelay}>
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
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
