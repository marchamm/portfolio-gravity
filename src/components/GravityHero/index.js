import React, { Component } from 'react';
import Parallax from 'parallax-js';
import posed from 'react-pose';
import cnames from 'classnames';
import styles from './GravityHero.module.scss';
import '../../styles/utils.module.scss';

const parallaxOptions = {
  limitY: 30,
  limitX: 30,
  invertX: false,
  invertY: false,
}

const Gravity = posed.div({
    closed: {
      x: 0,
    },
    open: {
      x: 0,
      staggerChildren: 40,
    }
})

const Letter = posed.div({
  closed: {
    x: (props) => (-20 * props.offset),
  },
  open: {
    x: (props) => (-4 * props.offset),
    transition: {
      duration: 1000,
      type: 'spring',
    }
  }
});

const rotate = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M10.23 1.75c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm3.89 18.73L3.52 9.88c-.39-.39-.39-1.02 0-1.41l4.95-4.95c.39-.39 1.02-.39 1.41 0l10.61 10.61c.39.39.39 1.02 0 1.41l-4.95 4.95c-.39.38-1.03.38-1.42-.01zM17.61 1.4C16.04.57 14.06-.03 11.81.02c-.18 0-.26.22-.14.35l3.48 3.48 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74zM8.85 20.16l-1.33 1.33c-3.09-1.46-5.34-4.37-5.89-7.86-.06-.41-.44-.69-.86-.62-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.57.83 3.55 1.43 5.8 1.38.18 0 .26-.22.14-.35l-3.48-3.49z"/></svg>

class GravityHero extends Component {
  constructor () {
    super()
    this.state = {
      isVisible: 'initial',
      askedPermission: false,
      permission: 'denied',
    }

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible () {
    this.setState({
      isVisible: this.state.isVisible === 'visible' ? 'hidden' : 'visible',
    })
  }

  componentDidMount() {
    if (typeof DeviceMotionEvent.requestPermission === 'function' && !localStorage.getItem('askedpermission')) {
      this.setState({ askedPermission: true });
    } else {
      this.initiateParallax();
    }
  }

  componentWillUnmount() {
    this.parallax.destroy()
  }

  initiateParallax() {
    this.parallax = new Parallax(this.m, parallaxOptions)
    this.parallax = new Parallax(this.a, parallaxOptions)
    this.parallax = new Parallax(this.r, parallaxOptions)
    this.parallax = new Parallax(this.c, parallaxOptions)
    this.parallax = new Parallax(this.u, parallaxOptions)
    this.parallax = new Parallax(this.s, parallaxOptions)
  }

  getPermission() {
    // feature detect
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', () => {});
            this.initiateParallax();
          }
          localStorage.setItem('askedpermission', true)
          this.setState({ askedPermission: false });
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
    }
  }

  render() {
    return (
      <div className={cnames(styles.heroContainer)}>
        {this.state.askedPermission && (
          <div className={cnames(styles.prompt)}>
            <div className={styles.spMedium}>
              <div className={styles.icon}>{rotate}</div>
              <p className={styles.displayBodySmall}>To see a funky hero you need to enable device orientation.</p>
            </div>
            <button className={styles.displayBodySmall} onClick={() => this.getPermission()}>
              Enable
            </button>
          </div>
        )}
        <Gravity initialPose="closed" pose={this.state.askedPermission ? 'closed' : 'open'} className={cnames(styles.hero, this.state.askedPermission && styles.disabled)}>
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
