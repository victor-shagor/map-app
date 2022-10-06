import ErrorBoundary from "components/ErrorBoundaries/ErrorBoundries";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    //wrap app in error boundries to handle unexpected errors
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
export default App;
