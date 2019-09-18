import React from 'react';
import styles from './DisplaySplash.module.scss';

const DisplaySplash = ({images}) => {
  return (
    <div className={styles.displaySplash}>
      {
        images.map(image => (
          <div className={styles.displayItem}>
            <img src={image} />
          </div>
        ))
      }
    </div>
  )
}

export default DisplaySplash;
