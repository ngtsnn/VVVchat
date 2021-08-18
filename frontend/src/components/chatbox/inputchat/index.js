import React from 'react';
import './style.scss';
import {MdPhotoLibrary, MdSend} from "react-icons/md";
import {SiIconify} from "react-icons/si";
import {AiOutlineGif, AiFillPlusCircle} from "react-icons/ai"

export default function InputChat() {
    return (
        <div className="input-container">
            <div className="toolinput">
                <button className="toolbtn"><AiFillPlusCircle className="toolicon"></AiFillPlusCircle></button>
                <button className="toolbtn"><MdPhotoLibrary className="toolicon"></MdPhotoLibrary></button>
                <button className="toolbtn"><SiIconify className="toolicon"></SiIconify></button>
                <button className="toolbtn"><AiOutlineGif className="toolicon"></AiOutlineGif></button>
            </div>
            <div className="inputcontent">
                <input type="text" name="input" placeholder="tin nhắn" className="input"/>
            </div>

            <div className="btnsend">
                <button className="send"><MdSend className="iconsend"></MdSend></button>
            </div>
        </div>
    )
}
