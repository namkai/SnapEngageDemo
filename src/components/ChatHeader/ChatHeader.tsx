import * as React from 'react';
import {ChatData} from '../../interfaces/chatData';
const styles = require('./ChatHeader.scss');
const classNames = require('classnames');

export interface ChatHeaderProps {
  chat: ChatData;
}

export const ChatHeader = (props: React.HTMLAttributes<HTMLDivElement> & ChatHeaderProps) => {
  const { chat, className, ...other } = props;
  return (
    <div className={classNames(styles.header, className, {[styles.offlineChat]: chat.type === "offline"})} title={chat.initial_message} {...other}>
      {chat.initial_message}
    </div>
  );
};
