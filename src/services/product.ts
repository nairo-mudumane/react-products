import { IProduct } from "../@types";
import services from ".";

type IDataReturn<T = Array<IProduct>> = {
  products: T;
  total: number;
  skip: number;
  limit: number;
};

async function getAll(): Promise<Array<IProduct>> {
  try {
    const products = services.api
      .get<IDataReturn>("/products")
      .then(({ data }) => data.products);

    return products;
  } catch (error) {
    throw error;
  }
}

async function getById(id: number): Promise<IProduct> {
  try {
    const products = services.api
      .get(`/products/${id}`)
      .then(({ data }) => data);

    return products;
  } catch (error) {
    throw error;
  }
}

export default { getAll, getById };
