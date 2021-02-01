export const subStringSearchForProducts = (products, text) => {
  return products.filter((product) => {
    return product.title.toLowerCase().search(text.toLowerCase()) > -1
  });
}