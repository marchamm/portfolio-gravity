import React from 'react';
import cnames from 'classnames';
import styles from './List.module.scss';

const ListItem = ({ item, progress }) => {
  return (
    <li>
      <span className={cnames(styles.bullet, progress && [styles.progress])}>
        { progress ? (
          <div className={styles.progressIndicator} />
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26">
            <g fill="currentColor" fillRule="evenodd">
              <rect width="32" height="4" y="11"/>
              <rect width="18" height="4" x="19.071" y="6.071" transform="rotate(45 28.071 8.071)" />
              <rect width="18" height="4" x="19.071" y="16.071" transform="rotate(-45 28.071 18.071)" />
            </g>
          </svg>
        )}
      </span>
      { item }
    </li>
  )
}

const List = ({ children, strong, progress, className }) => {
  const classNames = cnames(styles.customList, {
    [styles.strong]: strong,
    [styles.progressList]: progress,
    [className]: className,
  });

  const listItems = React.Children.toArray(children);

  return (
    <ul className={classNames}>
      { listItems.map((item, i) => <ListItem item={item.props.children} progress={progress} key={i} />) }
    </ul>
  )
}

export { ListItem };
export default List;
