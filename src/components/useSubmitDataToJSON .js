import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";

const useSubmitDataToJSON = () => {
  // **State to store form data**
  // This state can hold any form data structure,
  // making the hook generic and reusable.
  const [formData, setFormData] = useState({});

  // **State to manage loading state during submission**
  const [isLoading, setIsLoading] = useState(false);

  // **Function to handle form field changes**
  // This function dynamically updates the `formData` state
  // based on the changed field's `name`, `value`, and `type`.
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // **Handle radio buttons differently to update specific rating values**
    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parseInt(value), // Update the specific rating property directly
      }));
    } else {
      // **Handle other form field types (text, date, etc.)**
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "date" ? new Date(value) : value,
      }));
    }
  };

  // **Function to handle form submission**
  // This function takes the event object and the target JSON file URL as arguments.
  // It sends the `formData` to the specified URL using a POST request.
  const handleSubmit = async (event, url) => {
    event.preventDefault();

    setIsLoading(true); // Set loading state to true

    try {
      // **Send data to the JSON server using POST request**

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        alert("Data submitted successfully:", data);
        
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      // Handle errors, potentially displaying user-friendly messages
      console.error("Error submitting data:", error);

      // Example: Check for specific error codes and display appropriate messages
      if (error.response && error.response.status === 400) {
        console.error("Bad request:", error.response.data);
        // Display message about invalid data
      }
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or error
    }
  };

  // **Return the necessary functions to use the hook in components**
  return { formData, setFormData, handleChange, handleSubmit, isLoading };
};

export default useSubmitDataToJSON;
