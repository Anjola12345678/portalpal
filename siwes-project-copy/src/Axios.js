// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const Axios = ()=>{
//     const [products, setproducts] = useState([]);
//     const [error, seterror] = useState('');
//     useEffect(() => {
//         getproducts();
//     }, []);

//     async function getproducts(){
//         //using try catch to handle errors...
//         try {
//             const response = await axios.get("https://dummyjson.com/products");
//             console.log(response);
//             setproducts(response.data.products);
//         } catch (error) {
//             seterror(error.message); 
//         }
//     }
//     return(
//         <div>
//         {products.map((product, index) => {
//             return <h3 key={index}>
//                      {product.id}--{product.title} ------ ${product.price}
//                    </h3>
//         })}
//         {error !== "" && error}
//         </div>
        
//     )
// }
// export default Axios;



// import axios from "axios";
// import { useState, useEffect } from 'react';

// const Axios = () =>{
//     const [users, setusers] = useState([]);
//     const [error, seterror] = useState('');

//     useEffect(() =>{
//         getusers();
//     }, []);
//     async function getusers() {
//         try {
//         const response = await axios.get("https://dummyjson.com/users");
//         setusers(response.data.users);
//     } catch (error) {
//         seterror(error.message);
//     }
// }
//     return( 
//         <div>
//           {users.map((user, index) =>{
//             return <h1 key={index}>
//                 {user.id}...{user.lastName}
//             </h1>
//           })}
//           {error && (
//             <h2>{error}</h2>
//           )}
//         </div>
//     )
// }
// export default Axios;






// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import profile1 from './images/profile1.png';
// import edit from './images/edit.png';
// import delet from './images/delet.png';

// const Axioss = () => {
//   const [contacts, setContacts] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({ name: '', email: '' });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [details, setdetails] = useState(false);

//   // Fetch contacts
//   useEffect(() => {
//     getContacts();
//   }, []);

//   const getContacts = () => {
//     axios
//       .get('http://localhost:3001/contacts')
//       .then((res) => {
//         setContacts(res.data);
//       })
//       .catch((error) => {
//         console.error('There was an error!', error);
//       });
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Add or update contact
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email) return alert('Fill in both fields');

//     if (isEditing) {
//       // Edit contact
//       axios
//         .put(`http://localhost:3001/contacts/${editId}`, form)
//         .then(() => {
//           getContacts();
//           setForm({ name: '', email: '' });
//           setIsEditing(false);
//           setEditId(null);
//           setShowForm(false);
//         });
//     } else {
//       // Add new contact
//       axios
//         .post('http://localhost:3001/contacts', form)
//         .then(() => {
//           getContacts();
//           setForm({ name: '', email: '' });
//           setShowForm(false);
//         });
//     }
//   };

//   // Delete contact
//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:3001/contacts/${id}`)
//     .then(() => {
//       getContacts();
//     });
//   };

//   // Edit contact
//   const handleEdit = (contact) => {
//     setForm({ name: contact.name, email: contact.email });
//     setIsEditing(true);
//     setEditId(contact.id);
//     setShowForm(true);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray">
//       <div className="w-[600px] bg-white p-6 rounded shadow-lg h-[90%] overflow-y-auto">
//         <div className='flex gap-[150px]'>
//         <h1 className=" flex text-4xl font-bold mb-2 justify-center items-center cursor-pointer">Contact Manager</h1>
//         <button   className='w-20 bg-blue rounded-lg '
//         onClick={() => {
//               setdetails(!details);
//             }}>
//           {details ? 'Hide' : 'Show'}
//         </button>
//         </div>
//         {details && (
//           <div>
//           <h2>About contact manager</h2>
//           <p>Contact manager is about getting peaople or individuals imformation for usefull purposes...</p>
//           </div>
//         )}

//         <hr className="mb-4" />

//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-semibold">Contact List</h1>
//           <button
//             className="bg-blue text-white px-4 py-1 rounded hover:bg-blue"
//             onClick={() => {
//               setShowForm(!showForm);
//               setIsEditing(false);
//               setForm({ name: '', email: '' });
//             }}
//           >
//             {showForm ? 'Cancel' : 'Add Contact'}
//           </button>
//         </div>


//         {showForm && (
//           <form onSubmit={handleSubmit} className="mb-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full p-2 mb-2 border rounded"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-2 mb-2 border rounded"
//             />
//             <button
//               type="submit"
//               className="w-full bg-green text-white py-2 rounded hover:bg-green"
//             >
//               {isEditing ? 'Update Contact' : 'Add Contact'}
//             </button>
//           </form>
//         )}

//         <hr className="mb-4" />

//         {contacts.length > 0 ? (
//           contacts.map((contact) => (
//             <div key={contact.id} className="flex items-center gap-4 mb-4 hover:bg-whitesmoke">
//               <img src={profile1} alt="profile" width="40px" height="40px" />
//               <div>
//                 <h3 className="font-semibold">{contact.name}</h3>
//                 <p className="text-gray text-sm font-medium">{contact.email}</p>
//               </div>
//               <img
//                 src={edit}
//                 alt="edit"
//                 width="25px"
//                 height="25px"
//                 className="ml-auto cursor-pointer"
//                 onClick={() => handleEdit(contact)}
//               />
//               <img
//                 src={delet}
//                 alt="delete"
//                 width="25px"
//                 height="25px"
//                 className="ml-4 cursor-pointer"
//                 onClick={() => handleDelete(contact.id)}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray">No contacts available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Axioss;




// import { useState } from 'react';
// const Javascript = ()=>{
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState("Anjola");
//     const [age, setage] = useState(0);
//     const [isemployed, setisemployed] = useState(false);
//     const updatename = () =>{
//       setName('Michael');
//     }
//     const increaseage = ()=>{
//       setage(age+1);
//     }
//     const decreaseage = () => {
//       if (age > 0) {
//         setage(age - 1);
//       }
//     };
//     const reset = ()=>{
//       setage(0);
//     }
//     const toggleemployedstatus = ()=>{
//       setisemployed(!isemployed)
//     }
//     return(
//         <div className='pl-20'>
// <h1>Count: {count}</h1>
//         <button onClick={() => setCount(count + 1)} >Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>


//       <p>Name: {name}</p>
//       <button onClick={updatename}>Set Name</button>

//       <p>Set Age: {age}</p>
//       <button onClick={increaseage}>Age+</button>
//       <button onClick={decreaseage}>Age-</button>
//       <button onClick={reset}>Reset</button>

//       <p>is employed: {isemployed ? "Yes" : "No"}</p>
//       <button onClick={toggleemployedstatus}>Toggle Employee Status</button>
//         </div>
//     )
// }
// export default Javascript;