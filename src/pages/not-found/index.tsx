import { Button } from "@mui/material";
import { PageContainer } from "../../components";

export default function NotFound() {
  return (
    <PageContainer className="h-screen flex items-center justify-center">
      <main className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-5xl">Error 404</h1>
          <h2 className="text-3xl">Something's wrong here...</h2>
          <p className="text-lg">
            The requested page does not exist or is under maintenance
          </p>
        </div>

        <Button variant="contained" href="/">
          Return to home page
        </Button>
        <a href="/" className="no-underline"></a>
      </main>
    </PageContainer>
  );
}
