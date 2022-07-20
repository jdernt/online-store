import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { IStore } from '@redux/store';
import formatPrice from '@utils/formatPrice';
import Page from './abstract/page';

export interface ProductItem {
  id: number,
  image: string,
  name: string,
  price: number
}

interface Props extends IStore {
  data: ProductItem
  isCart?: boolean
}

function ProductCard({ data, cart, isCart, addToCart, removeFromCart }: Props) {
  const router = useRouter();

  const price = useMemo(
    () => formatPrice(data.price),
    [data.price]
  );
  const isAddedToCart = cart.products.some((product) => product.id === data.id);

  if (isCart) {
    return (
      <div className='product'>
        <img src={data.image} className='product__image' />
        <span className='product__name'>{data.name}</span>
        <span className='product__price'>{price} &#8381;</span>
        <div className='product__actions'>
          <button
            className='button button-outline'
            onClick={() => removeFromCart(data)}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='product'>
      <img className="product__image" src={data.image} />
      <div className='product__info'>
        <span className='product__price product__info-item'>{price} &#8381;</span>
        <span className='product__name product__info-item'>{data.name}</span>
        <button
          className={`button ${isAddedToCart ? 'button-outline' : 'button-fill'} product__info-item`}
          onClick={() => isAddedToCart ? router.push('/cart') : addToCart(data)}
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