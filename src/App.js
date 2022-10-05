import ErrorBoundary from "components/ErrorBoundaries/ErrorBoundries";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
export default App;
