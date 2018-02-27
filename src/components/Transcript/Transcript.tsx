import * as React from 'react';
import {TranscriptData} from '../../interfaces/chatData';
import {Message} from '../Message/Message';
const styles = require('./Transcript.scss');
const offlineImg = require('./offline.jpg');
const classNames = require('classnames');

export interface TranscriptProps {
  reqUserId: string;
  transcript: TranscriptData[];
}

export const Transcript = (props: React.HTMLAttributes<HTMLDivElement> & TranscriptProps) => {
  const { reqUserId, transcript, className, ...other } = props;

  return (
    <div className={classNames(styles.wrapper, className)} {...other}>
      <div className={styles.transcript}>
        { !!transcript ?
          transcript.map(msg => <Message reqUserId={reqUserId} msg={msg} key={msg.date} className={classNames(styles.userMessage, { [styles.otherUser]: !!msg.id })} />) :
          <img className={styles.offlineImg} src={offlineImg} />
        }
      </div>
    </div>
  );
};
