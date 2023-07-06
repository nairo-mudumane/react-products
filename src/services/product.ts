import { IProduct } from "../@types";
import services from ".";

async function getAll(): Promise<Array<IProduct>> {
  try {
    const products = services.api
      .get("/products")
      .then(({ data }) => data.products);

    return products;
  } catch (error) {
    throw error;
  }
}

async function getByCategory(category: string): Promise<Array<IProduct>> {
  try {
    const products = services.api
      .get(`/products/category/${category}`)
      .then(({ data }) => data.products);

    return products;
  } catch (error) {
    throw error;
  }
}

async function getById(id: number): Promise<IProduct | null> {
  try {
    let product = null;

    await services.api.get(`/products/${id}`).then(({ data }) => {
      if (data) product = data;
    });

    return product;
  } catch (error) {
    throw error;
  }
}

export default { getAll, getById, getByCategory };
