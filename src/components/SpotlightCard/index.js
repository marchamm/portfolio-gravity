import React from 'react';
import { Link } from 'react-router-dom';
import cnames from 'classnames';
import Label from '../Label';
import styles from './SpotlightCard.module.scss';

const SpotlightCard = (props) => {

  const { to, label, title, description, cta, image, external, ...rest } = props

  return (
    <React.Fragment>
      { external ? (
        <a href={to} className={cnames(styles.content, styles.interactive, styles.productPage)} {...rest}>
          <div className={styles.body}>
            <Label title={label} />
            <p className={cnames(styles.lead, styles.displayFour)}><strong>{title}</strong></p>
            <p>{description}</p>
            <div className={cnames(cnames(styles.cta, styles.displayFour), styles.displayFour)}>{cta}
              <span className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                  <g fill="currentColor" fillRule="evenodd">
                    <rect width="32" height="4" y="11"/>
                    <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                    <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.preview} style={{backgroundImage: `url(${image})`}}/>
        </a>

      ) : (
        <Link to={to} className={cnames(styles.content, styles.interactive, styles.productPage)}>
          <div className={styles.body}>
            <Label title={label} />
            <p className={cnames(styles.lead, styles.displayFour)}><strong>{title}</strong></p>
            <p>{description}</p>
            <div className={cnames(cnames(styles.cta, styles.displayFour), styles.displayFour)}>{cta}
              <span className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
                  <g fill="currentColor" fillRule="evenodd">
                    <rect width="32" height="4" y="11"/>
                    <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)"/>
                    <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)"/>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.preview} style={{backgroundImage: `url(${image})`}}/>
        </Link>
      )}
    </React.Fragment>
  )
}

export default SpotlightCard;
