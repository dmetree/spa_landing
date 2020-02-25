import React, { Component } from 'react';
import s from './Contacts.module.css';
import Subscription from './../helpers/subscribtion-form/Subscription';



class Contacts extends Component {
    render() {
        return (
            <div className={s.contacts}>
                I'm Contacts
                <Subscription/>
            </div>
        );
    }
}

export default Contacts;
