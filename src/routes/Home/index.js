import React, { Component } from 'react';
import cnames from 'classnames';
import Footer from '../../components/Footer';
import PageContainer from '../../components/PageContainer';
import GravityHero from '../../components/GravityHero';
import SpotlightCard from '../../components/SpotlightCard';
import styles from './Home.module.scss';
import background from '../../styles/background.module.scss';
import '../../styles/utils.module.scss';

import productPageImage from '../../images/illustration-productpage.jpg';
import designSystemImage from '../../images/illustration-bird.jpg';
import prototypingImage from '../../images/illustration-config.jpg';
import eCommerceImage from '../../images/illustration-maxwell.jpg';

const spotlightImages = {
  productPage: productPageImage,
  designSystem: designSystemImage,
  prototyping: prototypingImage,
  eCommerce: eCommerceImage,
}

class Home extends Component {

  render() {
    return (
      <div>
        <div className={cnames(background.wrapper, styles.wrapper)}>
          <GravityHero />
          <div className={styles.main}>
            <PageContainer padding size="SMALL" left>
            <div className={styles.spMedium}>
              <h2 className={styles.displayOne}>Hello!</h2>
              <p className={styles.displayFour}><strong>I'm Marcus, a Senior Design Technologist working with the talented people at Redbubble.</strong></p>
              <p>I get excited about design systems, prototyping and solving the right problems. You're most likely to find me somewhere around Melbourne surfing, climbing or drinking coffee.</p>
            </div>
            </PageContainer>
            <PageContainer padding>
              <div className={cnames(styles.spMedium, styles.spHorisontal)}>
                <h2 className={styles.displayOne}>Spotlight</h2>
              </div>
              <div className={cnames(styles.spMedium, styles.spHorisontal)} style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -32px' }}>
                <SpotlightCard
                  to="/spotlight/design-system"
                  title="Building &amp; establishing a Design System"
                  label="Product"
                  description="Helping teams be efficient, fast and deliver high quality experiences."
                  cta="Design System"
                  image={spotlightImages.designSystem}
                />
                <SpotlightCard
                  to="/spotlight/product-page"
                  title="Design &amp; build out new product page"
                  label="Product Design"
                  description="Identifying key user pain points and iterating towards a fast and improved user experience."
                  cta="Product page"
                  image={spotlightImages.productPage}
                />
                <SpotlightCard
                  to="/spotlight/prototype"
                  title="Using prototyping as a tool for solving complex UI problems."
                  label="Prototyping"
                  description="Tackling product configuration in a unique environment."
                  cta="Prototyping"
                  image={spotlightImages.prototyping}
                />
                <SpotlightCard
                  to="/spotlight/maxwell-williams"
                  title="Designing and building enterprise B2B / B2C solutions."
                  label="E-Commerce"
                  description="Templating and building frameworks and custom integrations."
                  cta="E-Commerce"
                  image={spotlightImages.eCommerce}
                />
              </div>
            </PageContainer>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
