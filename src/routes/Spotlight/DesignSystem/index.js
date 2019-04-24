import React, { Component } from 'react';
import cnames from 'classnames';
import styles from './DesignSystem.module.scss';

class DesignSystem extends Component {
  constructor(props) {
   super(props);
   this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack() {
      this.props.history.goBack();
  }
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.back} onClick={this.goBack}>
            <span className={cnames(styles.arrow, styles.left)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                <g fill="#1F3033" fillRule="evenodd">
                  <rect width="32" height="4" y="11"/>
                  <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                  <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                </g>
              </svg>
            </span>
          </div>
          <div className={styles.displayOne}>Design System</div>
          <div className={styles.divider} />
          <p className={styles.displayBody}>Bringing harmony and efficiency to designers and developers.</p>
        </div>
      </div>
    )
  }
};

export default DesignSystem
