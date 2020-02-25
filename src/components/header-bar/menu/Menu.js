import React from 'react';
import s from './Menu.module.css';
import { NavLink } from 'react-router-dom';


import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PlaceIcon from '@material-ui/icons/Place';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SchoolIcon from '@material-ui/icons/School';
import PanToolIcon from '@material-ui/icons/PanTool';
import MenuIcon from '@material-ui/icons/Menu';



import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };


    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >


            <List className={s.menuList}>
                <NavLink className={s.menuLink}to="/">
                    <ListItem className={s.menuItem} button key="Телесная терапия">
                        <ListItemIcon><AccessibilityNewIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="Телесная терапия" />
                    </ListItem>
                </NavLink>

                <NavLink className={s.menuLink}to="/history">
                    <ListItem className={s.menuItem} button key="Моя история">
                        <ListItemIcon><MenuBookIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="Моя история" />
                    </ListItem>
                </NavLink>

                <NavLink className={s.menuLink}to="/my-work">
                    <ListItem className={s.menuItem} button key="С чем я работаю">
                        <ListItemIcon><PanToolIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="С чем я работаю" />
                    </ListItem>
                </NavLink>

                <NavLink className={s.menuLink}to="/price">
                    <ListItem className={s.menuItem} button key="Стоимость">
                        <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="Стоимость" />
                    </ListItem>
                </NavLink>

                <NavLink className={s.menuLink}to="/certificates">
                    <ListItem className={s.menuItem} button key="Дипломы">
                        <ListItemIcon><SchoolIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="Дипломы" />
                    </ListItem>
                </NavLink>

                <NavLink className={s.menuLink}to="/media">
                    <ListItem className={s.menuItem} button key="Публикации">
                        <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="Публикации" />
                    </ListItem>
                </NavLink>

                <NavLink className={s.menuLink}to="/contacts">
                    <ListItem className={s.menuItem} button key="Контакты">
                        <ListItemIcon><PlaceIcon /></ListItemIcon>
                        <ListItemText className={s.menuItemName} primary="Контакты" />
                    </ListItem>
                </NavLink>

            </List>
        </div>
    );


    return (
        <div className={s.menu}>
            <div className={s.menuCall} variant="contained" color="primary" onClick={toggleDrawer('top', true)}>
                <div className={s.menuName}>Menu</div>
                <MenuIcon />
            </div>

            <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                {fullList('top')}
            </Drawer>
        </div>
    );
}





