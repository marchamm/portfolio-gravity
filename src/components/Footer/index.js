import React, { Component } from 'react';
import cnames from 'classnames';
import PageContainer from '../../components/PageContainer';
import Label from '../Label';
import styles from './Footer.module.scss';
import '../../styles/utils.module.scss';


class Footer extends Component {

  render() {
    return (
      <div className={cnames(styles.footerSection, styles.spLarge)}>
        <PageContainer style={{ position: 'relative' }}>
          <Label title="Social" inverted />
          <ul>
            <li><a href="https://codepen.io/marchamm/" target="_blank">Codepen</a></li>
            <li><a href="https://github.com/marchamm/" target="_blank">GitHub</a></li>
            <li><a href="https://dribbble.com/marcushammarstedt" target="_blank">Dribble</a></li>
            <li><a href="https://www.linkedin.com/in/marcushammarstedt" target="_blank">LinkedIn</a></li>
          </ul>
          <Label title="Kudos" inverted />
          <ul>
            <li><strong><a href="http://matthew.wagerfield.com/parallax/" target="_blank">Parallax</a></strong> for the gyro plugin used at the top.</li>
            <li><strong><a href="https://github.com/marchamm/burst-animation" target="_blank">Burst</a></strong> for funky burst animations when clicking the waving emoji at the top.</li>
          </ul>
          <Label title="About" inverted />
          <ul>
            <li>A Swede living permanently in Australia.</li>
            <li>On weekends you're likely to find me on a mountain or in the ocean.</li>
            <li>Been designing and developing since the age of 13.</li>
          </ul>
        </PageContainer>
      </div>
    );
  }
}

export default Footer;
