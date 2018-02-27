
import * as React from 'react';
import {ChatData} from '../../interfaces/chatData';
import {ToolbarButton} from '../ToolbarButton/ToolbarButton';
import {toAppDate} from '../utils/dateUtils';
import * as Modal from 'react-modal';
const map = require("./map.png");
const page = require("./page.png");
const styles = require('./ChatToolbar.scss');
const classNames = require('classnames');

export interface ChatToolbarProps {
  chat: ChatData;
}

export interface ChatToolbarState {
  modalIsOpen: boolean;
}

export class ChatToolbar extends React.Component<React.HTMLAttributes<HTMLDivElement> & ChatToolbarProps, ChatToolbarState> {

  constructor(p, c) {
    super(p, c);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { chat, className, ...other } = this.props;

    const customStyles = {
      content : {

      }
    };

    // TODO - snapengage test api key, remove after code review completion
    const googleMapsApiKey = "AIzaSyARcBlBETWUWWg4iCsDVruGjgawpE9VCYo";

    const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&zoom=16&center=${chat.latitude},${chat.longitude}`;
    const notAvailable = "N/A";

    return (
      <div className={classNames(styles.toolbar, className)} {...other}>
        <ToolbarButton onClick={this.openModal}><img src={map}/>Show on map</ToolbarButton>
        <ToolbarButton onClick={() => window.open(chat.page_url)}><img src={page}/>Open page url</ToolbarButton>
        <div className={styles.chatInfo}>
          <span>IP: {chat.ip_address}</span>
          <span>User ID: {chat.requested_by}</span>
          <span>Survey score: {chat.survey_score || notAvailable}</span>
        </div>
        <div className={styles.chatInfo}>
          <span>Duration: {!!chat.chat_duration ? <span>{chat.chat_duration} sec</span> : notAvailable}</span>
          <span>Started at: {toAppDate(chat.created_at)}</span>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          className={styles.modal}
        >
          <iframe className={styles.mapFrame} src={mapUrl} />
        </Modal>
      </div>
    );
  }
}
