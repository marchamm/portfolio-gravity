import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import cnames from 'classnames';
import styles from './DesignSystem.module.scss';
import PageContainer from '../../../components/PageContainer';
import SpotlightHero from '../../../components/SpotlightHero';
import hero from './images/pagehero.svg';

class Indicator extends Component {
  handleSetActive(to) {
    let e = document.getElementsByName(to);
    e[0].classList.add(styles.active);
  }

  render() {
    const offset = -(window.innerHeight * 0.75);

    return (
      <Link
        className={styles.stepIndicator}
        spy
        to={this.props.to}
        smooth
        offset={offset}
        activeClass={styles.active}
        onSetActive={this.handleSetActive}
      >
        <span />
      </Link>
    )

  }
}

class ProductPage extends Component {

  componentDidMount() {
    setTimeout(() => { window.scrollTo(0, 0) }, 400);
  }

  render () {

    const scrollOffset = -40;

    return (
      <React.Fragment>
        <SpotlightHero
          title="Design System"
          caption="Harmony and efficiency in a product driven company."
          disclaimer="Some values have been obscured for confidentiality purposes"
          background={hero}
        />
        <PageContainer size="LARGE">
          <div className={cnames(styles.process, styles.spMedium)}>
            <Element name="intro" className={styles.step}>
              <Indicator to="intro" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <Link className={styles.scrollLink} to="overview" smooth offset={scrollOffset}>Overview</Link>
              </div>
            </Element>
            <Element name="overview" className={styles.step}>
              <Indicator to="overview" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <PageContainer size="SMALL" left>
                  <div className={styles.displayTwo}>Overview</div>
                  <p>This work was part of an initiative at Redbubble that focused on performance and a technical shift towards a new react based framework. We designed, built and delivered incrementally as we started from scratch.</p>
                  <p>My role was to do research, discovery,  prototyping and test our assumptions.</p>
                  <p>We were a team of 5. Product Manager, Engineers and myself.</p>
                </PageContainer>
              </div>
            </Element>
          </div>
        </PageContainer>
      </React.Fragment>
    )
  }
};

export default ProductPage
