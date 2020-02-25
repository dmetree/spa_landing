import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import s from './FAB.module.css';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FABs() {
    const classes = useStyles();

    let action = 'mailto:';
    let name = 'rusovlaska';
    let where = '@yandex.ru';
    let address = action + name + where;

    return (
        <div id={s.FAB} className={classes.root}>
           
            <div className={s.FABcircle}>
                <a href={address}><EditIcon className={s.editIcon}/></a>
            </div>
           
        </div>
    );
}