import { CategoriesList, PageContainer } from "../../components";
import Products from "./products";

export function Home() {
  return (
    <PageContainer>
      <CategoriesList />

      <Products />
    </PageContainer>
  );
}
