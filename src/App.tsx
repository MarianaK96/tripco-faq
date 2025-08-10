import { ErrorBoundary } from "src/components/errors";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  );
}

export default App;
