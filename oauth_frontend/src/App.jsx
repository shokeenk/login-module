import { useEffect } from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const AppContent = () => {
  const {AuthStatus} = useAuth();

  useEffect (() =>{
    AuthStatus();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/dashboard" element ={
          <ProtectedRoute>
            <Dashboard/>
            </ProtectedRoute>
        }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
        </Routes>
      </div>
    </Router>
  );
};

function App(){
  return (
    <AuthProvider>
      <AppContent/>
    </AuthProvider>
  )
}

export default App;