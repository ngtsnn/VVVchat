import React from 'react';
import HeaderBox from './chatboxheader';
import ChatContent from './chatcontent';
import InputChat from './inputchat';

function Chatbox(props) {
  const {handlechatbox} = props
  console.log(handlechatbox)
  return (
    <div className="w-100">
      <HeaderBox handletoggle = {handlechatbox}></HeaderBox>
      <ChatContent></ChatContent>
      <InputChat></InputChat>
    </div>
  )
}

export default Chatbox;
