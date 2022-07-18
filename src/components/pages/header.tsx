import Link from 'next/link';
import React, { Component } from 'react';
import * as menu from '@configs/menu.json';

interface Props {
  cartProductsCount: number;
}

export class Header extends Component<Props> {
  render() {
    const { cartProductsCount } = this.props;

    return (
      <header className='container flex header'>
        <Link href='/'>
          <h1 className='header__title'>Online Store</h1>
        </Link>
        <nav className='header__nav'>
          <ul className='list header__menu'>
            {menu.map((item: { title: string, href: string }, index: number) => (
              <li key={index} className='header__menu-item'>
                <Link href={item.href}>
                  <a className='button button-fill'>{item.title}</a>
                </Link>
              </li>
            ))}
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
