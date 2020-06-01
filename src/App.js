import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cnames from 'classnames';
import { Helmet } from "react-helmet";
import Toggle from 'react-toggle';
import posed, { PoseGroup } from 'react-pose';
import ScrollToTop from './components/ScrollToTop/';
import GoogleAnalytics from './components/GoogleAnalytics/';
import Home from './routes/Home/';
import Spotlight from './routes/Spotlight/';
import './styles/foundations.module.scss'
import styles from './App.module.scss';

const moonFilled = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M12.43 2.3c-2.38-.59-4.68-.27-6.63.64-.35.16-.41.64-.1.86C8.3 5.6 10 8.6 10 12c0 3.4-1.7 6.4-4.3 8.2-.32.22-.26.7.09.86 1.28.6 2.71.94 4.21.94 6.05 0 10.85-5.38 9.87-11.6-.61-3.92-3.59-7.16-7.44-8.1z"/></svg>
const moon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/></svg>
const sunFilled = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
  <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M6.05 4.14l-.39-.39c-.39-.39-1.02-.38-1.4 0l-.01.01c-.39.39-.39 1.02 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01c.39-.38.39-1.02 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39c-.39.39-.39 1.02 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39c.39-.39.39-1.01 0-1.4zm-1.81 15.1l.39.39c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.39-.39c-.39-.39-1.02-.38-1.4 0-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39c.39-.39.38-1.02 0-1.4l-.01-.01c-.39-.39-1.02-.39-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z" fill="currentColor"/>
</svg>
const sun = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>


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
  constructor () {
    super()
    this.state = {
      darkmode: localStorage.getItem('darkmode') === 'true',
    }
    this.handleDarkmode = this.handleDarkmode.bind(this);
  }

  componentDidMount() {
    setTimeout(() => { window.scrollTo(0, 0) }, 400);

    const darkmodeConfig = localStorage.getItem('darkmode');
    const darkmodeNative = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    if ((darkmodeNative || darkmodeConfig === 'true') && darkmodeConfig !== 'false') {
      this.setState({ darkmode: true });
    }
  }

  handleDarkmode() {
    this.setState({ darkmode: !this.state.darkmode }, () => localStorage.setItem('darkmode', this.state.darkmode));
  }

  render(props) {
    return (
      <BrowserRouter>
        <GoogleAnalytics>
          <ScrollToTop timing={animationDelay}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Marcus Hammarstedt</title>
                <meta name="description" content="Hey friend, looking for a Product Designer or UI Developer? I might just be the one. Click through to learn a bit more about me and my work." />
            </Helmet>
            <div className={cnames(styles.core, this.state.darkmode ? styles.dark : styles.light)}>
              <div className={styles.toggleContainer}>
                <label htmlFor='darkmode' className={cnames(styles.displayBodySmall, styles.toggle, this.state.darkmode && styles.active)}>
                  <Toggle
                    onChange={this.handleDarkmode}
                    defaultChecked={this.state.darkmode}
                    className={styles.toggle}
                    icons={{
                      checked: this.state.darkmode ? sun : sunFilled,
                      unchecked: this.state.darkmode ? moonFilled : moon,
                    }}
                  />
                  <span className={styles.hiddenLabel}>Darkmode</span>
                </label>
              </div>
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
            </div>
          </ScrollToTop>
        </GoogleAnalytics>
      </BrowserRouter>
    );
  }
}

export default App;
