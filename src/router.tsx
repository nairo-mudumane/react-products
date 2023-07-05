import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
