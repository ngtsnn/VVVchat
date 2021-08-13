import React from 'react';

import Header from '../components/header/';
import Utility from '../components/utility';
import Online from '../components/online';


import "./style.scss"

function MainLayout({children}) {
  return (
    <>
      <Header></Header>
      <div className="d-flex justify-content-between app-body">
        <div className="left-side d-md-block d-none">
          <Utility></Utility>
        </div>


        <main>
          {children}
        </main>


        <div className="right-side d-lg-block d-none">
          <Online></Online>
        </div>
      </div>
    </>
  )
}

export default MainLayout;
