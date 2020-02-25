import React, { Component } from 'react';
import s from './Footer.module.css';



class Footer extends Component {
    render() {
        return (
            <div className={s.footer}>
                
                <div className={s.footerItem}>Москва, ул. Мясницкая, д. 46с1</div>
                <div className={s.footerItem}>Психологический центр “Мастерская жизни”</div>
                {/* <div className={s.footerItem}>Tel/WhatsApp: <br/> +7 (906) 761-96-50</div> */}
                <a className={s.footerItem} href="tel:+79067619650">Tel/WhatsApp:<br/> +7(906) 761-96-50</a>
                
                <a className={s.pp} href="https://en.wikipedia.org/wiki/Privacy_policy">Политика конфиденциальности</a>
            </div>
        );
    }
}

export default Footer;
