import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Page from "@components/abstract/page";
import ProductCard from "@components/productCard";
import formatPrice from "@utils/formatPrice";

class Cart extends Page {
  render() {
    const { cart } = this.props;
    return super.render(
      <main className='container'>
        <section className='cart'>
          <h1 className='title cart__title'>Корзина</h1>
          {cart.products.length ? (
            <>
              <div className='cart__list'>
                {cart.products.map((product, index) => (
                  <ProductCard key={index} data={product} isCart />
                ))}
              </div>
              <div className='cart__total'>
                <span>Итого:</span>
                <span className='cart__total-price'>{formatPrice(cart.total)} &#8381;</span>
              </div>
            </>
          ) : (
            <div className='cart__empty'>
              Корзина пуста
            </div>
          )}
        </section>
      </main>
    );
  }
}

export default connect(
  Page.mapStateToProps,
  Page.mapDispatchToProps
)(withRouter(Cart));