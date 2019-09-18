import React from 'react';
import cnames from 'classnames';
import styles from './PageContainer.module.scss';

const PageContainer = (props) => {

  const { children, size, left, right, padding, style, display } = props

  const classnames = cnames(styles.outer, {
    [styles.large]: size === 'LARGE',
    [styles.medium]: size === 'MEDIUM',
    [styles.small]: size === 'SMALL',
    [styles.left]: left,
    [styles.right]: right,
    [styles.padding]: padding,
    [styles.display]: display
  })

  return (
    <div className={classnames} style={style}>
      <div className={styles.inner}>
        { children }
      </div>
    </div>
  )
}

export default PageContainer;
