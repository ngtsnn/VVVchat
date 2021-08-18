import React from "react";
import './style.scss'

export default function MessageChat({ isMe, content }) {
    console.log({content})
  return (
    <div className="message-container">
      <div className ="avatar">
        <img src="/images/default-user.png" className = { !isMe ? "img" : "none"}></img>
      </div>
      <div className = { isMe ? "messagecontentme" : "messagecontentyou"} content={content}>
        {content}
      </div>
    </div>
  );    
}
