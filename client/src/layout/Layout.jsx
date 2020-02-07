import React, { Fragment, useState } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../components/Footer/Footer';

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const handleSideDrawerClose = () => {
    setSideDrawerIsVisible(false);
  }

  const handleSideDrawerToggle = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  }

  return (
    <Fragment>
      <Toolbar
        drawerToggleClicked={ handleSideDrawerToggle } />
      />
      <SideDrawer
        open={ sideDrawerIsVisible }
        closed={ handleSideDrawerClose } />
      />

      <main className={ classes.container }>
        <div className={ classes.content }>
          { props.children }
        </div>
        <Footer />
      </main>
    </Fragment>
  )
}

export default Layout;