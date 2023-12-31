import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";
import { Home, ProductById } from "./pages";
import { PublicLayout } from "./layouts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<ProductById />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
