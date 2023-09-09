import { useEffect, useState } from "react";
import "./App.css";
import "./ImageUploader.js";
import axios from "axios";

const DisplayData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response);
        // const res2 = await axios.get("/api/data");
        // console.log(res2);
        setUserData(response.data);
      } catch (error) {
        console.error("Error Fetching Data:", error);
        console.log("Error details:", error.message); // Log the specific error message
        console.log("Error response data:", error.response.data); // Log the response data if available
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
      <h3> User Details Are </h3>
      <div>
        {userData ? (
          // <pre> {JSON.stringify(userData, null, 2)} </pre>
          <ul>
            {userData.map((user, index) => {
              return (
                <ul key={index} className="userData">
                  <li> ID: {user.id} </li>
                  <li> Name: {user.name} </li>
                  <li> Email: {user.id} </li>
                  <li> Address: {user.address.city} </li>
                </ul>
              );
            })}
          </ul>
        ) : (
          <p>Loading JSON data....</p>
        )}
      </div>
    </>
  );
};

export default DisplayData;
