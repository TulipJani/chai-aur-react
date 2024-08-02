import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <UserContextProvider>
        <div className="max-w-md w-full space-y-8">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </div>
  );
}

export default App;
