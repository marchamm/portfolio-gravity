import React from 'react';
import { Route } from 'react-router-dom';
import cnames from 'classnames';
import Footer from '../../components/Footer';
import PageContainer from '../../components/PageContainer';
import SpotlightCard from '../../components/SpotlightCard';
import BackButton from '../../components/BackButton';
import DesignSystem from './DesignSystem';
import ProductPage from './ProductPage';
import styles from'./Spotlight.module.scss';

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

const Spotlight = ({ match }) => {
  return (
    <div className={styles.container}>
      <div className={cnames(styles.wrapper)}>
        <BackButton />
        <div className={styles.caseContainer}>
          <Route exact path="/spotlight/product-page" component={ProductPage} key="productPage" onUpdate={() => console.log('update')} />
          <Route exact path="/spotlight/design-system" component={DesignSystem} key="designSystem" />
        </div>
        <div className={styles.spotlightContainer}>
          <PageContainer padding>
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
                cta="Codepen"
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
                cta="GitHub"
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
  );
}

export default Spotlight;
