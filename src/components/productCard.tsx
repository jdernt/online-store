import React, { Component } from 'react';

export interface ProductItem {
  id: number,
  image: string,
  name: string,
  price: number
}

interface Props {
  data: ProductItem
}

class ProductCard extends Component<Props> {
  render() {
    const { data } = this.props;
    const price = data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return (
      <div className='product'>
        <img
          className="product__image"
          src={data.image}
        />
        <div className='product__info'>
          <span className='product__price product__info-item'>{price}</span>
          <span className='product__name product__info-item'>{data.name}</span>
          <button className='button button-fill product__info-item'>
            Добваить в корзину
          </button>
        </div>
      </div>
    )
  }
}

export default ProductCard;