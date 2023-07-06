import { useQuery } from "react-query";
import { Alert, AlertTitle, Button } from "@mui/material";
import services from "../../services";
import { CardProduct, FullScreenLoading } from "../../components";
import { useQueryParams } from "../../hooks";

export default function Products() {
  const query = useQueryParams();
  const filter = query.get("filter");
  const { getAll, getByCategory } = services.products;

  const {
    data: products,
    isLoading,
    error,
  } = useQuery(
    ["/products", filter],
    filter ? () => getByCategory(filter) : getAll
  );

  function clearFilter() {
    query.remove("filter");
  }

  if (isLoading) return <FullScreenLoading />;

  if (error)
    return (
      <div className="my-6">
        {filter && (
          <div className="my-2 w-max ml-auto">
            <Button variant="contained" onClick={clearFilter}>
              Limpar filtro
            </Button>
          </div>
        )}

        <Alert severity="error">
          <AlertTitle>{(error as Error).name}</AlertTitle>

          <div>{(error as Error).message}</div>
        </Alert>
      </div>
    );

  if (!products || products.length <= 0)
    return (
      <div className="my-6">
        {filter && (
          <div className="my-2 w-max ml-auto">
            <Button variant="contained" onClick={clearFilter}>
              Limpar filtro
            </Button>
          </div>
        )}

        <Alert severity="error">
          <AlertTitle>No product found</AlertTitle>

          <div>No products to show yet. Try later!</div>
        </Alert>
      </div>
    );

  return (
    <div className="my-6">
      {filter && (
        <div className="my-2 w-max ml-auto">
          <Button variant="contained" onClick={clearFilter}>
            Limpar filtro
          </Button>
        </div>
      )}

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
