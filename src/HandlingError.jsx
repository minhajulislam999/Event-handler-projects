// import React, {useState, useEffect} from "react";

// export default function HandlingError(){
//     const [error,setError] = useState(null);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(data => {
//             setData(data);
//             setError(error);
//             setLoading(false);
//         })
//         .catch(error => {
//             setError(error);
//             setLoading(false);
//         });

//     }, [])

//     const fetchData = async() => {
//         try{
//             const response = await 
//         }
//     }

// }

import React, { useState, useEffect } from "react";

export default function HandlingError() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{
        padding: "10px",
        margin: "10px",
        border: "2px solid red",
        borderRadius: "10px",
        backgroundColor: "mistyrose",

    }}>
      <h2 style={{
        fontWeight: "bold",
        color: "darkred",
        margin: "10px",
    
      }}>User List</h2>
      <ul style={{
        listStyleType: "none",
        padding: "0",
        margin: "0",
        border: "2px solid red",
        borderRadius: "10px",
        backgroundColor: "mistyrose",
      }}>
        {data.map(user => (

          <li style={{
            padding: "8px",
            borderBottom: "1px solid #ccc",
          }}
          
          key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
