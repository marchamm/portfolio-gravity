import React from 'react';
import { PropTypes } from 'prop-types';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-60838161-1');

class GAListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

export default GAListener;
