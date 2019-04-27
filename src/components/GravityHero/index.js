import React, { Component } from 'react';
import Parallax from 'parallax-js';
import posed from 'react-pose';
import styles from './GravityHero.module.scss';
import '../../styles/utils.module.scss';

const AnimateMessage = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    originX: '100%',
    originY: '0%',
  },
  hidden: {
    opacity: 0,
    y: 8,
    x: 8,
    rotate: -8,
    originX: '100%',
    originY: '0%',
    transition: {
      duration: 100,
      ease: 'easeInOut',
    }
  }
});

const parallaxOptions = {
  limitY: 20,
  invertX: false,
  invertY: false,
  calibrateX: true
}

const Beacon = (props) => {
  return(
    <div role="button" className={styles.beacon} onClick={props.toggleVisible}>
      <div className={styles.core} />
    </div>
  )
}

const Message = (props) => {
  return(
    <div className={styles.messageContainer}>
      <AnimateMessage pose={props.pose}>
        <div className={styles.message}>
          <div className={styles.underlay} />
          <div className={styles.title}>
            I like you, you're curious
          </div>
          <div className={styles.description}>
            Let me know if you want to grab a coffee. I also like coffee.
          </div>
          <div className={styles.close} onClick={props.toggleVisible} />
        </div>
      </AnimateMessage>
    </div>
  )
}

const Letter = posed.div({
  closed: {
    x: -150,
  },
  open: {
    x: 0,
    delay: 600,
    transition: {
      type: 'spring',
      duration: 600,
    }
  }
});

class GravityHero extends Component {
  constructor () {
    super()
    this.state = {
      isVisible: 'hidden'
    }

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible () {
    this.setState({
      isVisible: this.state.isVisible === 'hidden' ? 'visible' : 'hidden',
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
        <Beacon toggleVisible={this.toggleVisible} />
        <Message toggleVisible={this.toggleVisible} pose={this.state.isVisible}/>
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
