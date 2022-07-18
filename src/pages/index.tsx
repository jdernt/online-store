import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Page from '@components/abstract/page';
import ProductCard, { ProductItem } from '@components/productCard';

interface Props {
  products: ProductItem[]
}

export class Index extends Page<Props> {
  render() {
    const { products } = this.props;

    return super.render(
      <main className='container'>
        <section className='catalog'>
          <h1 className='catalog__title'>Список товаров</h1>
          <div className='catalog__list'>
            {products.map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch(process.env.BASEURL + '/catalog');
  const { items } = await res.json();

  return {
    props: {
      products: items
    }
  };
}

export default connect(
  Page.mapStateToProps,
  Page.mapDispatchToProps
)(withRouter(Index));
