import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cnames from 'classnames';
import Parallax from 'parallax-js';
import posed from 'react-pose';
import styles from './Home.module.scss';
import background from '../../styles/background.module.scss';
import '../../styles/utils.module.scss';

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

const Letter = posed.div({
  closed: {
    opacity: 0,
    x: -100,
  },
  open: {
    opacity: 1,
    x: 0,
    delay: 600,
    transition: {
      type: 'spring',
      duration: 600,
    }
  }
});

class Home extends Component {

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
      <div>
        <div className={cnames(background.wrapper, styles.wrapper)}>
          <div className={styles.heroContainer}>
            <Beacon toggleVisible={this.toggleVisible} />
            <Message toggleVisible={this.toggleVisible} pose={this.state.isVisible}/>
            <div className={styles.bg}>
              <div className={styles.letterContainer} />
              <div className={styles.letterContainer} />
              <div className={styles.letterContainer} />
              <div className={styles.letterContainer} />
              <div className={styles.letterContainer} />
              <div className={styles.letterContainer} />
            </div>
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
          <div className={styles.main}>
            <div className={styles.section}>
              <div className={cnames(styles.content, styles.plain)}>
                <div className={cnames(styles.body, styles.spLarge)}>
                  <h2 className={styles.displayOne}>Hello!</h2>
                  <p className={styles.displayFour}><strong>I'm Marcus, a Senior Design Technologist working with the talented people at Redbubble.</strong></p><p>I get excited about design systems, prototyping and solving the right problems. You're most likely to find me somewhere around Melbourne surfing, climbing or drinking coffee.</p>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.displayOne}>Spotlight</h2>
              </div>
              <Link to="/spotlight/design-system" className={cnames(styles.content, styles.interactive, styles.designSystem)}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>Product</div>
                  <p className={cnames(styles.lead, styles.displayFour)}><strong>Building &amp; establishing a Design System</strong></p>
                  <p>Helping teams be efficient, fast and deliver high quality experiences.</p>
                  <div className={cnames(styles.cta, styles.displayFour)}>Design System
                    <span className={styles.arrow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                        <g fill="#1F3033" fillRule="evenodd">
                          <rect width="32" height="4" y="11"/>
                          <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                          <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.preview} />
              </Link>
              <Link to="/spotlight/product-page" className={cnames(styles.content, styles.interactive, styles.productPage)}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>Product Design</div>
                  <p className={cnames(styles.lead, styles.displayFour)}><strong>Design &amp; build out new product page</strong></p>
                  <p>Identifying key user pain points and iterating towards a fast and improved user experience.</p>
                  <div className={cnames(cnames(styles.cta, styles.displayFour), styles.displayFour)}>Product Page
                    <span className={styles.arrow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                        <g fill="#1F3033" fillRule="evenodd">
                          <rect width="32" height="4" y="11"/>
                          <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                          <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.preview} />
              </Link>
              <Link to="/spotlight/prototype" className={cnames(styles.content, styles.interactive, styles.productConfig)}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>Prototyping</div>
                  <p className={cnames(styles.lead, styles.displayFour)}><strong>Using prototyping as a tool for solving complex UI problems.</strong></p>
                  <p>Tackling product configuration in a unique environment.</p>
                  <div to="/spotlight" className={cnames(styles.cta, styles.displayFour)}>Prototyping
                    <span className={styles.arrow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                        <g fill="#1F3033" fillRule="evenodd">
                          <rect width="32" height="4" y="11"/>
                          <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                          <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.preview} />
              </Link>
              <Link to="/spotlight/maxwell-williams" className={cnames(styles.content, styles.interactive, styles.ecommerce)}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>E-Commerce</div>
                  <p className={cnames(styles.lead, styles.displayFour)}><strong>Designing and building enterprise B2B / B2C solutions.</strong></p>
                  <p>Templating and building frameworks and custom integrations.</p>
                  <div className={cnames(styles.cta, styles.displayFour)}>E-Commerce
                    <span className={styles.arrow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                        <g fill="#1F3033" fillRule="evenodd">
                          <rect width="32" height="4" y="11"/>
                          <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                          <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.preview} />
              </Link>
            </div>
            <div className={cnames(styles.section, styles.vibrant)}>
              <div className={styles.content}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>Social</div>
                  <ul>
                    <li><a href="https://codepen.io/marchamm/" target="_blank">Codepen</a></li>
                    <li><a href="https://github.com/marchamm/" target="_blank">GitHub</a></li>
                    <li><a href="https://dribbble.com/marcushammarstedt" target="_blank">Dribble</a></li>
                    <li><a href="https://www.linkedin.com/in/marcushammarstedt" target="_blank">LinkedIn</a></li>
                  </ul>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>Kudos</div>
                  <ul>
                    <li><strong><a href="http://matthew.wagerfield.com/parallax/" target="_blank">Parallax</a></strong> for the gyro plugin used at the top.</li>
                    <li><strong><a href="https://github.com/marchamm/burst-animation" target="_blank">Burst</a></strong> for funky burst animations when clicking the waving emoji at the top.</li>
                  </ul>
                </div>
              </div> <div className={styles.content}>
                <div className={styles.body}>
                  <div className={cnames(styles.label, styles.displayBodyXSmall)}>About</div>
                  <ul>
                    <li>A Swede living permanently in Australia.</li>
                    <li>On weekends you're likely to find me on a mountain or in the ocean.</li>
                    <li>Been designing and developing since the age of 13.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
