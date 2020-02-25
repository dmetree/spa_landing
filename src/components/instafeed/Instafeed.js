import React, { Component } from 'react';
import s from './Instafeed.module.css';
// import Subscription from './../helpers/subscribtion-form/Subscription';



class Instafeed extends Component {
    render() {
        return (
            <div className={s.instafeed}>
               
                {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script> */}
                <iframe 
                className={s.InstafeedWrapper}
                title="Instafeed"
                src="//lightwidget.com/widgets/9614535486dc55a28fc7f9d9340a2dae.html" 
                scrolling="no" 
                allowtransparency="true" 
                
                >
                    
                </iframe>

                
            </div>
        );
    }
}

export default Instafeed;
