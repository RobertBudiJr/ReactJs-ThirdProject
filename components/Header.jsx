import { useState } from 'react';
import React from 'react';
import Logo from '../src/assets/TrollFace.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src={Logo} alt='Logo' className='header__logo' />
        <h2 className='header__title'>Meme Generator</h2>
      </div>

      <div className='header__right'>
        <h4 className='header__name'>React Course - Project 3</h4>
      </div>
    </header>
  );
}
