import * as React from 'react';
import {TranscriptData} from '../../interfaces/chatData';
import {profilePics} from '../../data/profilePics';
import {toAppDate} from '../utils/dateUtils';
const styles = require('./Message.scss');
const classNames = require('classnames');

export interface MessageProps {
  reqUserId: string;
  msg: TranscriptData;
}

export const Message = (props: React.HTMLAttributes<HTMLDivElement> & MessageProps) => {
  const { reqUserId, msg, className, ...other } = props;
  return (
    <div className={classNames(styles.msg, className)} {...other}>
      <div className={styles.mainMsg}>
        <div className={styles.userInfo}>
          <img className={styles.profileImg} src={profilePics[msg.id || reqUserId]}/>
          {msg.alias}
        </div>
        {msg.message}
      </div>
      <div className={styles.dateTime}>{toAppDate(msg.date)}</div>
    </div>
  );
};
