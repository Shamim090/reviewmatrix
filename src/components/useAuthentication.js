import { useState } from "react";

const useAuthentication = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState("");

  const authenticateUser = async (email, password) => {
    try {
      // Make a fetch request to the server to fetch user data
      const response = await fetch("http://localhost:3001/users");
      const userData = await response.json();

      // Check if form data matches existing user data
      const matchedUser = userData.find(
        (user) => user.email === email && user.password === password
      );
      if (!matchedUser) {
        throw new Error("Invalid credentials");
      }

      setLoggedInUser(matchedUser); // Store the logged-in user
     
      setError(""); // Clear any previous error
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Invalid credentials");
    }
  };

  return { loggedInUser, error, authenticateUser };
};

export default useAuthentication;
