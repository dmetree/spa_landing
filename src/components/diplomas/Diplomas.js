import React, { Component } from 'react';
import s from './Diplomas.module.css';
import Subscription from './../helpers/subscribtion-form/Subscription';



class Diplomas extends Component {
    render() {
        return (
            <div className={s.diplomas}>
                My diplomas are here
                <Subscription />
            </div>
        );
    }
}

export default Diplomas;
