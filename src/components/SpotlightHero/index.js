import React, { Component } from 'react';
import { withRouter } from "react-router";
import cnames from 'classnames';
import PageContainer from '../PageContainer';
import styles from './SpotlightHero.module.scss';

class SpotlightHero extends Component {
  constructor(props) {
   super(props);
   this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { title, caption, background, disclaimer } = this.props
    return (
      <div className={cnames(styles.hero, styles.spDisplay, styles.spVertical)} style={{ backgroundImage: `url(${background})` }}>
        <PageContainer padding>
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
          <PageContainer size="SMALL">
            <div className={styles.spMedium} />
            <div className={styles.displayOne}>{title}</div>
            <p className={styles.displayFive}>{caption}</p>
            <p className={cnames(styles.displayBodySmall, styles.muted)}><i>{disclaimer}</i></p>
          </PageContainer>
        </PageContainer>
      </div>
    )
  }
}

export default withRouter(SpotlightHero);
