import {ChatData} from './chatData';

export interface User {
  id: string;
  chats: ChatData[];
}