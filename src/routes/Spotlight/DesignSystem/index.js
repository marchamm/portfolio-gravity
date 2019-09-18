import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import cnames from 'classnames';
import styles from './DesignSystem.module.scss';
import List, { ListItem } from '../../../components/List';
import PageContainer from '../../../components/PageContainer';
import SpotlightHero from '../../../components/SpotlightHero';
import distributionModel from './images/distributionModel.svg';
import centralizedModel from './images/centralizedModel.svg';
import collaborativeModel from './images/collaborativeModel.svg';

class Indicator extends Component {
  handleSetActive(to) {
    let e = document.getElementsByName(to);
    e[0].classList.add(styles.active);
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

  render () {
    const scrollOffset = -40;

    return (
      <React.Fragment>
        <SpotlightHero
          title="Design System"
          caption="Unite product teams around a shared visual language and empower them to create scalable, high-quality products."
          disclaimer="Some values have been obscured for confidentiality purposes"
        />
        <PageContainer size="LARGE">
          <div className={cnames(styles.process, styles.spMedium)}>
            <Element name="intro" className={styles.step}>
              <Indicator to="intro" />
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <Link className={styles.scrollLink} to="overview" smooth offset={scrollOffset}>Overview</Link>
                <Link className={styles.scrollLink} to="background" smooth offset={scrollOffset}>Background</Link>
                <Link className={styles.scrollLink} to="strategy" smooth offset={scrollOffset}>Strategy</Link>
                <Link className={styles.scrollLink} to="newstrategy" smooth offset={scrollOffset}>New strategy</Link>
                <Link className={styles.scrollLink} to="current" smooth offset={scrollOffset}>Current</Link>
              </div>
            </Element>
            <Element name="overview" className={styles.step}>
              <Indicator to="overview" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <PageContainer size="SMALL" left>
                  <div className={styles.displayTwo}>Overview</div>
                  <p>This case study will talk to the process of establishing and maintaining the Redbubble Design System.</p>
                  <p>It's been hard and rewarding work. From getting the business to buy in to the idea, getting dedicated resources, proving the value and getting people to adopt the system.</p>
                  <p>This case study will focus on the time from getting those dedicated resources and giving it our full attention.</p>
                </PageContainer>
              </div>
            </Element>
            <Element name="background" className={styles.step}>
              <Indicator to="background" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <div className={styles.displayTwo}>Background</div>
                    <p>Thanks to our work on <RouterLink to="/spotlight/product-page" className={styles.textLink}>a new product page</RouterLink> we had already started setting up parts of our design system. This gave us a great starting point with:</p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>3 Components</ListItem>
                      <ListItem>Distribution via NPM</ListItem>
                      <ListItem>An average adoption rate of 2%</ListItem>
                    </List>
                  </PageContainer>
                </div>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <p>With the above in place, we set out to answer the question:</p>
                    <p><strong> How might we quickly grow a centralized system of foundational styles, components and guidelines</strong>.</p>
                  </PageContainer>
                </div>
              </div>
            </Element>
            <Element name="strategy" className={styles.step}>
              <Indicator to="strategy" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>

                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <div className={styles.displayTwo}>Strategy</div>
                    <p>Focus on <strong>contributions</strong> from other teams by defining processes and running workshops.</p>
                    <p>With the above strategy we ran, and setup:</p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>System workshops</ListItem>
                      <ListItem>Atomic design workshops</ListItem>
                      <ListItem>Contribution guidelines</ListItem>
                      <ListItem>Request For Comment (RFC) Process</ListItem>
                    </List>
                  </PageContainer>
                  <div className={styles.imageGallery}>
                    <img src={distributionModel} alt="operation model, distributed"/>
                  </div>
                </div>
                <PageContainer size="SMALL" left>
                  <div className={cnames(styles.displayFour, styles.heading)}>What we learnt</div>
                  <p>People weren’t as excited as we were... Change is challenging and the value of the System is hard to just imagine.</p>
                  <List strong className={styles.displayBodySmall}>
                    <ListItem>Process caused friction</ListItem>
                    <ListItem>Teams did not see a return on their investment</ListItem>
                    <ListItem>People had different perceptions of what a Design System was</ListItem>
                  </List>
                </PageContainer>
              </div>
            </Element>
            <Element name="newstrategy" className={styles.step}>
              <Indicator to="newstrategy" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <div className={styles.displayTwo}>New strategy</div>
                    <p>Focus on <strong>adoption</strong> by working closely with teams, on flagship products, and build components in the system before they need them.</p>
                    <List strong className={styles.displayBodySmall}>
                      <ListItem>Paired with design & engineering</ListItem>
                      <ListItem>Planned based on team roadmaps</ListItem>
                      <ListItem>Surveys every 2 weeks</ListItem>
                    </List>
                  </PageContainer>
                  <div className={styles.imageGallery}>
                    <img src={centralizedModel} alt="operating model, centralized"/>
                  </div>
                </div>
                <PageContainer size="SMALL" left>
                  <div className={cnames(styles.displayFour, styles.heading)}>What we learnt</div>
                  <p>We grew our component library, increased adoption and maintained a high level of customer satisfaction.</p>
                  <List strong className={styles.displayBodySmall}>
                    <ListItem>12 components in 12 weeks</ListItem>
                    <ListItem>Adoption from 0% to ~50%</ListItem>
                    <ListItem>Customer satisfaction of ~8.5/10</ListItem>
                  </List>
                </PageContainer>
              </div>
            </Element>
            <Element name="current" className={styles.step}>
              <Indicator to="current" onSetActive={this.handleSetActive}/>
              <div className={cnames(styles.spMedium, styles.spHorisontal, styles.stepContent)}>
                <div className={styles.displayRow}>
                  <PageContainer size="SMALL" left>
                    <div className={styles.displayTwo}>Current</div>
                    <p>We keep focusing on adoption and ensuring that we build the right things.</p>
                    <p>We're evolving our visual language and starting to see more contributions from other teams and individuals.</p>
                    <div className={cnames(styles.heading, styles.displayFour)}>Check it out</div>
                    <a href="https://redbubble.design" target="_blank" rel="noopener noreferrer" className={styles.textLink}>https://redbubble.design</a>
                  </PageContainer>
                  <div className={styles.imageGallery}>
                    <img src={collaborativeModel} alt="operating model, collaborative"/>
                  </div>
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
