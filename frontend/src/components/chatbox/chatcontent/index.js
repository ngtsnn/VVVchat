import React, {useState} from 'react'
import './style.scss'
import MessageChat from '../message'


export default function ChatContent() {
    return (
        <div className="content-container">
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Helloasdddddddadddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddd"></MessageChat>
        </div>
    )
}
