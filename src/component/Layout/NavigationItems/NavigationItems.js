import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
export const NavigationItems = () => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem link="/todoList" exact>
                ToDo
            </NavigationItem>

            <NavigationItem link="/" exact>
                HomePage
            </NavigationItem>
        </div>
    )
}

export default NavigationItems;
