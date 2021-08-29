import React, {useState} from 'react';
import Chatbox from "../../components/chatbox";
import CustomizeChat from "../../components/customizechat";
import ListChat from "../../components/listchat";

export default function Message() {
  const [message, setMessage] = useState(true)
  console.log(message)
  const handlemessage = (parameter) => {
    setMessage(parameter)
  }
  return (
    <div className="d-flex">
      <ListChat></ListChat>
      <Chatbox handlechatbox={handlemessage}></Chatbox>
      <CustomizeChat canopen={message}></CustomizeChat>
    </div>
  );
}
