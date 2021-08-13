import React from 'react';
import { Link } from 'react-router-dom';

import "./style.scss";

function Utility() {
  return (
    <>
      <ul className="util-container">
        <li className="util-item">
          <Link className="util-nav" to="/profile">
            <div className="util-icon">
              <img className="rounded-circle" src="/images/default-user.png" alt="" />
            </div>
            <div className="util-name">
              <div className="util-name-main">
                Phạm Anh Tú
              </div>
            </div>
          </Link>
        </li>
        <li className="util-item">
          <Link className="util-nav" to="/friends">
            <div className="util-icon">
              <img src="/images/icons/friends.png" alt="" />
            </div>
            <div className="util-name">
              <div className="util-name-main">
                Friends
              </div>
              <div className="util-name-sub text-secondary">
                5+ new
              </div>
            </div>
          </Link>
        </li>
        <li className="util-item">
          <Link className="util-nav" to="/notification">
            <div className="util-icon">
              <img src="/images/icons/bell.png" alt="" />
            </div>
            <div className="util-name">
              <div className="util-name-main">
                Notification
              </div>
              <div className="util-name-sub text-secondary">
                5+ new
              </div>
            </div>
          </Link>
        </li>
        <li className="util-item">
          <Link className="util-nav" to="/profile">
            <div className="util-icon">
              <img src="/images/icons/profile.png" alt="" />
            </div>
            <div className="util-name">
              <div className="util-name-main">
                Profile
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Utility;
