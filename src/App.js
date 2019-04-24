import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './routes/Home/';
import Spotlight from './routes/Spotlight/';
import DesignSystem from './routes/Spotlight/DesignSystem';
import ProductPage from './routes/Spotlight/ProductPage';
import About from './routes/About/';
import './styles/foundations.module.scss'

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 600,
  },
  exit: {
    opacity: 0,
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
                  <Route exact path="/spotlight" component={Spotlight} key="Spotlight" />
                  <Route exact path="/spotlight/design-system" component={DesignSystem} key="DS" />
                  <Route exact path="/spotlight/product-page" component={ProductPage} key="DS" />
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
