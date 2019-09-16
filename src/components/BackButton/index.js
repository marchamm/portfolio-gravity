import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import cnames from 'classnames';
import styles from './BackButton.module.scss';

class BackButton extends Component {
  constructor(props) {
   super(props);
   this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Link to="/" className={cnames(styles.back)}>
        <div>
          <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </div>
      </Link>
    )
  }
}

export default withRouter(BackButton);
