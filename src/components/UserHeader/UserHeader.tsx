import * as React from 'react';
import {User} from '../../interfaces/user';
import {profilePics} from '../../data/profilePics';
const styles = require('./UserHeader.scss');
const classNames = require('classnames');

export interface UserHeaderProps {
  user: User;
}

export const UserHeader = (props: React.HTMLAttributes<HTMLDivElement> & UserHeaderProps) => {
  const { user, className, ...other } = props;

  const alias = user.chats && user.chats[0] && user.chats[0].transcript && user.chats[0].transcript[0] ?
    user.chats[0].transcript[0].alias : user.id;

  return (
    <div className={classNames(styles.header, className)} {...other}>
      <img className={styles.img} src={profilePics[user.id]} />
      <span>{alias}</span>
      </div>
  );
};
