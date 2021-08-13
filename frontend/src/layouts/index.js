import React from 'react';
import { Route } from 'react-router-dom';

function AppRoute({Layout, Page, ...rest}) {
  return (
    <>
      <Route 
        {...rest} 
        render={(props) => <Layout>
          <Page {...props}></Page>
        </Layout>}
      ></Route>
    </>
  )
}

export default AppRoute;
