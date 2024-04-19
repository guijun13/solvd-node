const productsList = [1000, 1500, 500, 800];

function calculateDiscountedPrice(productsList, discountPercentage) {
  const discountedProductsList = productsList.map((product) => {
    return product - (product * discountPercentage) / 100;
  });

  return discountedProductsList;
}

function calculateTotalPrice(productsList) {
  const totalPrice = productsList.reduce((total, product) => {
    return total + product;
  }, 0);

  return totalPrice;
}

console.log(calculateDiscountedPrice(productsList, 10));
console.log('The total price is: ', calculateTotalPrice(productsList));
