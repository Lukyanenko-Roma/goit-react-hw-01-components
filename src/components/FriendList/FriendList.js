import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendsListItem = ({ avatar, name, isOnline, id }) => {
    
    const statusClassName = isOnline ? styles.statusOnline : styles.statusOffline;

    return (
    <li key={id} className={styles.item}>
  <span className={statusClassName}></span>
  <img className={styles.avatar} src={avatar} alt={name} width="48" />
  <p className={styles.name}>{name}</p>
        </li>
    )
}

const FriendList = ({ friends }) => {
    if ( friends.lenght === 0) return null
    return (
    <ul className={styles.friend_list}>
            {friends.map(FriendsListItem)}
        </ul>
    )
    
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;