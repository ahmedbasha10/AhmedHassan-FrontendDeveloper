import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home/Home";
import Navbar from "./Layout/Navbar/Navbar";
import LoginSignup from "./Screens/user/login_signup";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/user" element={<LoginSignup />} />
      </Routes>
    </main>
  );
}

export default App;
