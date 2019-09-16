import React, { Component } from 'react';
import Parallax from 'parallax-js';
import posed from 'react-pose';
import Burst from '../Burst'
import styles from './GravityHero.module.scss';
import '../../styles/utils.module.scss';

const parallaxOptions = {
  limitY: 40,
  invertX: false,
  invertY: false,
  calibrateX: true
}

const Gravity = posed.div({
    closed: {
      x: 0,
    },
    open: {
      x: 0,
      staggerChildren: 20,
      delayChildren: 200,
    }
})

const Letter = posed.div({
  closed: {
    x: (props) => (-100 * props.offset),
    opacity: 0,
  },
  open: {
    x: (props) => (-25 * props.offset),
    opacity: 1,
    transition: {
      duration: 1000,
      type: 'spring',
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
          clones={20}
          position="bottom"
        >
          <svg viewBox="0 0 20 18.35" width="28" fill="currentColor" className={styles.heart}>
            <path d="M10 18.35L8.55 17C3.4 12.36 0 9.28 0 5.5A5.45 5.45 0 0 1 5.5 0 6 6 0 0 1 10 2.09 6 6 0 0 1 14.5 0 5.45 5.45 0 0 1 20 5.5c0 3.78-3.4 6.86-8.55 11.54z" />
          </svg>
        </Burst>
        <Gravity initialPose="closed" pose="open" className={styles.hero}>
          <div className={styles.letterContainer}>
            <div ref={el => this.m = el}>
              <span data-depth="0.75" key="1">
                <Letter initialPose="closed" pose="open" offset="0">
                  <div className={styles.letter}>M</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.a = el}>
              <span data-depth="1.5" key="2">
                <Letter initialPose="closed" pose="open" offset="1">
                  <div className={styles.letter}>A</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.r = el}>
              <span data-depth="2.25" key="3">
                <Letter initialPose="closed" pose="open" offset="2">
                  <div className={styles.letter}>R</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.c = el} key="4">
              <span data-depth="3">
                <Letter initialPose="closed" pose="open" offset="3">
                  <div className={styles.letter}>C</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.u = el}>
              <span data-depth="3.75" key="5">
                <Letter initialPose="closed" pose="open" offset="4">
                  <div className={styles.letter}>U</div>
                </Letter>
              </span>
            </div>
          </div>
          <div className={styles.letterContainer}>
            <div ref={el => this.s = el} key="6">
              <span data-depth="4.5">
                <Letter initialPose="closed" pose="open" offset="5">
                  <div className={styles.letter}>S</div>
                </Letter>
              </span>
            </div>
          </div>
        </Gravity>
      </div>
    );
  }
}

export default GravityHero;
