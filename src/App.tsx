import { ErrorBoundary } from "src/components/errors";
import { LandingPageTemplate } from "src/components/templates/LandingPageTemplate";

function App() {
  return (
    <ErrorBoundary>
      <LandingPageTemplate />
    </ErrorBoundary>
  );
}

export default App;
