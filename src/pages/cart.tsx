import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Page from "@components/abstract/page";

class Cart extends Page {
  render() {
    const { cart, removeFromCart } = this.props;
    return super.render(
      <main>
        <section className='cart'>
          <div className='cart__list'>
            {cart.products.map((product, index) => (
              <div className='product cart__list-item'>
                <img src={product.image} className='product__image' />
                <span className='product__name'>{product.name}</span>
                <span className='product__price'>{product.price}</span>
                <div className='cart__list-item-actions'>
                  <button
                    className='button button-outline'
                    onClick={() => removeFromCart(product)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='cart__total'>
            <span>Итого</span>
            <span className='cart__total-price'>{cart.total}</span>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(
  Page.mapStateToProps,
  Page.mapDispatchToProps
)(withRouter(Cart));