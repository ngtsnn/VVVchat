import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

function Feed() {
  return (
    <>
      <div className="feed-container card shadow border-0 mb-2">
        <div className="feed-header card-header bg-white border-0">
          <div className="user-avatar mr-3">
            <img src="/images/default-user.png" alt="" />
          </div>
          <div className="user-info">
            <Link className="user-name" to="/profile">
              Phạm Anh Tú
            </Link>
            <div className="post-info"> 
              <div className="privacy-icon mr-2">
                <i className="bi bi-globe"></i>
              </div>
              <div className="post-time">
                2 hours ago
              </div>
            </div>
          </div>
        </div>
        <div className="feed-body card-body py-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit cupiditate dignissimos ducimus cum qui! Soluta cum delectus animi molestias libero saepe iusto excepturi, ab laborum ut exercitationem repellendus, quibusdam veritatis.</p>
        </div>
        <div className="feed-footer card-footer bg-white border-0">
          <div className="figure d-flex justify-content-between">
            <div className="likes">
              <i className="bi bi-hand-thumbs-up-fill mr-1"></i>
              10
            </div>
            <div className="rest">
              <span className="mr-1"> 10 comments </span>
              <span> 2 shares </span>
            </div>
          </div>
          <hr className="my-1"/>
          <div className="action-btns d-flex justify-content-between">
            <a href="#" className="action-btn d-block">
              <i className="bi bi-hand-thumbs-up-fill text-primary mr-1"></i>
              <span className="text-primary">like</span>
            </a>
            <a href="#" className="action-btn d-block">
              <i className="bi bi-card-text mr-1"></i>
              <span>comment</span>
            </a>
            <a href="#" className="action-btn d-block">
              <i className="bi bi-share mr-1"></i>
              <span>share</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed;
