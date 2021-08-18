import React from 'react';
import HeaderBox from './chatboxheader';
import ChatContent from './chatcontent';
import InputChat from './inputchat';

function Chatbox() {
  
  return (
    <>
      <HeaderBox></HeaderBox>
      <ChatContent></ChatContent>
      <InputChat></InputChat>
    </>
  )
}

export default Chatbox;
