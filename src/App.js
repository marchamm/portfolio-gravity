import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import posed, { PoseGroup } from 'react-pose';
import ScrollToTop from './components/ScrollToTop/';
import Home from './routes/Home/';
import Spotlight from './routes/Spotlight/';
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
          <Helmet>
              <meta charSet="utf-8" />
              <title>Marcus Hammarstedt</title>
              <meta name="description" content="Hey friend! If you're looking for a Product Designer or UI Developer, I might just be the one. I've got some case studies and other bits for you if you're not convinced." />
          </Helmet>
          <Route
            render={({ location }) => (
              <PoseGroup enterAfterExit={true}>
                <RouteContainer
                  key={!location.key ? 'homeComing' : location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} key="Home" />
                    <Route path="/spotlight" component={Spotlight} key="Spotlight" />
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
