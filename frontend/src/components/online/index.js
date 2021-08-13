import React from 'react';
import { Link } from 'react-router-dom';

import "./style.scss";

function Online() {
  return (
    <>
      <ul className="online-container">
        <li className="online-item">
          <Link className="online-nav" to="/profile">
            <div className="online-icon">
              <img className="rounded-circle" src="/images/default-user.png" alt="" />
            </div>
            <div className="online-name">
              <div className="online-name-main">
                Phạm Anh Tú
              </div>
              <div className="online-name-sub">
                <div className="dot bg-success mr-2"></div>
                <span>Active</span>
              </div>
            </div>
          </Link>
        </li>
        <li className="online-item">
          <Link className="online-nav" to="/profile">
            <div className="online-icon">
              <img className="rounded-circle" src="/images/default-user.png" alt="" />
            </div>
            <div className="online-name">
              <div className="online-name-main">
                Who Knows
              </div>
              <div className="online-name-sub">
                <div className="dot bg-warning mr-2"></div>
                <span>Idle</span>
              </div>
            </div>
          </Link>
        </li>
        <li className="online-item">
          <Link className="online-nav" to="/profile">
            <div className="online-icon">
              <img className="rounded-circle" src="/images/default-user.png" alt="" />
            </div>
            <div className="online-name">
              <div className="online-name-main">
                Thảo Vy
              </div>
              <div className="online-name-sub">
                <div className="dot bg-secondary mr-2"></div>
                <span>Offline</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Online;
