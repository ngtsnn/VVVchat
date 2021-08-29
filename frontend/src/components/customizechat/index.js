import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"
import './style.scss'

export default function CustomizeChat(props) {
    const [openprivacy, setOpenprivacy] = useState(false)
    const [opencustomchat, setOpencustomchat] = useState(false)

    const handlebtnprivacy = (e) => {
        setOpenprivacy(!openprivacy)
    }
    const handlebtncustomchat = (e) => {
        setOpencustomchat(!opencustomchat)
    }
    return (
        <div className={props.canopen ? "customize-container":"d-none"}>
            <div className="avatar">
                <img className="img" src="/images/default-user.png" />
            </div>
            <Link className="btn-name"> <span className="name"> Phạm Anh Tú </span></Link>

            <div className="list-customize">
                <button onClick={handlebtncustomchat} className="btn-custom">
                    <span className="name-customize">Customize Chat</span> 
                    {opencustomchat ? <MdKeyboardArrowUp className="icontoggle"/> : <MdKeyboardArrowDown className="icontoggle"/>}
                </button>
                <div className= {opencustomchat ? "list-option" : "d-none"}>
                    <button className="btn-option">Change Theme</button>
                    <button className="btn-option">Changhe Emoji</button>
                    <button className="btn-option">Edit Nicknames</button>
                </div>
            </div>

            <div className="list-customize">
                <button onClick={handlebtnprivacy} className="btn-custom">
                    <span className="name-customize">Privacy & Support </span>
                    {openprivacy ? <MdKeyboardArrowUp className="icontoggle"/> : <MdKeyboardArrowDown className="icontoggle"/>}
                </button>
                <div className= {openprivacy ? "list-option" : "d-none"}>
                    <button className="btn-option">Mute Conversation</button>
                    <button className="btn-option">Ignore Messages</button>
                    <button className="btn-option">Block</button>
                </div>
            </div>

            <div className="list-customize">
                <button className="btn-custom"><span className="name-customize">Shared Files</span> <MdKeyboardArrowDown className="icontoggle"/></button>
                
            </div>

            <div className="list-customize">
                <button className="btn-custom"><span className="name-customize">Shared Media</span> <MdKeyboardArrowDown className="icontoggle"/></button>
                
            </div>
        </div>
    )
}
