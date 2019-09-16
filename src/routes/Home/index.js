import React, { Component } from 'react';
import cnames from 'classnames';
import { Link, Element } from 'react-scroll';
import Footer from '../../components/Footer';
import List, { ListItem } from '../../components/List';
import PageContainer from '../../components/PageContainer';
import GravityHero from '../../components/GravityHero';
import SpotlightCard from '../../components/SpotlightCard';
import styles from './Home.module.scss';
import '../../styles/utils.module.scss';

import productPageImage from '../../images/illustration-productpage.jpg';
import designSystemImage from '../../images/illustration-bird.jpg';
import prototypingImage from '../../images/illustration-config.jpg';
import eCommerceImage from '../../images/illustration-maxwell.jpg';
import burstAnimation from '../../images/illustration-burst.jpg';

const spotlightImages = {
  productPage: productPageImage,
  designSystem: designSystemImage,
  prototyping: prototypingImage,
  eCommerce: eCommerceImage,
  burstAnimation: burstAnimation,
}

class Home extends Component {
  componentDidMount() {
    setTimeout(() => { window.scrollTo(0, 0) }, 400);
  }
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <GravityHero />
          <div className={styles.main}>
            <Link
              to="intro"
              smooth
              className={styles.arrowLink}
            >
              <div className={styles.arrowBounce}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                  <g fill="currentColor" fillRule="evenodd">
                    <rect width="32" height="4" y="11"/>
                    <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                    <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                  </g>
                </svg>
              </div>
            </Link>
            <div className={styles.infoContainer}>
              <PageContainer padding size="SMALL" left display>
                <Element name="intro" className={styles.spMedium}>
                  <h2 className={styles.displayOne}>Hello!</h2>
                  <p className={styles.displayFour}><strong>I'm Marcus, a Senior Design Technologist working with the talented people at Redbubble.</strong></p>
                  <p>I get excited about design systems, prototyping and solving the right problems. You're most likely to find me somewhere around Melbourne surfing, climbing or drinking coffee.</p>
                </Element>
                <Element name="experience" className={styles.spMedium}>
                  <h2 className={styles.displayThree}>Experience</h2>
                  <p>I'm a technical designer who is as comfortable developing ui components as I am in design tooling.</p>
                  <p>I've been designing and building websites for 15 years and have experience from freelance, print, packaging, small web agencies, enterprise SAAS providers and product.</p>
                  <List strong progress className={styles.displayBodySmall}>
                    <ListItem>
                      Design Systems
                    </ListItem>
                    <ListItem>
                      UI / UX &amp; Product Thinking
                    </ListItem>
                    <ListItem>
                      HTML, CSS, JS, React
                    </ListItem>
                    <ListItem>
                      Agile, Lean &amp; Continuous Delivery
                    </ListItem>
                  </List>
                </Element>
              </PageContainer>
            </div>
            <div className={styles.spotlightContainer}>
              <PageContainer padding>
                <div className={cnames(styles.spMedium, styles.spHorisontal)}>
                  <h2 className={styles.displayOne}>Spotlight</h2>
                </div>
                <div className={cnames(styles.spMedium, styles.spHorisontal)} style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -32px' }}>
                <SpotlightCard
                  to="/spotlight/product-page"
                  title="Design and build out a new product page"
                  label="Case Study"
                  description="Identifying key user pain points and iterating towards a fast and improved user experience."
                  cta="Product page"
                  image={spotlightImages.productPage}
                />
                <SpotlightCard
                  to="/spotlight/design-system"
                  title="Build and establish a Design System"
                  label="Case Study"
                  description="Helping teams be efficient, fast and deliver high quality experiences."
                  cta="Design System"
                  image={spotlightImages.designSystem}
                />
                <SpotlightCard
                  to="https://s.codepen.io/marchamm/debug/pVdzGY"
                  title="Prototyping as a tool for solving complex UI problems."
                  label="Prototype"
                  description="Tackling product configuration at scale in a unique environment."
                  cta="Prototype, Codepen"
                  image={spotlightImages.prototyping}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <SpotlightCard
                  to="https://github.com/marchamm/burst-animation"
                  title="Animating any object with different effects"
                  label="Plugin"
                  description="Working on a small little plugin to make burst animations a breeze."
                  cta="Plugin, GitHub"
                  image={spotlightImages.burstAnimation}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                />
                </div>
              </PageContainer>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
