import React, { Component } from 'react';
import cnames from 'classnames';
import PageContainer from '../../components/PageContainer';
import Label from '../Label';
import List, { ListItem } from '../List';
import styles from './Footer.module.scss';
import '../../styles/utils.module.scss';


class Footer extends Component {

  render() {
    return (
      <div className={styles.footerSection}>
        <div className={cnames(styles.spLarge)}>
          <PageContainer style={{ position: 'relative' }}>
            <Label title="Social" inverted />
            <List strong>
              <ListItem><a href="https://codepen.io/marchamm/" className={styles.textLink} target="_blank" rel="noopener noreferrer">Codepen</a></ListItem>
              <ListItem><a href="https://github.com/marchamm/" className={styles.textLink} target="_blank" rel="noopener noreferrer">GitHub</a></ListItem>
              <ListItem><a href="https://dribbble.com/marcushammarstedt" className={styles.textLink} target="_blank" rel="noopener noreferrer">Dribble</a></ListItem>
              <ListItem><a href="https://www.linkedin.com/in/marcushammarstedt" className={styles.textLink} target="_blank" rel="noopener noreferrer">LinkedIn</a></ListItem>
            </List>
            <Label title="Thanks" inverted />
            <List strong>
              <ListItem><a href="http://matthew.wagerfield.com/parallax/" className={styles.textLink} target="_blank" rel="noopener noreferrer">Parallax</a> <span style={{ fontWeight: 'normal' }}>for the gyro plugin used at the top.</span></ListItem>
            </List>
            <Label title="About" inverted />
            <List>
              <ListItem>A Swede living permanently in Australia.</ListItem>
              <ListItem>On weekends you're likely to find me on a mountain or in the ocean.</ListItem>
              <ListItem>Been designing and developing since the age of 13.</ListItem>
            </List>
          </PageContainer>
        </div>
      </div>
    );
  }
}

export default Footer;
