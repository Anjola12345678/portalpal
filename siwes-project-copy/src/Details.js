// import profile3 from './images/profile3.png';
// import { useEffect, useState } from 'react';
// import { auth, db } from "./config/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';
// import babcocklogo from './images/babcocklogo.jpeg';
// import ToDepartments from './ToDepartments';
// import calender1 from './images/calender1.png';
// import people1 from './images/people1.png';
// import stat1 from './images/stat1.png';
// import arrowdown from './images/arrowdown.png';
// import { FiCopy, FiCheck } from 'react-icons/fi';

// const Details = () => { 
//   const [userdetails, setuserdetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [popup, setpopup] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [copiedItem, setCopiedItem] = useState(null);


//   const toggleDropdown = () => {
//     setDropdownOpen(prev => !prev);
//   };

//   const dropdownItems = [
//     userdetails?.name,
//     userdetails?.department,
//     userdetails?.level,
//     userdetails?.number,
//     userdetails?.matric,
//   ];


//   const handleCopy = (item) => {
//     navigator.clipboard.writeText(item).then(() => {
//       setCopiedItem(item);
//       setTimeout(() => setCopiedItem(null), 2000); // Clear after 2s
//     });
//   };

//   const fetchuserdata = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const docRef = doc(db, "Users", user.uid);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setuserdetails(docSnap.data());
//         } else {
//           console.log("No user data found.");
//         }
//       }
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     fetchuserdata();
//   }, []);

//   if (!userdetails) {
//     return (
//       <div className=" inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] w-[80%] absolute right-0 ml-auto">
//         <div className="w-9 h-9">
//           <Lottie animationData={loadingAnimation} loop={true} />
//         </div>
//       </div>
//     );
//   }

//   const handleprofile = () => {
//     setpopup(true);
//     setTimeout(() => setpopup(true));
//   };

//   function getLastName(name) {
//     if (!name) return "";
//     const parts = name.trim().split(" ");
//     return parts[parts.length - 1];
//   }
//   return (
//     <div>
//        {/* Header */}
//        <div className=" bg-whites shadow-sm md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center px-5 fixed  right-0 top-0 w-[80%] z-50">
//          <div>
//            <h1 className="text-2xl md:text-3xl font-semibold">Welcome to PortalPal</h1>
//            <p className="font-medium text-gray-600">Let's solve our problem with ease</p>
//          </div>
//          <div className="flex items-center gap-3 mt-4 md:mt-0">
//            <p className="font-semibold">{userdetails.name}</p>
//            <img src={profile3} alt="profile" className="h-7 w-7 rounded-full cursor-pointer" onClick={handleprofile} />
//          </div>
//        </div>



//        {/* another section */}
//        <div className='mt-20 py-5 px-5 mx-5  border-whites border-[1.5px] shadow-sm rounded-lg items-center'>
//         <div className='flex justify-between'>
//           <h2 className='font-semibold  text-xl'>Student Details</h2>

//          {/* Wrapper makes dropdown position relative to button */}
//     <div className="relative">
//       {/* Button */}
//       <button
//         onClick={toggleDropdown}
//         className="bg-whitesmoke rounded-full text-black px-3 flex items-center gap-2"
//       >
//         Details
//         <img src={arrowdown} alt="arrow" className="w-4 h-4 mt-1" />
//       </button>


//  {dropdownOpen && (
//       <div className="absolute right-0 mt-2 w-[220px] z-50 " data-aos="fade-left">
//         <div className="bg-white border border-gray shadow-lg rounded-md overflow-hidden">
//           {/* Email Section */}
//           <div className="px-4 py-3 bg-gray flex justify-between items-center mb-2 rounded-b-[5px]">
//       {/* Email text (truncated if too long) */}
//       <p className="text-sm font-semibold text-blacksss truncate max-w-[150px]">
//         {userdetails?.email}
//       </p>

//       {/* Copy icon */}
//       {/* <button
//         onClick={handleCopy}
//         className="text-black hover:text-black transition"
//         title="Copy email"
//       >
//         {copiedItem ? <FiCheck className="text-green" /> : <FiCopy />}
//       </button> */}
//     </div>




