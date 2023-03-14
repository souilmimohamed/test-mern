import "./App.css";
import Views from "./shared/components/views";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/productContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Views />
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
