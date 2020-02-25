import React, { Component } from 'react';
import s from './HeaderBar.module.css';
import Header from './header/Header';
import Menu from './menu/Menu';
import DeskTopMenu from './desktop-menu/DeskTopMenu';




class HeaderBar extends Component {
    render() {
        return (
            <div className={s.headerbar}>
               <div className={s.mobile}>
                    <Header/>
                    <Menu/>
               </div>
               <div className={s.desktop}>
                    <DeskTopMenu/>
               </div>
            </div>
        );
    }
}

export default HeaderBar;
