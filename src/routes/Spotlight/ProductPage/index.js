import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import cnames from 'classnames';
import styles from './ProductPage.module.scss';
import List, { ListItem } from '../../../components/List';
import PageContainer from '../../../components/PageContainer';
import SpotlightHero from '../../../components/SpotlightHero';
import splash from './images/productdisplayclean.jpg';
import breakdownThumbnail from './images/breakdown-thumbnail.jpg';
import breakdown from './images/breakdown-new.jpg';
import fakeGoogle from './images/fakegoogle.gif';
import productpage from './images/productpage.mp4';
import productpageimg from './images/productpage.png';

class Indicator extends Component {
  handleSetActive(to) {
    let e = document.getElementsByName(to);
    e[0].classList.add(styles.active);
    console.log('here', to)
  }

  render() {
    const offset = -(window.innerHeight * 0.75);

    return (
      <Link
        className={cnames(styles.stepIndicator, styles.active)}
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
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 400);
    console.log('pp mounted')
  }

  render () {

    const scrollOffset = -40;

    return (
      <React.Fragment>
        <SpotlightHero
          title="Product Page"
          caption="Be the fastest, unique shopping experience our customers have ever seen."
          disclaimer="Some values have been obscured for confidentiality purposes"
        />
        <PageContainer size="LARGE">
          <div className={cnames(styles.process, styles.spMedium)}>
            <Element name="intro" className={styles.step}>
              <Indicator to="intro" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <Link className={styles.scrollLink} to="pp-overview" smooth offset={scrollOffset}>Overview</Link>
                <Link className={styles.scrollLink} to="pp-strategy" smooth offset={scrollOffset}>Strategy</Link>
                <Link className={styles.scrollLink} to="pp-research" smooth offset={scrollOffset}>Research</Link>
                <Link className={styles.scrollLink} to="pp-design" smooth offset={scrollOffset}>Design</Link>
                <Link className={styles.scrollLink} to="pp-outcome" smooth offset={scrollOffset}>Outcome</Link>
              </div>
            </Element>
            <Element name="pp-overview" className={styles.step}>
              <Indicator to="pp-overview" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <PageContainer size="SMALL" left>
                  <div className={styles.displayTwo}>Overview</div>
                  <p>This work was part of an initiative at Redbubble that focused on performance and a technical shift towards a new react based framework. We designed, built and delivered incrementally as we started from scratch.</p>
                  <p>My role was to do research, discovery,  prototyping and test our assumptions.</p>
                  <p>We were a team of 5. Product Manager, Engineers and myself.</p>
                </PageContainer>
              </div>
            </Element>
            <Element name="pp-strategy" className={styles.step}>
              <Indicator to="pp-strategy" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <PageContainer size="SMALL" left>
                  <div className={styles.displayTwo}>Strategy</div>
                  <p>With a new platform and experience, we needed to think of a strategy that would allow us to quickly test our assumptions without disrupting the experience of our existing members and visitors.</p>
                  <p>Our solution was to focus on a customer segment that had large volume, and a focused set of needs. For us, this segment proved to be New users from Google Shopping.</p>
                  <p>This segment allowed us to experiment and deliver experiences with limited feature sets quickly, giving us the important quantitative insights we needed to gain confidence in our direction.</p>
                </PageContainer>
              </div>
            </Element>
            <Element name="pp-research" className={styles.step}>
              <Indicator to="pp-research" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <div className={styles.displayTwo}>Research</div>
                    <p>We used historical data and formed new assumptions to help shape our research methods. </p>
                    <p>After running multiple customer sessions and surveys, testing both our old experience and those of our competitors, we ended up with some key insights.
  </p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>
                        Delivery dates and returns policy are critical for user confidence
                      </ListItem>
                      <ListItem>
                        Reviews are used for trust as well as size and fit information
                      </ListItem>
                      <ListItem>
                        Users don’t make it past the product configurator
                      </ListItem>
                      <ListItem>
                        Product configuration exhausted the user
                      </ListItem>
                      <ListItem>
                        The majority of our options were not relevant to our customer
                      </ListItem>
                      <ListItem>
                        Customers had already made key product decisions off site eg. color and fit
                      </ListItem>
                    </List>
                  </PageContainer>
                </div>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <p className={cnames(styles.heading, styles.displayFour)}>Testing with confidence</p>
                    <p>Because of our initial research telling us so much about our customers offsite discovery. It was important for us to setup an environment that would give us insights that accurately described our customers unique behaviours.</p>
                    <p>We built our own Google Search landing page within our platform. It had a search form that would trigger a real product search within Google Shopping. The query would have applied filters, ensuring that each result would come from our site.</p>
                  </PageContainer>
                  <div className={styles.imageGallery}>
                    <div className={cnames(styles.imageGalleryContainer, styles.noPadding)}>
                      <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                          <img src={fakeGoogle} alt="google test demonstration"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
            <Element name="pp-design" className={styles.step}>
              <Indicator to="pp-design" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <Element name="design">
                      <div className={styles.displayTwo}>Design</div>
                    </Element>
                    <p>The old experience had accumulated features for over 10 years. They had been tested and validated. But our business has grown and users behaviours have changed.</p>
                    <p>Our customer is on the go and knows what they’re looking for. And our experience mainly got in the way.</p>
                    <p className={cnames(styles.heading, styles.displayFour)}>Problem statements</p>
                    <p>A few key areas came out of our research.</p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>How might we instil trust in new users?</ListItem>
                      <ListItem>How might we better communicate product quality and features?</ListItem>
                      <ListItem>How might we streamline the configuration process?</ListItem>
                    </List>
                  </PageContainer>
                  <div className={styles.imageGallery}>
                    <a href={breakdown} target="_blank" rel="noopener noreferrer">
                      <img className={styles.image} src={breakdownThumbnail} alt="old design"/>
                    </a>
                  </div>
                </div>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <p className={cnames(styles.heading, styles.displayFour)}>Design objectives</p>
                    <p>To guide us through our iterations and experiments, we established objectives to set and maintain a direction.</p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>Seamless experience</ListItem>
                      <ListItem>Adaptable layouts</ListItem>
                      <ListItem>Only show what is necessary at any given time</ListItem>
                      <ListItem>Eliminate error states, the user is never wrong</ListItem>
                    </List>
                  </PageContainer>
                </div>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <p className={cnames(styles.heading, styles.displayFour)}>Solution</p>
                    <p>We iterated on, and validated our <a className={styles.textLink} href="https://s.codepen.io/marchamm/debug/db072c27e8fae842076c7d773972d1b6" target="_blank" rel="noopener noreferrer">Mobile prototype</a>. And after experimenting with new features, our solution included:</p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>A colour picker that is always in view</ListItem>
                      <ListItem>Prompting user to select size instead of error states</ListItem>
                      <ListItem>Compact card modules that fit within the viewport</ListItem>
                      <ListItem>Sticky add to card header to encourage more discovery</ListItem>
                      <ListItem>New content hierarchy</ListItem>
                    </List>
                  </PageContainer>
                  <div className={styles.imageGallery}>
                    <video preload="true" loop playsInline controls muted poster={productpageimg}>
                      <source src={productpage} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </Element>
            <Element name="pp-outcome" className={styles.step}>
              <Indicator to="pp-outcome" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <PageContainer size="SMALL" left>
                  <Element name="outcome">
                    <div className={styles.displayTwo}>Outcomes</div>
                  </Element>
                  <List strong progress className={styles.displayBodySmall}>
                    <ListItem>MVP saw record increases in conversion and ATC</ListItem>
                    <ListItem>New platform is adopted across the organisation</ListItem>
                    <ListItem>Defined visual language</ListItem>
                    <ListItem>Modular thinking lead to new initiatives like a Design System</ListItem>
                  </List>
                </PageContainer>
                <div className={styles.splash}>
                  <img src={splash} alt="designs"/>
                </div>
              </div>
            </Element>
          </div>
        </PageContainer>
      </React.Fragment>
    )
  }
};

export default ProductPage
