import React, { useEffect, useRef, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import "./style.scss";

function Header() {

  const headerRef = useRef(null);
  const url = useLocation().pathname;

  useEffect(() => {

    // Sticky header
    const header = headerRef.current;
    let lastScrollTop = 0;

    const MakeSticky = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 100) {
        header.classList.add("sticky");
        if (st > lastScrollTop) {
          // upscroll 
          header.classList.remove("both");
        } else {
          // downscroll 
          header.classList.add("both");
        }
      } else {
        header.classList.remove("sticky");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", MakeSticky);

    return () => {
      window.removeEventListener("scroll", MakeSticky)
    }
  }, []);

  return (
    <>
      <header className="header container-fluid shadow border-b-1" id="header" ref={headerRef}>
        <div className="header-main" id="header-main">
          <div className="logo-col">
            
            <Link to="/" className="brand-name">
              <img src="/Logo/logo.png" alt="" />
              <h1 className="d-sm-inline d-none">VVV Social</h1>
            </Link>
          </div>
          <div className="search-col">
            <form action="" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="search-bar">
                <input type="search" placeholder="Search" />
                <button type="submit"> <i className="bi bi-search text-primary"></i> </button>
              </div>
            </form>
          </div>
          <div className="account-col d-md-block d-none">
            <div className="d-flex justify-content-between">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" bsPrefix="icon-btn rounded-circle position-relative">
                  <i className="bi bi-people"></i>
                  <span className="badge badge-danger position-absolute rounded-lg">5+</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow border-0">
                  <Dropdown.Item href="#/action-1">Action  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" bsPrefix="icon-btn rounded-circle position-relative">
                  <i className="bi bi-chat"></i>
                  <span className="badge badge-danger position-absolute rounded-lg">5+</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow border-0">
                  <Dropdown.Item href="#/action-1">Action  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" bsPrefix="icon-btn rounded-circle position-relative">
                  <i className="bi bi-bell"></i>
                  <span className="badge badge-danger position-absolute rounded-lg">5+</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow border-0">
                  <Dropdown.Item href="#/action-1">Action  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle bsPrefix="user-img">
                  <img src="/images/default-user.png" alt=""/>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow border-0">
                  <Dropdown.Item href="#/action-1">Action  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

          </div>
        </div>
        <hr className="d-md-none"/>
        <div className="header-bottom d-md-none">
          <ul className="mobile-nav">
            <li className={(url === '/') ? "mobile-nav-item active" : "mobile-nav-item"}>
              <Link to="/">
                <i className="bi bi-house-door"></i>
              </Link>
            </li>
            <li className={(url === '/friends') ? "mobile-nav-item active" : "mobile-nav-item"}>
              <Link to="/friends">
                <i className="bi bi-person"></i>
              </Link>
            </li>
            <li className={(url === '/chats') ? "mobile-nav-item active" : "mobile-nav-item"}>
              <Link to="/chats">
                <i className="bi bi-chat"></i>
              </Link>
            </li>
            <li className={(url === '/notifications') ? "mobile-nav-item active" : "mobile-nav-item"}>
              <Link to="/notifications">
                <i className="bi bi-bell"></i>
              </Link>
            </li>
            <li className={(url === '/info') ? "mobile-nav-item active" : "mobile-nav-item"}>
              <Link to="/profile">
                <i className="bi bi-gear"></i>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
};

export default Header;
