import React from 'react';
import cnames from 'classnames';
import PageContainer from '../PageContainer';
import styles from './SpotlightHero.module.scss';

const SpotlightHero = (props) =>  {
  const { title, caption, disclaimer } = props

  return (
    <div className={cnames(styles.hero)}>
      <PageContainer size="SMALL" padding>
        <h1 className={styles.displayOne}>{title}</h1>
        <p className={styles.displayFive}>{caption}</p>
        <p className={cnames(styles.displayBodySmall, styles.muted)}><i>{disclaimer}</i></p>
      </PageContainer>
    </div>
  )
}

export default SpotlightHero;
