import React from 'react';
import {FiMoreHorizontal} from "react-icons/fi";
import { Link } from 'react-router-dom';
import {BiVideoPlus, BiCommentAdd} from "react-icons/bi";
import './style.scss'

export default function ListChat() {
    return (
        <div className="listchat-container">
            <div className="listchat-header d-flex">
                <div className="avatar">
                    <img className="img" src="/Logo/logo.png"></img>
                </div>
                <div className="name">VVV Social Chat</div>
                <div className="btn">
                    <button className="btn-icon">
                        <FiMoreHorizontal className="icon"></FiMoreHorizontal>
                    </button>
                    <button className="btn-icon">
                        <BiVideoPlus className="icon"></BiVideoPlus>
                    </button>
                    <button className="btn-icon">
                        <BiCommentAdd className="icon"></BiCommentAdd>
                    </button>
                </div>
            </div>

            <div className="search">
                <input className="inputsearch" placeholder="Search Messages" />
            </div>
            <div className="listchat">
                <Link className="messagestag d-flex active">
                    <div className="avatar-message">
                        <img className="img-avatar" src="/images/default-user.png"></img>
                    </div>
                    <div className="info-message">
                        <div className="name-message">Phạm Anh Tú</div>
                        <div className="last-message">Hello</div>
                    </div>
                </Link>

                <Link className="messagestag d-flex">
                    <div className="avatar-message">
                        <img className="img-avatar" src="/images/default-user.png"></img>
                    </div>
                    <div className="info-message">
                        <div className="name-message">Người nào đó</div>
                        <div className="last-message">Hello</div>
                    </div>
                </Link>

                <Link className="messagestag d-flex">
                    <div className="avatar-message">
                        <img className="img-avatar" src="/images/default-user.png"></img>
                    </div>
                    <div className="info-message">
                        <div className="name-message">Người nào đó</div>
                        <div className="last-message">Hello</div>
                    </div>
                </Link>

                <Link className="messagestag d-flex">
                    <div className="avatar-message">
                        <img className="img-avatar" src="/images/default-user.png"></img>
                    </div>
                    <div className="info-message">
                        <div className="name-message">Người nào đó</div>
                        <div className="last-message">Hello</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
