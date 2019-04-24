import React from 'react';
import { Route } from 'react-router-dom';
import DesignSystem from './DesignSystem';

const Spotlight = ({ match }) => {
  console.log('hello', `${match.url}design-system`)
  return (
    <React.Fragment>
      Hello
      PFF
    </React.Fragment>
  );
}

export default Spotlight;
