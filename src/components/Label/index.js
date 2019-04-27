import React from 'react';
import cnames from 'classnames';
import styles from './Label.module.scss';

const Label = (props) => {

  const { title, inverted } = props

  const classnames = cnames(styles.label, {
    [styles.inverted]: inverted,
  })

  return (
    <div className={cnames(classnames, styles.displayBodyXSmall)}>{title}</div>
  )
}

export default Label;
