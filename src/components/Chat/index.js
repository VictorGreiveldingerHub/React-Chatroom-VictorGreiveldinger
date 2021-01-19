import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import './styles.scss';

const Chat = () => {
    const msgs = useSelector((state) => state.messages);
    const chatJSX = msgs.map((msg) => {
        return (
            <div
                key={msg.id}
                className="chat-section"
            >{msg.author} : {msg.content}
            </div>
        );
    });
    return (
        <div id="chat">
            {chatJSX}
            <input
                placeholder="Votre message"
                className="input-chat"
            />
            <button
                type="button"
                className="button-chat"
            >Envoyer</button>
        </div>
    );
};

export default Chat;