//           {/* Dropdown Items */}
//           <ul className="text-sm text-black divide-gray mx-1 mt-1">
//             {dropdownItems.map((item, index) => (
//               <li 
//                 key={index}
//                 className="flex justify-between truncate items-center px-4 py-2 hover:bg-whitesmoke transition rounded-lg mb-1"
//               >
//                 <span className='truncate'>{item}</span>
//                 <button
//                   onClick={() => handleCopy(item)}
//                   className="text-grays hover:text-black"
//                   title="Copy text"
//                 >
//                   {copiedItem === item ? (
//                     <FiCheck className="text-green" />
//                   ) : (
//                     <FiCopy />
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
// }

//     </div>
//         </div>

//         {/*  */}
//         <div className='mt-6 flex gap-5'>
//           <div>
//             <img src={profile3} alt='profile' className='w-[100px] h-[100px] rounded-full'/>
//           </div>
    
//     <div>
//           <div className='mt-[-4px]'>
//             <h2 className='font-semibold  text-xl'>{userdetails.name}</h2>
//           </div>


//            <div className='flex gap-[40px] mt-7'>
//                {/* <div>
//             <p className='text-grays mb-1'>Name</p>
//             <h2 className='font-bold  '>{userdetails.name}</h2>
//           </div> */}
//           <div>
//              <p className='text-grays mb-1'>Matric-No</p>
//             <h2 className='font-semibold  '>{userdetails.matric}</h2>
//           </div>
//           <div>
//              <p className='text-grays mb-1'>Department</p>
//             <h2 className='font-semibold  '>{userdetails.department}</h2>
//           </div>
//           <div>
//              <p className='text-grays mb-1'>Level</p>
//             <h2 className='font-semibold  '>{userdetails.level}</h2>
//           </div>
//           <div>
//              <p className='text-grays mb-1'>Phone-No</p>
//             <h2 className='font-semibold  '>{userdetails.number}</h2>
//           </div>
//            <div>
//              <p className='text-grays mb-1'>Email</p>
//             <h2 className='font-semibold  '>{userdetails.email}</h2>
//           </div>

//           </div>


//           </div>

         
//         </div>


//         {/*  */}
//         <div className=' mt-10 flex gap-14 items-center'>
//          <div className='flex gap-5  bg-whites p-4 w-[270px] border-whites border-[1.5px] shadow-sm  rounded-lg '>
//           <img src={calender1} alt='profile' className='w-10 h-10 rounded-full'/>

//           <div >
//             <h2 className='font-bold '>12 Days</h2>
//             <p className='mt-2'>Total Attendance</p>
//           </div>
//          </div>

//           <div className='flex gap-5  bg-whites p-4 w-[270px] border-whites border-[1.5px] shadow-sm  rounded-lg '>
//           <img src={stat1} alt='profile' className='w-10 h-10 rounded-full'/>

//           <div >
//             <h2 className='font-bold '>12 Days</h2>
//             <p className='mt-2'>Total Attendance</p>
//           </div>
//          </div>

//           <div className='flex gap-5  bg-whites p-4 w-[270px] border-whites border-[1.5px] shadow-sm  rounded-lg '>
//           <img src={people1} alt='profile' className='w-10 h-10 rounded-full'/>

//           <div >
//             <h2 className='font-bold '>12 Days</h2>
//             <p className='mt-2'>Total Attendance</p>
//           </div>
//          </div>

//         </div>
//        </div>

//         <ToDepartments />



//          {/* Popup */}
//        {popup && (
//          <div className='absolute right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50' data-aos="fade-down">
//            <div className='flex justify-end'>
//              <button
//                className='text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]'
//                onClick={() => setpopup(false)}
//              >
//                ×
//              </button>
//            </div>
//            <div className='flex items-center justify-center mb-2'>
//              <h2 className='font-semibold text mb-4'>{userdetails.email}</h2>
//            </div>
//            <div className='flex justify-center mt-5'>
//              <img src={babcocklogo} alt="image" className='w-16 h-16 rounded-full' />
//            </div>
//            <div className='flex justify-center '>
//              <h2 className='font-semibold text-2xl'>Hi, {getLastName(userdetails.name)}!</h2>
//            </div>
//            <div className='flex justify-center mt-2'>
//              <button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>
//                Manage your PortalPal Account
//              </button>
//            </div>
//          </div>
//        )}

//     </div> 



//   );
// };

// export default Details;


// // //AIzaSyDmwAGdVEsWbYvoOvWMNUxrsL7mQsuQmyU









