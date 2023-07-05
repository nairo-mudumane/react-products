import { useQuery } from "react-query";
import services from "../../services";
import { CardProduct, FullScreenLoading } from "../../components";
import { Alert, AlertTitle } from "@mui/material";

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery(["/products"], services.products.getAll);

  if (isLoading) return <FullScreenLoading />;

  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>{(error as Error).name}</AlertTitle>

        <div>{(error as Error).message}</div>
      </Alert>
    );

  if (!products || products.length <= 0)
    return (
      <Alert severity="error">
        <AlertTitle>No product found</AlertTitle>

        <div>No products to show yet. Try later!</div>
      </Alert>
    );

  return (
    <div className="my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
          link={`/${product.id}`}
        />
      ))}
    </div>
  );
}
