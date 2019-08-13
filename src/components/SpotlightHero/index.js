import React from 'react';
import cnames from 'classnames';
import PageContainer from '../PageContainer';
import styles from './SpotlightHero.module.scss';

const SpotlightHero = (props) =>  {
  const { title, caption, background, disclaimer } = props

  return (
    <div className={cnames(styles.hero)} style={{ backgroundImage: `url(${background})` }}>
      <PageContainer size="SMALL" padding>
        <div className={styles.displayOne}>{title}</div>
        <p className={styles.displayFive}>{caption}</p>
        <p className={cnames(styles.displayBodySmall, styles.muted)}><i>{disclaimer}</i></p>
      </PageContainer>
    </div>
  )
}

export default SpotlightHero;
