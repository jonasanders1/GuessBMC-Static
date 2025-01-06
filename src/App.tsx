import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

// Placeholder components - you'll need to create these
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import CreateBMC from "./pages/CreateBMC";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { handleLogin, handleRegister, handleLogout } from "./api";
import "./App.css";
import Landing from "./pages/Landing";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

// Protected Route wrapper component
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

// Router configuration
const createRouter = (isAuthenticated: boolean) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      ),
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/login",
          element: isAuthenticated ? (
            <Navigate to="/game" replace />
          ) : (
            <Login onLogin={handleLogin} />
          ),
        },
        {
          path: "/register",
          element: isAuthenticated ? (
            <Navigate to="/game" replace />
          ) : (
            <Register onRegister={handleRegister} />
          ),
        },
        {
          // Protected routes group
          element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
          children: [
            {
              path: "/game",
              element: <Game />,
            },
            {
              path: "/leaderboard",
              element: <Leaderboard />,
            },
            {
              path: "/create",
              element: <CreateBMC />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

const App = () => {
  const [isAuthenticated] = useState(true);
  const router = createRouter(isAuthenticated);

  return <RouterProvider router={router} />;
};

export default App;
