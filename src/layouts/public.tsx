import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export function PublicLayout() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />

      <section className="flex-1">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
