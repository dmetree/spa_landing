import React, { Component } from 'react';
import s from './DeskTopMenu.module.css';
import { NavLink } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';


class DeskTopMenu extends Component {
    render() {
        return (
            <div className={s.headerbar}>
               <div className={s.menuWrapper}>
                    <NavLink className={s.menuLink} to="/">
                        <ListItem className={s.menuItem} button key="Телесная терапия">
                            <ListItemText className={s.menuItemName} primary="Телесная терапия" />
                        </ListItem>
                    </NavLink>
                    <NavLink className={s.menuLink} to="/history">
                        <ListItem className={s.menuItem} button key="Моя история">
                            <ListItemText className={s.menuItemName} primary="Моя история" />
                        </ListItem>
                    </NavLink>

                    <NavLink className={s.menuLink} to="/my-work">
                        <ListItem className={s.menuItem} button key="С чем я работаю">
                            <ListItemText className={s.menuItemName} primary="С чем я работаю" />
                        </ListItem>
                    </NavLink>

                    <NavLink className={s.menuLink} to="/price">
                        <ListItem className={s.menuItem} button key="Стоимость">
                            <ListItemText className={s.menuItemName} primary="Стоимость" />
                        </ListItem>
                    </NavLink>

                    <NavLink className={s.menuLink} to="/certificates">
                        <ListItem className={s.menuItem} button key="Дипломы">
                            <ListItemText className={s.menuItemName} primary="Дипломы" />
                        </ListItem>
                    </NavLink>

                    <NavLink className={s.menuLink} to="/media">
                        <ListItem className={s.menuItem} button key="Публикации">
                            <ListItemText className={s.menuItemName} primary="Публикации" />
                        </ListItem>
                    </NavLink>

                    <NavLink className={s.menuLink} to="/contacts">
                        <ListItem className={s.menuItem} button key="Контакты">
                            <ListItemText className={s.menuItemName} primary="Контакты" />
                        </ListItem>
                    </NavLink>
               </div>
               
            </div>
        );
    }
}

export default DeskTopMenu;
