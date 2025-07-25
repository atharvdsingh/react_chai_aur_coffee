import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div>
            {!user ? (
                <h1>There is no user</h1>
            ) : (
                <h2>Welcome, {user.login}!</h2>
            )}
        </div>
    );
}

export default Profile;
