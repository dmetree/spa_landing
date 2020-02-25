import React, { Component } from 'react';
import s from './LogoLeaves.module.css';
import nextToLogo from './../../res/imgs/nextToLogo.svg';
import Logo from './../../res/imgs/logo.svg';

let leavesStyle = {
    color: 'rgb(255, 255, 255)'
};


class LogoLeaves extends Component {
    render() {
        return (
            <div className={s.leavesWrapper} style={leavesStyle}>
                <img src={nextToLogo} className={s.nextToLogo} alt="nextToLogo" />
                <img src={Logo} className={s.nameLogo} alt="Logo" />
            </div>
        );
    }
}

export default LogoLeaves;
