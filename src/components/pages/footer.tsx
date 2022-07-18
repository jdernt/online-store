import Link from 'next/link';
import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className='container flex footer'>
        <Link href='/'>
          <h1 className='footer__title'>Online Store</h1>
        </Link>
      </footer>
    );
  }
}

export default Footer;
