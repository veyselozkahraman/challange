import RestHelper from "../utils/rest_helper";

const restHelper = new RestHelper();

const endPointMappings = {
  products: '/products'
};

export const getProducts = async () => {
  try {
    const products = await restHelper.get(endPointMappings.products);
    return products;
  } catch {
    return [];
  }
}