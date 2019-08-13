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

const spotlightImages = {
  productPage: productPageImage,
  designSystem: designSystemImage,
  prototyping: prototypingImage,
  eCommerce: eCommerceImage,
}

const Spotlight = ({ match }) => {
  return (
    <div className={cnames(styles.wrapper)}>
      <BackButton />
      <Route exact path="/spotlight/product-page" component={ProductPage} key="productPage" />
      <Route exact path="/spotlight/design-system" component={DesignSystem} key="designSystem" />
      <PageContainer padding>
        <div className={cnames(styles.spMedium, styles.spHorisontal)} style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -32px' }}>
          <SpotlightCard
            to="/spotlight/product-page"
            title="Design and build out a new product page"
            label="Product Design"
            description="Identifying key user pain points and iterating towards a fast and improved user experience."
            cta="Product page"
            image={spotlightImages.productPage}
          />
          <SpotlightCard
            to="/spotlight/design-system"
            title="Build and establish a Design System"
            label="Product"
            description="Helping teams be efficient, fast and deliver high quality experiences."
            cta="Design System"
            image={spotlightImages.designSystem}
          />
          <SpotlightCard
            to="/spotlight/prototype"
            title="Prototyping as a tool for solving complex UI problems."
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
  );
}

export default Spotlight;
