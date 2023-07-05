import { useParams } from "react-router-dom";
import { IParams } from "./@types";
import { useQuery } from "react-query";
import services from "../../services";
import {
  CardProduct,
  FullScreenLoading,
  PageContainer,
} from "../../components";
import { Alert, AlertTitle } from "@mui/material";
import Aside from "./aside";

export function ProductById() {
  const { id } = useParams<IParams>();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery([`/products/${id}`], () =>
    services.products.getById(parseInt(id!))
  );

  if (isLoading) return <FullScreenLoading />;

  if (error)
    return (
      <PageContainer>
        <Alert severity="error">
          <AlertTitle>{(error as Error).name}</AlertTitle>

          <div>{(error as Error).message}</div>
        </Alert>
      </PageContainer>
    );

  if (!product)
    return (
      <PageContainer>
        <Alert severity="error">
          <AlertTitle>Error 404</AlertTitle>

          <div>This product was not found or is unavailable</div>
        </Alert>
      </PageContainer>
    );

  return (
    <PageContainer>
      <div className="mb-10 md:m-0 flex flex-wrap gap-6 justify-between">
        <main className="w-full lg:max-w-[70%]">
          <CardProduct product={product} hideTitle clampDescription={false} />
        </main>

        <aside className="flex-1">
          <Aside product={product} />
        </aside>
      </div>
    </PageContainer>
  );
}
