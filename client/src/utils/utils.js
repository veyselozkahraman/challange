export const subStringSearchForProducts = (products, field, text) => {
  return products.filter((product) => {
    return product[field].toLowerCase().search(text.toLowerCase()) > -1
  });
}

export const sortProductsArrayByField = (products, field) => {
  return products.sort((a,b) => (a[field] > b[field]) ? 1 : -1);
}