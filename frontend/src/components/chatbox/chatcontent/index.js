import React, {useState} from 'react'
import './style.scss'
import MessageChat from '../message'


export default function ChatContent() {
    return (
        <div className="content-container">
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="How are you today ?"></MessageChat>
            <MessageChat isMe={false} content="It's not bad, but there's a lot of work to be done"></MessageChat>
            <MessageChat isMe={true} content="Oh, can you speak Vietnamese ?"></MessageChat>
            <MessageChat isMe={false} content="OK"></MessageChat>
            <MessageChat isMe={true} content="Hey Tú, khỏe không :))"></MessageChat>
            <MessageChat isMe={false} content="Hey Trung, khỉ khô"></MessageChat>
            <MessageChat isMe={true} content="Hi"></MessageChat>
            <MessageChat isMe={false} content="Hello"></MessageChat>
            <MessageChat isMe={true} content="How are you today ?"></MessageChat>
            <MessageChat isMe={false} content="It's not bad, but there's a lot of work to be done"></MessageChat>
            <MessageChat isMe={true} content="Oh, can you speak Vietnamese ?"></MessageChat>
            <MessageChat isMe={false} content="OK"></MessageChat>
            <MessageChat isMe={true} content="Hey Tú, khỏe không :))"></MessageChat>
            <MessageChat isMe={false} content="Hey Trung, khỉ khô"></MessageChat>
        </div>
    )
}
