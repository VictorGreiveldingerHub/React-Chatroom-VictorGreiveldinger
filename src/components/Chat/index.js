import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const Chat = () => {
    const msgs = useSelector((state) => state.messages);
    const chatJSX = msgs.map((msg) => {
        return (
            <div key={msg.id}>{msg.author} : {msg.content}</div>
        );
    });
    return (
        <div id="chat">
            {chatJSX}
        </div>
    );
};

export default Chat;