function formatPrice(price: number | string) {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default formatPrice;