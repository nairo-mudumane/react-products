import React from "react";
import { useQuery } from "react-query";
import { Alert, AlertTitle } from "@mui/material";
import { CardProduct } from "../../components";
import services from "../../services";
import { IParams, IRelatedProps } from "./@types";
import { IProduct } from "../../@types";
import { useParams } from "react-router-dom";

export default function Related({ category }: IRelatedProps) {
  const { id: mainProductId } = useParams<IParams>();

  const { data, isLoading, error } = useQuery(["/products", category], () =>
    services.products.getByCategory(category)
  );

  const [products, setProducts] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    if (data)
      setProducts(data.filter(({ id }) => id !== parseInt(mainProductId!)));
  }, [data]);

  if (isLoading)
    return (
      <div>
        <h3 className="text-2xl">More like</h3>
        <Alert severity="warning">
          <AlertTitle>Loading</AlertTitle>
        </Alert>
      </div>
    );

  if (error)
    return (
      <div>
        <h3 className="text-2xl">More like</h3>

        <Alert severity="error">
          <AlertTitle>{(error as Error).name}</AlertTitle>

          <div>{(error as Error).message}</div>
        </Alert>
      </div>
    );

  if (products.length <= 0) return null;

  return (
    <div>
      <h3 className="text-2xl">More like</h3>

      <div className="my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            link={`/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
}
