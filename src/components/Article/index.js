import React from 'react';
import styles from './Article.module.scss';

const Article = ({children}) => {
  return (
    <div className={styles.article}>
      { children }
    </div>
  )
}

export default Article;
