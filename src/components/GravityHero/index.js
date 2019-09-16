import React, { Component } from 'react';
import Parallax from 'parallax-js';
import posed from 'react-pose';
import Burst from '../Burst'
import styles from './GravityHero.module.scss';
import '../../styles/utils.module.scss';

const parallaxOptions = {
  limitY: 20,
  invertX: false,
  invertY: false,
  calibrateX: true
}

const Letter = posed.div({
  closed: {
    x: -36,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 200,
      duration: 600,
    }
  }
});

class GravityHero extends Component {
  constructor () {
    super()
    this.state = {
      isVisible: 'initial'
    }

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible () {
    this.setState({
      isVisible: this.state.isVisible === 'visible' ? 'hidden' : 'visible',
    })
    console.log('toggle')
  }

  componentDidMount() {
    this.parallax = new Parallax(this.m, parallaxOptions)
    this.parallax = new Parallax(this.a, parallaxOptions)
    this.parallax = new Parallax(this.r, parallaxOptions)
    this.parallax = new Parallax(this.c, parallaxOptions)
    this.parallax = new Parallax(this.u, parallaxOptions)
    this.parallax = new Parallax(this.s, parallaxOptions)
  }

  componentWillUnmount() {
    this.parallax.disable()
  }

  render() {
    return (
      <div className={styles.heroContainer}>
        <Burst
          trigger={({ onClick }) => (
            // <button onClick={onClick}>Trigger</button>
            <React.Fragment>
              <div onClick={onClick} role="button" className={styles.beacon}>
                <div className={styles.core} />
              </div>
            </React.Fragment>
          )}
          clones={24}
        >
          <span role="img" aria-label="heart emojo">❤️</span>
        </Burst>
        <div className={styles.hero}>
          <div className={styles.letterContainer}>
            <div ref={el => this.m = el}>
              <span data-depth="0.5">
                <Letter initialPose="closed" pose="open">
                  <div className={styles.letter}>M</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.a = el}>
              <span data-depth="1">
                <Letter initialPose="closed" pose="open">
                  <div className={styles.letter}>A</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.r = el}>
              <span data-depth="1.5">
                <Letter initialPose="closed" pose="open">
                  <div className={styles.letter}>R</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.c = el}>
              <span data-depth="2">
                <Letter initialPose="closed" pose="open">
                  <div className={styles.letter}>C</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.u = el}>
              <span data-depth="2.5">
                <Letter initialPose="closed" pose="open">
                  <div className={styles.letter}>U</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.s = el}>
              <span data-depth="3">
                <Letter initialPose="closed" pose="open">
                  <div className={styles.letter}>S</div>
                </Letter>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GravityHero;
