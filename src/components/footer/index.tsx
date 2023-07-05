import { PageContainer } from "..";

export function Footer() {
  return (
    <footer className="text-muted text-sm py-4">
      <PageContainer className="flex flex-wrap gap-1 items-center justify-end">
        <div>&copy; 2023</div>
        <span> | </span>
        <a
          href="https://github.com/nairo-mudumane/"
          target="_blank"
          className="underline underline-offset-4 hover:no-underline"
        >
          Nairo Mudumane
        </a>
      </PageContainer>
    </footer>
  );
}
