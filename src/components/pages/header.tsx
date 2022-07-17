import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className='container flex header'>
        <h1 className='header__title'>Online Store</h1>
        <nav className='header__nav'>
          <ul className='list header__menu'>
            <li className='header__menu-item'>
              <a href='/' className='button button-fill'>Каталог</a>
            </li>
          </ul>
        </nav>
        <div className='header__cart'>
          <a href='/cart' className='button button-outline'>
            Корзина
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