// import profile3 from './images/profile3.png';
// import { useEffect, useState } from 'react';
// import { auth, db } from "./config/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';
// import babcocklogo from './images/babcocklogo.jpeg';
// import ToDepartments from './ToDepartments';
// import calender1 from './images/calender1.png';
// import people1 from './images/people1.png';
// import stat1 from './images/stat1.png';
// import arrowdown from './images/arrowdown.png';
// import { FiCopy, FiCheck } from 'react-icons/fi';

// const Details = () => { 
//   const [userdetails, setUserdetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [popup, setPopup] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [copiedItem, setCopiedItem] = useState(null);

//   const toggleDropdown = () => {
//     setDropdownOpen(prev => !prev);
//   };

//   const dropdownItems = [
//     userdetails?.name,
//     userdetails?.department,
//     userdetails?.level,
//     userdetails?.number,
//     userdetails?.matric,
//   ];

//   const handleCopy = (item) => {
//     navigator.clipboard.writeText(item).then(() => {
//       setCopiedItem(item);
//       setTimeout(() => setCopiedItem(null), 2000);
//     });
//   };

//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const docRef = doc(db, "Users", user.uid);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setUserdetails(docSnap.data());
//         } else {
//           console.log("No user data found.");
//         }
//       }
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   if (!userdetails) {
//     return (
//       <div className="absolute inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] w-[80%] right-0 ml-auto">
//         <div className="w-9 h-9">
//           <Lottie animationData={loadingAnimation} loop={true} />
//         </div>
//       </div>
//     );
//   }

//   const handleProfile = () => {
//     setPopup(true);
//     setTimeout(() => setPopup(true));
//   };

//   function getLastName(name) {
//     if (!name) return "";
//     const parts = name.trim().split(" ");
//     return parts[parts.length - 1];
//   }

//   return (
//     <div className="w-full md:w-[100%] ml-auto">
//       {/* Header */}
//       <div className="bg-whites shadow-sm px-5 md:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center fixed top-0 right-0 w-full md:w-[80%] z-50">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-semibold">Welcome to PortalPal</h1>
//           <p className="font-medium text-gray-600">Let's solve our problem with ease</p>
//         </div>
//         <div className="flex items-center gap-3 mt-4 md:mt-0">
//           <p className="font-semibold">{userdetails.name}</p>
//           <img src={profile3} alt="profile" className="h-7 w-7 rounded-full cursor-pointer" onClick={handleProfile} />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className='mt-32 md:mt-24 py-5 px-5 mx-5 border-whites border-[1.5px] shadow-sm rounded-lg'>
//         <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
//           <h2 className='font-semibold text-xl mb-4 md:mb-0'>Student Details</h2>

//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="bg-whitesmoke rounded-full text-black px-3 flex items-center gap-2"
//             >
//               Details
//               <img src={arrowdown} alt="arrow" className="w-4 h-4 mt-1" />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-[220px] z-50">
//                 <div className="bg-white border border-gray shadow-lg rounded-md overflow-hidden">
//                   <div className="px-4 py-3 bg-gray flex justify-between items-center mb-2 rounded-b-[5px]">
//                     <p className="text-sm font-semibold text-blacksss truncate max-w-[150px]">
//                       {userdetails?.email}
//                     </p>
//                     <button
//                       onClick={() => handleCopy(userdetails?.email)}
//                       className="text-black hover:text-black transition"
//                       title="Copy email"
//                     >
//                       {copiedItem === userdetails?.email ? <FiCheck className="text-green" /> : <FiCopy />}
//                     </button>
//                   </div>

//                   <ul className="text-sm text-black divide-gray mx-1 mt-1">
//                     {dropdownItems.map((item, index) => (
//                       <li 
//                         key={index}
//                         className="flex justify-between truncate items-center px-4 py-2 hover:bg-whitesmoke transition rounded-lg mb-1"
//                       >
//                         <span className='truncate'>{item}</span>
//                         <button
//                           onClick={() => handleCopy(item)}
//                           className="text-grays hover:text-black"
//                           title="Copy text"
//                         >
//                           {copiedItem === item ? (
//                             <FiCheck className="text-green" />
//                           ) : (
//                             <FiCopy />
//                           )}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Profile & Info */}
//         <div className='mt-6 flex flex-col md:flex-row gap-5'>
//           <img src={profile3} alt='profile' className='w-[100px] h-[100px] rounded-full' />

//           <div>
//             <h2 className='font-semibold text-xl'>{userdetails.name}</h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
//               <div>
//                 <p className='text-grays mb-1'>Matric-No</p>
//                 <h2 className='font-semibold'>{userdetails.matric}</h2>
//               </div>
//               <div>
//                 <p className='text-grays mb-1'>Department</p>
//                 <h2 className='font-semibold'>{userdetails.department}</h2>
//               </div>
//               <div>
//                 <p className='text-grays mb-1'>Level</p>
//                 <h2 className='font-semibold'>{userdetails.level}</h2>
//               </div>
//               <div>
//                 <p className='text-grays mb-1'>Phone-No</p>
//                 <h2 className='font-semibold'>{userdetails.number}</h2>
//               </div>
//               <div>
//                 <p className='text-grays mb-1'>Email</p>
//                 <h2 className='font-semibold'>{userdetails.email}</h2>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className='mt-10 flex flex-col sm:flex-row flex-wrap gap-5'>
//           {[calender1, stat1, people1].map((img, index) => (
//             <div key={index} className='flex gap-5 bg-whites p-4 w-full sm:w-[270px] border-whites border-[1.5px] shadow-sm rounded-lg'>
//               <img src={img} alt='stat' className='w-10 h-10 rounded-full' />
//               <div>
//                 <h2 className='font-bold'>12 Days</h2>
//                 <p className='mt-2'>Total Attendance</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ToDepartments />

//       {/* Profile Popup */}
//       {popup && (
//         <div className='fixed right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50'>
//           <div className='flex justify-end'>
//             <button
//               className='text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]'
//               onClick={() => setPopup(false)}
//             >
//               ×
//             </button>
//           </div>
//           <div className='flex items-center justify-center mb-2'>
//             <h2 className='font-semibold mb-4'>{userdetails.email}</h2>
//           </div>
//           <div className='flex justify-center mt-5'>
//             <img src={babcocklogo} alt="image" className='w-16 h-16 rounded-full' />
//           </div>
//           <div className='flex justify-center'>
//             <h2 className='font-semibold text-2xl'>Hi, {getLastName(userdetails.name)}!</h2>
//           </div>
//           <div className='flex justify-center mt-2'>
//             <button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>
//               Manage your PortalPal Account
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;







import profile3 from './images/profile3.png';
import { useEffect, useState } from 'react';
import { auth, db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';
import babcocklogo from './images/babcocklogo.jpeg';
import ToDepartments from './ToDepartments';
import calender1 from './images/calender1.png';
import people1 from './images/people1.png';
import stat1 from './images/stat1.png';
import arrowdown from './images/arrowdown.png';
import { FiCopy, FiCheck } from 'react-icons/fi';

const Details = () => {
  const [userdetails, setUserdetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const dropdownItems = [
    userdetails?.name,
    userdetails?.department,
    userdetails?.level,
    userdetails?.number,
    userdetails?.matric,
  ];

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item).then(() => {
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserdetails(docSnap.data());
        } else {
          console.log('No user data found.');
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userdetails) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] w-[80%] right-0 ml-auto">
        <div className="w-9 h-9">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    );
  }

  const handleProfile = () => {
    setPopup(true);
    setTimeout(() => setPopup(true));
  };

  function getLastName(name) {
    if (!name) return '';
    const parts = name.trim().split(' ');
    return parts[parts.length - 1];
  }

  return (
    <div className="w-full md:w-[100%] ml-auto">
      {/* Header */}
      <div className="w-full bg-whites shadow-sm px-5 py-3 flex flex-col sm:flex-row justify-between items-center fixed z-10 right-0 md:w-[80%] top-0">
  <div>
    <h1 className="text-2xl sm:text-3xl font-semibold">Welcome to PortalPal</h1>
    <p className="font-medium text-sm sm:text-base">Let's solve our problem with ease</p>
  </div>

  {/* This part will be hidden on small screens */}
  <div className="hidden sm:flex items-center gap-3 mt-2 sm:mt-0">
    <p className="font-medium text-sm sm:text-base">{userdetails.name}</p>
    <img
      src={profile3}
      alt="profile"
      className="w-7 h-7 cursor-pointer"
      onClick={handleProfile}
    />
  </div>
</div>


      {/* Content Section */}
      <div className="mt-[100px] md:mt-24 py-5 px-5 mx-5 border-whites border-[1.5px] shadow-sm rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="font-semibold text-xl mb-4 md:mb-0">Student Details</h2>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-whitesmoke rounded-full text-black px-3 flex items-center gap-2"
            >
              Details
              <img src={arrowdown} alt="arrow" className="w-4 h-4 mt-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-[220px] z-50">
                <div className="bg-white border border-gray shadow-lg rounded-md overflow-hidden">
                  <div className="px-4 py-3 bg-gray flex justify-between items-center mb-2 rounded-b-[5px]">
                    <p className="text-sm font-semibold text-blacksss truncate max-w-[150px]">
                      {userdetails?.email}
                    </p>
                    <button
                      onClick={() => handleCopy(userdetails?.email)}
                      className="text-black hover:text-black transition"
                      title="Copy email"
                    >
                      {copiedItem === userdetails?.email ? (
                        <FiCheck className="text-green" />
                      ) : (
                        <FiCopy />
                      )}
                    </button>
                  </div>

                  <ul className="text-sm text-black divide-gray mx-1 mt-1">
                    {dropdownItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between truncate items-center px-4 py-2 hover:bg-whitesmoke transition rounded-lg mb-1"
                      >
                        <span className="truncate">{item}</span>
                        <button
                          onClick={() => handleCopy(item)}
                          className="text-grays hover:text-black"
                          title="Copy text"
                        >
                          {copiedItem === item ? (
                            <FiCheck className="text-green" />
                          ) : (
                            <FiCopy />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Profile & Info */}
        <div className="mt-6 flex flex-col md:flex-row gap-5">
          <img
            src={profile3}
            alt="profile"
            className="w-[100px] h-[100px] rounded-full"
          />



<div>
  <h2 className="font-semibold text-xl">{userdetails.name}</h2>
  <div className="flex flex-wrap gap-x-4 gap-y-4 mt-5 items-center justify-between">
    <div className="flex-1 min-w-[120px] max-w-[18%]">
      <p className="text-grays mb-1 whitespace-nowrap">Matric-No</p>
      <h2 className="font-semibold truncate">{userdetails.matric}</h2>
    </div>
    <div className="flex-1 min-w-[120px] max-w-[18%]">
      <p className="text-grays mb-1 whitespace-nowrap">Email</p>
      <h2 className="font-semibold truncate">{userdetails.email}</h2>
    </div>
    <div className="flex-1 min-w-[120px] max-w-[18%]">
      <p className="text-grays mb-1 whitespace-nowrap">Phone-No</p>
      <h2 className="font-semibold truncate">{userdetails.number}</h2>
    </div>
    <div className="flex-1 min-w-[120px] max-w-[18%]">
      <p className="text-grays mb-1 whitespace-nowrap">Level</p>
      <h2 className="font-semibold truncate">{userdetails.level}</h2>
    </div>
    <div className="flex-1 min-w-[120px] max-w-[18%]">
      <p className="text-grays mb-1 whitespace-nowrap">Department</p>
      <h2 className="font-semibold truncate">{userdetails.department}</h2>
    </div>
  </div>
</div>



        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-between">
          {[calender1, stat1, people1].map((img, index) => (
            <div
              key={index}
              className="flex gap-5 bg-whites p-4 w-full sm:w-[270px] border-whites border-[1.5px] shadow-sm rounded-lg"
            >
              <img src={img} alt="stat" className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="font-bold">12 Days</h2>
                <p className="mt-2">Total Attendance</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToDepartments />

      {/* Profile Popup */}
      {popup && (
        <div className="fixed right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]"
              onClick={() => setPopup(false)}
            >
              ×
            </button>
          </div>
          <div className="flex items-center justify-center mb-2">
            <h2 className="font-semibold mb-4">{userdetails.email}</h2>
          </div>
          <div className="flex justify-center mt-5">
            <img
              src={babcocklogo}
              alt="image"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="flex justify-center">
            <h2 className="font-semibold text-2xl">Hi, {getLastName(userdetails.name)}!</h2>
          </div>
          <div className="flex justify-center mt-2">
            <button className="border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue">
              Manage your PortalPal Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
