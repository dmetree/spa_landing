import React from 'react';
import s from './App.module.css';
import { Route } from 'react-router-dom';

import Therapy from './components/therapy/Therapy';
import Price from './components/price/Price';
import MyHistory from './components/myhistory/MyHistory';
import MyWork from './components/my-work/MyWork';
import Media from './components/instafeed/Instafeed';
import Diplomas from './components/diplomas/Diplomas';
import Contacts from './components/contacts/Contacts';
import FAB from './components/helpers/FAB/FAB';
import HeaderBar from './components/header-bar/HeaderBar';
import Footer from './components/helpers/footer/Footer';
import LogoLeaves from './components/logoLeaves/LogoLeaves';


function App() {
  return (
    <div className={s.container}>
      <HeaderBar/>
      <LogoLeaves/>
      <div className={s.wrapper}>
        <Route exact path='/' component={Therapy} />
        <Route exact path='/history' component={MyHistory} />
        <Route exact path='/my-work' component={MyWork} />
        <Route exact path='/price' component={Price} />
        <Route exact path='/certificates' component={Diplomas} />
        <Route exact path='/media' component={Media} />
        <Route exact path='/contacts' component={Contacts} />
      </div>
      <FAB />
      <Footer />
    </div>
  );
}

export default App;
