// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth, db } from "./config/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { signOut } from 'firebase/auth';
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';

// // Images
// import babcocklogo from './images/babcocklogo.jpeg';
// import dash from './images/dash.png';
// import chat from './images/chat1.png';
// import contact from './images/contact.png';
// import details from './images/details.png';
// import unlock from './images/unlock.png';
// import profile from './images/profile.png';
// import community from './images/community.png';
// import logout2 from './images/logout2.png';
// import shield2 from './images/shield2.png';
// import faq from './images/faq.png';
// import { FaBars } from 'react-icons/fa';

// const Section1 = ({ isSidebarOpen, closeSidebar }) => {
//   const [userdetails, setuserdetails] = useState(null);
//   const [logouts, setlogouts] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const docRef = doc(db, "Users", user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setuserdetails(docSnap.data());
//         }
//         setLoading(false);
//       } else {
//         setuserdetails(null);
//         setLoading(false);
//         navigate('/login');
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const logout = () => {
//     setShowLogoutPopup(true);
//     setTimeout(() => setlogouts(true), 10);
//   };

//   const handleLogoutConfirm = async () => {
//     try {
//       await signOut(auth);
//       setShowLogoutPopup(false);
//       setlogouts(false);
//       navigate('/login');
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   const handleLogoutCancel = () => {
//     setlogouts(false);
//     setTimeout(() => setShowLogoutPopup(false), 300);
//   };

//   if (loading) {
//     return (
//       <div className="absolute inset-0 bg-whitesmoke bg-opacity-30 flex items-center justify-center z-50">
//         <div className="w-[40px] h-[40px]">
//           <Lottie animationData={loadingAnimation} loop />
//         </div>
//       </div>
//     );
//   }

//   if (!userdetails) {
//     return <p className="text-center py-10">User is not logged in</p>;
//   }

//   function getLastName(name) {
//     if (!name) return "";
//     const parts = name.trim().split(" ");
//     return parts[parts.length - 1];
//   }

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`bg-blackss text-white top-0 left-0 fixed md:static z-40 transition-transform duration-300
//         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//         md:translate-x-0 w-[70%] md:w-[20%] h-screen flex flex-col`}
//       >
//         {/* Mobile Menu Icon */}
//         <div className="md:hidden p-4 flex justify-end">
//           <button onClick={closeSidebar}>
//             ✕
//           </button>
//         </div>

//         {/* Header */}
//         <Link to='/'>
//           <div className='flex bg-blacksss w-full gap-2 p-5 items-center mb-5 h-[84px] flex-shrink-0 cursor-pointer'>
//             <img src={shield2} alt="logo" className='w-6 h-7' />
//             <h3><span className='text-2xl font-bold'>PortalPal</span></h3>
//           </div>
//         </Link>

//         {/* Content */}
//         <div className='flex-1 overflow-y-auto hide-scrollbar px-1'>
//           <div className='leading-[50px] mt-5'>
//             <h3 className='ml-3 text-[13px]'>MAIN MENU</h3>
//             <ul className='px-3'>
//               <Link to='homepage' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={dash} alt='dash' className='w-5 h-5' />
//                   <li>Dashboard</li>
//                 </div>
//               </Link>
//               <Link to='details' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={details} alt='dash' className='w-5 h-5' />
//                   <li>Personal Details</li>
//                 </div>
//               </Link>
//               <Link to='chat' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={chat} alt='chat' className='w-5 h-5' />
//                   <li>Chatbot</li>
//                 </div>
//               </Link>
//               <Link to='contact' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={contact} alt='contact' className='w-5 h-5' />
//                   <li>Contact</li>
//                 </div>
//               </Link>
//               <Link to='question' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={faq} alt='faq' className='w-5 h-5' />
//                   <li>FAQs</li>
//                 </div>
//               </Link>
//             </ul>
//           </div>

//           <div className='leading-[50px] mt-5'>
//             <h3 className='ml-3 text-[13px]'>SETTINGS</h3>
//             <ul className='px-5'>
//               <Link to='changepassword' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={unlock} alt='unlock' className='w-6 h-6' />
//                   <li>Change Password</li>
//                 </div>
//               </Link>
//               <Link to='community' onClick={closeSidebar}>
//                 <div className='flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white'>
//                   <img src={community} alt='community' className='w-5 h-5' />
//                   <li>About Us</li>
//                 </div>
//               </Link>

//               <div
//                 onClick={logout}
//                 className='cursor-pointer flex items-center gap-3 hover:bg-reds mb-8 hover:text-white pl-2 rounded-lg text-white'
//               >
//                 <img src={logout2} alt='logout' className='w-5 h-5' />
//                 <li>Logout</li>
//               </div>
//             </ul>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className='flex bg-blacks gap-2 p-5 py-10 items-center h-16 flex-shrink-0'>
//           <img src={shield2} alt="logo" className='w-6 h-7' />
//           <div>
//             <h3><span className='text-xl font-bold'>{getLastName(userdetails.name)}</span></h3>
//           </div>
//         </div>
//       </div>

//       {/* Logout Modal */}
//       {showLogoutPopup && (
//         <div
//           className={`fixed inset-0 z-[9999] bg-black bg-opacity-20 flex justify-center items-center transition-opacity duration-300 $(
//             logouts ? 'opacity-100' : 'opacity-0'
//           )`}
//         >
//           <div
//             className={`bg-blackss p-6 rounded-lg shadow-lg text-black w-[90%] max-w-[600px] text-center transform transition-all duration-300 ${
//               logouts ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//             }`}
//           >
//             <div className='flex justify-center mb-4'>
//               <img src={babcocklogo} alt='logo' className='rounded-lg w-[60px]' />
//             </div>
//             <p className="mb-4 font-bold text-xl sm:text-2xl text-white">PortalPal</p>
//             <p className="mb-6 font-medium text-base sm:text-lg text-white">Are you sure you want to logout?</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button
//                 onClick={handleLogoutConfirm}
//                 className="text-white font-bold border-[1.8px] py-2 px-10 rounded-full w-full sm:w-auto hover:opacity-90"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={handleLogoutCancel}
//                 className="bg-white font-bold px-10 py-2 rounded-full text-blackss w-full sm:w-auto border-[1.8px] hover:bg-opacity-90"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Section1;











// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth, db } from './config/firebase';
// import { doc, getDoc } from 'firebase/firestore';
// import { signOut } from 'firebase/auth';
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';

// // Images
// import babcocklogo from './images/babcocklogo.jpeg';
// import dash from './images/dash.png';
// import chat from './images/chat1.png';
// import contact from './images/contact.png';
// import details from './images/details.png';
// import unlock from './images/unlock.png';
// import profile from './images/profile.png';
// import community from './images/community.png';
// import logout2 from './images/logout2.png';
// import shield2 from './images/shield2.png';
// import faq from './images/faq.png';
// import { FaBars } from 'react-icons/fa';

// const Section1 = ({ isSidebarOpen, closeSidebar, toggleSidebar }) => {
//   const [userdetails, setUserdetails] = useState(null);
//   const [logouts, setLogouts] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const docRef = doc(db, 'Users', user.uid);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setUserdetails(docSnap.data());
//         }
//         setLoading(false);
//       } else {
//         setUserdetails(null);
//         setLoading(false);
//         navigate('/login');
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const logout = () => {
//     setShowLogoutPopup(true);
//     setTimeout(() => setLogouts(true), 10);
//   };

//   const handleLogoutConfirm = async () => {
//     try {
//       await signOut(auth);
//       setShowLogoutPopup(false);
//       setLogouts(false);
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   const handleLogoutCancel = () => {
//     setLogouts(false);
//     setTimeout(() => setShowLogoutPopup(false), 300);
//   };

//   if (loading) {
//     return (
//       <div className="absolute inset-0 bg-whitesmoke bg-opacity-30 flex items-center justify-center z-50">
//         <div className="w-[40px] h-[40px]">
//           <Lottie animationData={loadingAnimation} loop />
//         </div>
//       </div>
//     );
//   }

//   if (!userdetails) {
//     return <p className="text-center py-10">User is not logged in</p>;
//   }

//   function getLastName(name) {
//     if (!name) return '';
//     const parts = name.trim().split(' ');
//     return parts[parts.length - 1];
//   }

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`bg-blackss text-white top-0 left-0 fixed md:static z-40 transition-transform duration-300
//         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//         md:translate-x-0 w-[70%] md:w-[20%] h-screen flex flex-col`}
//       >
//         {/* Mobile Menu Icon */}
//         <div className="md:hidden p-4 flex justify-end">
//           <button onClick={toggleSidebar}>
//             {isSidebarOpen ? '✕' : <FaBars />}
//           </button>
//         </div>

//         {/* Header */}
//         <Link to="/">
//           <div className="flex bg-blacksss w-full gap-2 p-5 items-center mb-5 h-[84px] flex-shrink-0 cursor-pointer">
//             <img src={shield2} alt="logo" className="w-6 h-7" />
//             <h3>
//               <span className="text-2xl font-bold">PortalPal</span>
//             </h3>
//           </div>
//         </Link>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto hide-scrollbar px-1">
//           <div className="leading-[50px] mt-5">
//             <h3 className="ml-3 text-[13px]">MAIN MENU</h3>
//             <ul className="px-3">
//               <Link to="homepage" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={dash} alt="dash" className="w-5 h-5" />
//                   <li>Dashboard</li>
//                 </div>
//               </Link>
//               <Link to="details" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={details} alt="dash" className="w-5 h-5" />
//                   <li>Personal Details</li>
//                 </div>
//               </Link>
//               <Link to="chat" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={chat} alt="chat" className="w-5 h-5" />
//                   <li>Chatbot</li>
//                 </div>
//               </Link>
//               <Link to="contact" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={contact} alt="contact" className="w-5 h-5" />
//                   <li>Contact</li>
//                 </div>
//               </Link>
//               <Link to="question" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={faq} alt="faq" className="w-5 h-5" />
//                   <li>FAQs</li>
//                 </div>
//               </Link>
//             </ul>
//           </div>

//           <div className="leading-[50px] mt-5">
//             <h3 className="ml-3 text-[13px]">SETTINGS</h3>
//             <ul className="px-5">
//               <Link to="changepassword" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={unlock} alt="unlock" className="w-6 h-6" />
//                   <li>Change Password</li>
//                 </div>
//               </Link>
//               <Link to="community" onClick={closeSidebar}>
//                 <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
//                   <img src={community} alt="community" className="w-5 h-5" />
//                   <li>About Us</li>
//                 </div>
//               </Link>

//               <div
//                 onClick={logout}
//                 className="cursor-pointer flex items-center gap-3 hover:bg-reds mb-8 hover:text-white pl-2 rounded-lg text-white"
//               >
//                 <img src={logout2} alt="logout" className="w-5 h-5" />
//                 <li>Logout</li>
//               </div>
//             </ul>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex bg-blacks gap-2 p-5 py-10 items-center h-16 flex-shrink-0">
//           <img src={shield2} alt="logo" className="w-6 h-7" />
//           <div>
//             <h3>
//               <span className="text-xl font-bold">{getLastName(userdetails.name)}</span>
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Logout Modal */}
//       {showLogoutPopup && (
//         <div
//           className={`fixed inset-0 z-[9999] bg-black bg-opacity-20 flex justify-center items-center transition-opacity duration-300 ${
//             logouts ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div
//             className={`bg-blackss p-6 rounded-lg shadow-lg text-black w-[90%] max-w-[600px] text-center transform transition-all duration-300 ${
//               logouts ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//             }`}
//           >
//             <div className="flex justify-center mb-4">
//               <img src={babcocklogo} alt="logo" className="rounded-lg w-[60px]" />
//             </div>
//             <p className="mb-4 font-bold text-xl sm:text-2xl text-white">PortalPal</p>
//             <p className="mb-6 font-medium text-base sm:text-lg text-white">Are you sure you want to logout?</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button
//                 onClick={handleLogoutConfirm}
//                 className="text-white font-bold border-[1.8px] py-2 px-10 rounded-full w-full sm:w-auto hover:opacity-90"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={handleLogoutCancel}
//                 className="bg-white font-bold px-10 py-2 rounded-full text-blackss w-full sm:w-auto border-[1.8px] hover:bg-opacity-90"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Section1;






import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';

// Images
import babcocklogo from './images/babcocklogo.jpeg';
import dash from './images/dash.png';
import chat from './images/chat1.png';
import contact from './images/contact.png';
import details from './images/details.png';
import unlock from './images/unlock.png';
import community from './images/community.png';
import logout2 from './images/logout2.png';
import shield2 from './images/shield2.png';
import faq from './images/faq.png';
import { FaBars } from 'react-icons/fa';

const Section1 = ({ isSidebarOpen, closeSidebar, toggleSidebar }) => {
  const [userdetails, setUserdetails] = useState(null);
  const [logouts, setLogouts] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserdetails(docSnap.data());
        }
        setLoading(false);
      } else {
        setUserdetails(null);
        setLoading(false);
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const logout = () => {
    setShowLogoutPopup(true);
    setTimeout(() => setLogouts(true), 10);
  };

  const handleLogoutConfirm = async () => {
    try {
      await signOut(auth);
      setShowLogoutPopup(false);
      setLogouts(false);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogoutCancel = () => {
    setLogouts(false);
    setTimeout(() => setShowLogoutPopup(false), 300);
  };

  if (loading) {
    return (
      <div className="absolute inset-0 bg-whitesmoke bg-opacity-30 flex items-center justify-center z-50">
        <div className="w-[40px] h-[40px]">
          <Lottie animationData={loadingAnimation} loop />
        </div>
      </div>
    );
  }

  if (!userdetails) {
    return <p className="text-center py-10">User is not logged in</p>;
  }

  function getLastName(name) {
    if (!name) return '';
    const parts = name.trim().split(' ');
    return parts[parts.length - 1];
  }

  return (
    <>
      {/* Menu Button (mobile only) */}
      {/* <div className={`fixed top-4 left-4 md:hidden ${isSidebarOpen ? 'hidden' : ''}`}>
  <button
    onClick={toggleSidebar}
    className="text-white text-2xl p-2 bg-blackss rounded"
    aria-label="Open Menu"
  >
    <FaBars />
  </button>
</div> */}


      {/* Sidebar */}
      <div
        className={`bg-blackss text-white top-0 left-0 fixed md:static z-40 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 w-[70%] md:w-[20%] h-screen flex flex-col`}
      >
        {/* Close Button (mobile only) */}
        <div className="md:hidden p-4 flex justify-end">
          {isSidebarOpen && (
            <button onClick={closeSidebar} className="text-white text-xl">
              ✕
            </button>
          )}
        </div>

        {/* Header */}
        <Link to="/">
          <div className="flex bg-blacksss w-full gap-2 p-5 items-center mb-5 h-[84px] flex-shrink-0 cursor-pointer">
            <img src={shield2} alt="logo" className="w-6 h-7" />
            <h3>
              <span className="text-2xl font-bold">PortalPal</span>
            </h3>
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar px-1">
          <div className="leading-[50px] mt-5">
            <h3 className="ml-3 text-[13px]">MAIN MENU</h3>
            <ul className="px-3">
              <Link to="homepage" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={dash} alt="dash" className="w-5 h-5" />
                  <li>Dashboard</li>
                </div>
              </Link>
              <Link to="details" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={details} alt="dash" className="w-5 h-5" />
                  <li>Personal Details</li>
                </div>
              </Link>
              <Link to="chat" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={chat} alt="chat" className="w-5 h-5" />
                  <li>Chatbot</li>
                </div>
              </Link>
              <Link to="contact" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={contact} alt="contact" className="w-5 h-5" />
                  <li>Contact</li>
                </div>
              </Link>
              <Link to="question" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={faq} alt="faq" className="w-5 h-5" />
                  <li>FAQs</li>
                </div>
              </Link>
            </ul>
          </div>

          <div className="leading-[50px] mt-5">
            <h3 className="ml-3 text-[13px]">SETTINGS</h3>
            <ul className="px-5">
              <Link to="changepassword" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={unlock} alt="unlock" className="w-6 h-6" />
                  <li>Change Password</li>
                </div>
              </Link>
              <Link to="community" onClick={closeSidebar}>
                <div className="flex items-center gap-3 hover:bg-reds hover:text-white mb-2 pl-2 rounded-lg text-white">
                  <img src={community} alt="community" className="w-5 h-5" />
                  <li>About Us</li>
                </div>
              </Link>

              <div
                onClick={logout}
                className="cursor-pointer flex items-center gap-3 hover:bg-reds mb-8 hover:text-white pl-2 rounded-lg text-white"
              >
                <img src={logout2} alt="logout" className="w-5 h-5" />
                <li>Logout</li>
              </div>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex bg-blacks gap-2 p-5 py-10 items-center h-16 flex-shrink-0">
          <img src={shield2} alt="logo" className="w-6 h-7" />
          <div>
            <h3>
              <span className="text-xl font-bold">{getLastName(userdetails.name)}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutPopup && (
        <div
          className={`fixed inset-0 z-[9999] bg-black bg-opacity-20 flex justify-center items-center transition-opacity duration-300 ${
            logouts ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`bg-blackss p-6 rounded-lg shadow-lg text-black w-[90%] max-w-[600px] text-center transform transition-all duration-300 ${
              logouts ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="flex justify-center mb-4">
              <img src={babcocklogo} alt="logo" className="rounded-lg w-[60px]" />
            </div>
            <p className="mb-4 font-bold text-xl sm:text-2xl text-white">PortalPal</p>
            <p className="mb-6 font-medium text-base sm:text-lg text-white">
              Are you sure you want to logout?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleLogoutConfirm}
                className="text-white font-bold border-[1.8px] py-2 px-10 rounded-full w-full sm:w-auto hover:opacity-90"
              >
                Logout
              </button>
              <button
                onClick={handleLogoutCancel}
                className="bg-white font-bold px-10 py-2 rounded-full text-blackss w-full sm:w-auto border-[1.8px] hover:bg-opacity-90"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section1;
