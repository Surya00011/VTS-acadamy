import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/Authcontext.jsx";
import NavScrollExample from "./components/NavScrollExample.jsx";

function App() {
  return (
    <AuthProvider>
      <NavScrollExample />
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
