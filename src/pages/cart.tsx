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
      <main>
        <section className='cart'>
          <div className='cart__list'>
            {cart.products.map((product, index) => (
              <ProductCard key={index} data={product} isCart />
            ))}
          </div>
          <div className='cart__total'>
            <span>Итого</span>
            <span className='cart__total-price'>{formatPrice(cart.total)}</span>
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