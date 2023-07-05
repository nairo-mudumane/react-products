import { IProduct } from "../@types";
import services from ".";

type IDataReturn = {
  products: Array<IProduct>;
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

export default { getAll };
