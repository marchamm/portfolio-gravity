import React from 'react';
import cnames from 'classnames';
import styles from './PageContainer.module.scss';

const PageContainer = (props) => {

  const { children, size, left, right, padding, style } = props

  const classnames = cnames(styles.container, {
    [styles.large]: size === 'LARGE',
    [styles.medium]: size === 'MEDIUM',
    [styles.small]: size === 'SMALL',
    [styles.left]: left,
    [styles.right]: right,
    [styles.padding]: padding,
  })

  return (
    <div className={classnames} style={style}>
      { children }
    </div>
  )
}

export default PageContainer;
