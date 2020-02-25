import React, { Component } from 'react';
import s from './Subscription.module.css';


import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Subscription extends Component {
    render() {
        return (
            <div className={s.subscription}>
                <div className={s.form}>
                    <label htmlFor="fname">Имя</label>
                    <input type="text" className={s.fname} name="name" placeholder="Ваше имя.." />

                    <label htmlFor="femail">Email</label>
                    <input type="text" className={s.fsurname} name="email" placeholder="Ваш email.." />

                    <label htmlFor="reason">Причина обращения</label>
                    <select className={s.reason} name="reason">
                        <option value="family">Семейная консультация</option>
                        <option value="personal">Личная консультация</option>
                        <option value="general">Общая тревожность</option>
                        <option value="question">Задать вопрос</option>
                        <option value="other">Другое</option>
                    </select>

                    <label htmlFor="detail">Подробнее</label>
                    <textarea className={s.subject} name="details" placeholder="Опишите подробнее.."></textarea>
                    <ListItem className={s.btnWrapper} button key="Записаться на консультацию">
                        <ListItemText className={s.btn} primary="Отправить" />
                    </ListItem>
                </div>
            </div>
        );
    }
}

export default Subscription;


