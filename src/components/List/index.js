import React from 'react';
import cnames from 'classnames';
import styles from './List.module.scss';

const ListItem = ({ children }) => {
  return (
    <li>
      <span className={styles.bullet}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
          <g fill="currentColor" fillRule="evenodd">
            <rect width="32" height="4" y="11"/>
            <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)" />
            <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)" />
          </g>
        </svg>
      </span>
      { children }
    </li>
  )
}

const List = ({ children, strong, className }) => {
  const classNames = cnames(styles.customList, {
    [styles.strong]: strong,
    [className]: className,
  });

  return (
    <ul className={classNames}>
      { children }
    </ul>
  )
}

export { ListItem };
export default List;
