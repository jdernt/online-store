import Link from 'next/link';
import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container flex'>
          <nav>
            <Link href='/'>
              <h1 className='footer__title'>Online Store</h1>
            </Link>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
