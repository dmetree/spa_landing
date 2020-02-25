import React, { Component } from 'react';
import s from './Header.module.css';
import iPhone from './../../../res/imgs/i-phone.svg';





class Header extends Component {
    render() {
        return (
            <div className={s.info}>
                <div className={s.menuCore}>
                    <a 
                        className={s.headerPhone}
                        href="tel:+79067619650">
                        <img className={s.iphoneIcon} src={iPhone} alt='callIcon' />
                        {/* <CallIcon /> */}
                        +7(906) 761-96-50
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
