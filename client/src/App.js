import "./App.css";
import Views from "./shared/components/views";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Views />
      </Router>
    </AuthProvider>
  );
}

export default App;
