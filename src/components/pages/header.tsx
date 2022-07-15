import Link from 'next/link';
import React, { Component } from 'react';

interface Props {
  cartProductsCount: number;
}

export class Header extends Component<Props> {
  render() {
    const { cartProductsCount } = this.props;

    return (
      <header className='container flex header'>
        <h1 className='header__title'>Online Store</h1>
        <nav className='header__nav'>
          <ul className='list header__menu'>
            <li className='header__menu-item'>
              <Link href='/'>
                <a className='button button-fill'>Каталог</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='header__cart'>
          <Link href='/cart'>
            <a className='button button-outline'>
              Корзина{' ' + cartProductsCount}
            </a>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
