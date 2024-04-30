const productsList = [
  { name: 'Product 1', price: 75 },
  { name: 'Product 2', price: 150 },
];

function calculateDiscountedPrice(productsList, discountPercentage) {
  const discountedProducts = productsList.map((product) => {
    const discountedPrice = product.price - (product.price * discountPercentage) / 100;
    return { ...product, price: discountedPrice };
  });
  return discountedProducts;
}

function calculateTotalPrice(productsList) {
  const totalPrice = productsList.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return totalPrice;
}

console.log(calculateDiscountedPrice(productsList, 10));
console.log('The total price is:', calculateTotalPrice(productsList));
