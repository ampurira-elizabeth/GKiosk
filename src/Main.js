import React from "react";
import { useEffect, useState } from "react";

// 'https://dummyjson.com/users'


const Main=()=>{
    const[user,setUser]= useState();
    const[loading,setLoading]= useState(false);

    useEffect(()=>{
        userData()
    },[])
    
 const userData= ()=>{
    fetch('http://localhost:5000/products/fruits')
    .then((res) => res.json())
    .then((data) =>{ setUser(data) 
        setLoading(true)
      console.log("fetched data ---->")})
    .catch(e => {throw new Error(e.message)})

 }
 if(! loading){
    console.log("loading",loading)
    return <div>Loading.....</div>
};

return(

    <div>
       {user.map(item =>(
        <div key={item.id}>
            {/* <img src= {item.image} alt="fruit"/>
            <p>{item.name} {item.category}</p> */}
            <h4>Details of Fruits</h4>
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
        </div>

        ))}
    </div>
        )
   
}
export default Main;