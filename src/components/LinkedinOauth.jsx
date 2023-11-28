import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className="profile">
          <Profile />
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};

export default LoginButton;
