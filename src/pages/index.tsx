import React from 'react';
import { withRouter } from 'next/router';
import Page from '@components/abstract/page';

interface Props {
  products: {
    id: number,
    image: string,
    name: string,
    price: number
  }[]
}

export class Index extends Page<Props> {
  render() {
    const { products } = this.props;
    return super.render(
      <main className='container'>
        <section>
          {products.map((item, key) => (
            <></>
          ))}
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

export default withRouter(Index);
