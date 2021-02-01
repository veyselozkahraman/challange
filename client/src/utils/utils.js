export const subStringSearchForProducts = (products, field, text) => {
  return products.filter((product) => {
    return product[field].toLowerCase().search(text.toLowerCase()) > -1
  });
}