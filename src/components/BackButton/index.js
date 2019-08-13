import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
      <button className={styles.back} onClick={this.goBack}>
        <span className={cnames(styles.arrow, styles.left)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
            <g fill="currentColor" fillRule="evenodd">
              <rect width="32" height="4" y="11"/>
              <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)" />
              <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)" />
            </g>
          </svg>
        </span>
      </button>
    )
  }
}

export default withRouter(BackButton);
