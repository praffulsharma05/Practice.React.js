///=-------------useEffect Multiple useEffect
//  import React,{ useEffect, useState } from "react";

//  import { useEffect, useState } from "react";

 
//  const Final = ()=> {
//  const [value,setValue ] = useState(0);
//  const [secondValue, setSecondValue] = useState(0);

//  useEffect(()=> {
//     console.log('hello from first useEffect');
//  },[value,secondValue]) 
//     return (
//         <div>
//             <h2>useState: {value}</h2>
//            <button className="btn" onClick={()=>setValue(value+1)}>
//               value</button>

//              <h2>useState: {secondValue}</h2>
// <button className="btn" onClick={()=> setSecondValue(secondValue+1)}> 
//     value
// </button>
//         </div>
//     )

// }
// export default Final


//-------useEffect---
//https://jsonplaceholder.typicode.com/todos/1'

//https://api.github.com/users/hiteshchoudhary

 
// const url = 'https://github.com/mojombo';

// const FetchData = () => {
//     const [isLoading, setIsLoading]  =useState(true);
//     const [isError, setIsError] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await fetch(url);
//         const users = await response.json();
//         setUsers(users);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUsers();
//   }, []);

//   return (
//     <section className="min-h-screen bg-gray-100 py-10">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         GitHub Users
//       </h1>

//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
//         {users.map((user) => {
//           const { id, login, avatar_url, html_url } = user;

//           return (
//             <li
//               key={id}
//               className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
//             >
//               <img
//                 src={avatar_url}
//                 alt={login}
//                 className="w-24 h-24 rounded-full mb-4"
//               />

//               <h5 className="text-lg font-semibold capitalize">
//                 {login}
//               </h5>

//               <a
//                 href={html_url}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-blue-500 text-sm mt-2 hover:underline"
//               >
//                 View Profile
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default FetchData;


import { useState,useEffect } from "react";

const url = 'https://api.github.com/users/atmos';

const MultipleReturnFetched = ()=>{
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false);
      
    const [user,setUser] = useState(null)
    useEffect(()=> {
const fetchUser = async ()=>{
    try {
        const resp = await fetch(url);
        const user = await resp.json();
        console.log(user);
        setUser(user)
    } catch (error) {
        console.log(error);
        setIsError(true) 
    }
    setIsLoading(false)
}
fetchUser();
},[])
if(isLoading){
return <h1>Loading...</h1>
}
if(isError){
    return <h2>Error....</h2>
}
return (
    <div>
        <img style={{width:'150px',borderRadius:'25px' }} src={user.avatar_url}/>
          <p>{user.login}</p>
    </div>
)
}
export default MultipleReturnFetched

