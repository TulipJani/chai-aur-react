import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="text-center text-red-500">
        No user found! Please Login
      </div>
    );
  return (
    <>
      <h1 className="text-2xl font-semibold text-center text-white">
        Welcome {user.username}
      </h1>
      <h1 className="text-xl font-light text-center text-white">
        We are so glad to have to here.
      </h1>
    </>
  );
}

export default Profile;
