import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { IStore } from '@redux/store';
import Page from './abstract/page';

export interface ProductItem {
  id: number,
  image: string,
  name: string,
  price: number
}

interface Props extends IStore {
  data: ProductItem
}

function ProductCard(props: Props) {
  const router = useRouter();
  const { data, cart: { products } } = props;
  const price = useMemo(
    () => data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
    [data.price]
  );
  const isAddedToCart = products.some((product) => product.id === data.id);

  return (
    <div className='product'>
      <img
        className="product__image"
        src={data.image}
      />
      <div className='product__info'>
        <span className='product__price product__info-item'>{price}</span>
        <span className='product__name product__info-item'>{data.name}</span>
        <button
          className={`button ${isAddedToCart ? 'button-outline' : 'button-fill'} product__info-item`}
          onClick={() => isAddedToCart ? router.push('/cart') : props.addToCart(data)}
        >
          {isAddedToCart ? 'Оформить заказ' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
}

export default connect(
  Page.mapStateToProps,
  Page.mapDispatchToProps
)(ProductCard);