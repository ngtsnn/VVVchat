import React, {useState} from "react";
import { Link } from "react-router-dom";
import {BiPhoneCall, BiVideo} from "react-icons/bi";
import {IoInformationCircleOutline} from "react-icons/io5";
import './style.scss'

export default function HeaderBox(props) {
    const [toggle, setToggle] = useState(true)
    const handleclick = () => {
        setToggle(!toggle)
        props.handletoggle(toggle)
    }
  return (
    <div className= "chatbox-container">
        <div className="user half-w">
            <div className="userAva">
                <img className="img" src="/images/default-user.png" alt="avatar of user" />
            </div>
            <div className="userInfo">
                <Link className="userName" to="/profile">
                    Phạm Anh Tú
                </Link>
                <div className="timeOnl">Active 15m ago</div>
            </div>
        </div>
        <div className="optionalBtn half-w">
            <button onClick={handleclick} className="icon-btn"><IoInformationCircleOutline className="icon"></IoInformationCircleOutline></button>
            <button className="icon-btn"><BiVideo className="icon"></BiVideo></button>
            <button className="icon-btn"><BiPhoneCall className="icon"></BiPhoneCall></button>
        </div>
    </div>
  );
}
