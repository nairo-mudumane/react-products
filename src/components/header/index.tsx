import { PageContainer } from "..";

export function Header() {
  return (
    <PageContainer>
      <header className="py-6 flex items-center justify-center">
        <a href="/" className="no-underline">
          <div className="text-3xl font-extrabold uppercase">Niteki Store</div>
        </a>
      </header>
    </PageContainer>
  );
}
