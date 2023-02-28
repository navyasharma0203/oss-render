import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
      <AuthProvider>
        <div>
          <Navbar />
        </div>
      </AuthProvider>
  );
}

export default App;