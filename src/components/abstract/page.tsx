import React from 'react';
import Head from 'next/head';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { WithRouterProps } from 'next/dist/client/with-router';
import { IStore } from '@redux/store';
import { addToCart, removeFromCart, emptyCart } from '@redux/actions/cartActions';
import Header from '@components/pages/header';
import Footer from '@components/pages/footer';

interface P extends WithRouterProps {}

interface S {}

export class Page<PP = {}, SS = {}> extends React.Component<PP & P & IStore, SS & S> {
  static mapStateToProps = (state: IStore) => ({
    cart: state.cart,
  });

  static mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const actions = {
      addToCart,
      removeFromCart,
      emptyCart,
    };

    return bindActionCreators(actions, dispatch);
  };

  renderHead() {
    return (
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }

  render(children: any) {
    const { cart: { products } } = this.props;

    return (
      <div className='page-wrapper'>
        {this.renderHead()}
        <Header cartProductsCount={products.length || 0} />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Page;
