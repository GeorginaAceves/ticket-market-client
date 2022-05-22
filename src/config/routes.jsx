import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import TicketsPage from "../pages/TicketsPage";
import ProfilePage from "../pages/ProfilePage";
import FavoritesPage from "../pages/FavoritesPage";


const routes = (props) => {
  const { user } = props;
  return [
    {
      path: '/shoppinghistory',
      element: <shoppinghistoryPage {...props} />,
    },
    {
      path: '/favorites',
      element: <FavoritesPage {...props} />,
    },
    {
      path: '/tickets',
      element: <TicketsPage {...props} />,
    },
    {
      path: '/profile',
      element: <ProfilePage {...props} />,
    },
    {
      path: "/",
      element: <HomePage {...props} />,
    },
    {
      path: "/auth/signup",
      element: <Signup {...props} />,
    },

    {
      path: "/auth/login",
      element: <Login {...props} />,
    },
    {
      path: "/protected",
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
