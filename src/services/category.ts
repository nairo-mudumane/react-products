import services from ".";

async function getAll(): Promise<Array<string>> {
  try {
    const products = services.api
      .get("/products/categories")
      .then(({ data }) => data);

    return products;
  } catch (error) {
    throw error;
  }
}

export default { getAll };
