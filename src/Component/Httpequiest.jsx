import React, { useEffect, useState } from 'react'

function Httpequiest() {

    const [data, satDate] = useState({});

    const fetchUserData = () => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => {
            return response.json()
          })
          .then(data => {
            satDate(data)
          })
      }
      useEffect(()=>{
        fetchUserData();
      },[]);


    
    // useEffect(()=>{
        
    //     fetch("https://dummyjson.com/products")
    //     .then((response) => response.json())
    //     .then((data) => satDate(data))
    //     .catch((error) => console.log(error))
    // },[]);

  return (
    <div>
        <h1>Post</h1>
    {data.length > 0 && (
      <ul>
        {data.map(user => (
          // <li key={user.id}>{user.name} {user.email} {user.address.street} {user.address.geo.lat}</li>
          <li key={user.userId}>id:{user.id} <br /> Title: {user.title} <br /> Body: {user.body} </li>
        ))}
      </ul>
    )}
  </div>

// <div>
//     <h1>post</h1>
//     <ul>
//         {/* {data.map((products)=>{
//             <li key={products.id}>{products.title}</li>
//         })} */}
        
//     </ul>
// </div>



  )
}

export default Httpequiest