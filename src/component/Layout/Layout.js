import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './Layout.module.css'

export const Layout = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.Nav}>
      <NavigationItems />

      </div>
      <main className={classes.main} >
        {props.children}
      </main>
    </div>
  )
}


export default Layout;