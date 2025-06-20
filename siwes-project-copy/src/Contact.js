import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';
import { collection, addDoc } from "firebase/firestore";
import profile3 from './images/profile3.png';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import chat3 from './images/chat3.png';
import phone from './images/phone.png';
import location from './images/location.png';
import babcocklogo from './images/babcocklogo.jpeg';
import { auth, db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";


const Contact = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [matric, setmatric] = useState('');
  const [message, setmessage] = useState('');
  const [loginTime, setLoginTime] = useState('');
  const [submitted, setsubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
   const [popup, setpopup] = useState(false);
  const navigate = useNavigate();
  const [userdetails, setuserdetails] = useState(null);

  const handleSubmitfunction = async (e) => {
    e.preventDefault();

    if (!name || !email || !matric || !message) {
      setError('Please fill in all the fields.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const now = new Date();
      const fullDateTime = now.toLocaleString();
      setLoginTime(fullDateTime);

      await addDoc(collection(db, "messages"), {
        name,
        email,
        matric,
        message,
        timestamp: fullDateTime,
      });

      console.log(`Message saved to Firestore.`);
      setsubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while sending your message.');
    } finally {
      setTimeout(() => {
        setsubmitted(true);
        setLoading(false);

        // Clear inputs after sending
        setname('');
        setemail('');
        setmatric('');
        setmessage('');
      }, 3000);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (submitted) {
      toast.success("Message sent successfully!");
    }
  }, [submitted]);


   //handle profile pop up
   const handleprofile = () =>{
    setpopup(true);
    setTimeout(() => setpopup(true));
  }





  const fetchuserdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setuserdetails(docSnap.data());
        } else {
          console.log("No user data found.");
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

   if (!userdetails) {
    return (
      <div className=" inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] w-[80%] absolute right-0 ml-auto">
        <div className="w-9 h-9">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    );
  }


 function getLastName(name) {
  if (!name) return "";
  const parts = name.trim().split(" ");
  return parts[parts.length - 1]; // returns the last word
}

const handleProfile = () => {
    setPopup(true);
    setTimeout(() => setPopup(true));
  };


  return (
    <div className="">
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

     

    {/* <div> */}
      {/* second header */}
      <div className='flex justify-center text-center mt-3'>
        <div>
      <h1 className='text-4xl font-bold mt-20'>Contact our team</h1>
      <p className='mt-1'>Got any questions about the product or scaling on our platform? we're here to help.</p>
      <p>Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>
      </div>
      </div>



      {/* main */}
      <div className=' mt-5 px-4 md:px-20 gap-5 md:gap-5 lg:flex lg:flex-row     mx-auto md:items-center'>
        {/* section1 */}
        <div className='max-w-[500px] '>
         <form onSubmit={handleSubmitfunction} className="">
 <label htmlFor="name" className="font-semibold">
   Name
 </label><br/>
 <input
   type="text"
   id="name"
   placeholder="Portal Pal"
   className="border-2 border-gray rounded-md w-[400px] mb-2 py-1 pl-2    focus:outline-grays focus:ring-0 focus:border-transparent"
   value={name}
   onChange={(e) => setname(e.target.value)}
 /><br/>


 <label htmlFor="email" className="font-semibold text-[16px] sm:text-[18px]">
   Email
 </label><br/>
 <input
   type="email"
   id="email"
   placeholder="portalpal123@gmail.com"
  className="border-2 border-gray rounded-md w-[400px] mb-2 py-1 pl-2   focus:outline-grays focus:ring-0 focus:border-transparent"
   value={email}
   onChange={(e) => setemail(e.target.value)}
 /><br/>


 <label htmlFor="number" className="font-semibold text-[16px] sm:text-[18px]">
   Matric No
 </label><br/>
 <input
   type="text"
   id="number"
   placeholder="00/0000"
   className="border-2 border-gray rounded-md w-[400px] mb-2 py-1 pl-2   focus:outline-grays focus:ring-0 focus:border-transparent"
   value={matric}
   onChange={(e) => setmatric(e.target.value)}
 /><br/>


 <label htmlFor="message" className="font-semibold text-[16px] sm:text-[18px]">
   Message
 </label><br/>
 <textarea
   id="message"
   placeholder="Type your message here..."
   className="border-2 border-gray rounded-md w-[400px] mb-2 max-h-[90px] min-h-[90px] pl-2   focus:outline-grays focus:ring-0 focus:border-transparent"
   value={message}
   onChange={(e) => setmessage(e.target.value)}
 ></textarea>


 <button
   type="submit"
   disabled={loading}
   className={`bg-blackss py-1  rounded-md w-[400px] text-[16px] sm:text-[18px] font-semibold text-white transition-opacity ${
     loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
   }`}
 >
   {loading ? 'Sending...' : 'Send Message'}
 </button>
 </form>
        </div>


        {/* section2 */}
        <div className='mt-10 lg:mt-0'>
          <h2 className='font-bold text-2xl'>Chat with us</h2>
          <p>Speak to our friendly team via live chat.</p>

          <div className='flex gap-3 items-center mt-2'>
            <img src={chat3} alt='image' className='w-6 h-6'/>
            <p className='underline font-semibold cursor-pointer'>Start a live chat</p>
          </div>

          <div className='flex gap-3 items-center mt-2'>
            <img src={instagram} alt='image' className='w-6 h-6'/>
            <p className='underline font-semibold  cursor-pointer'>Message on instagram</p>
          </div>

          <div className='flex gap-3 items-center mt-2'>
            <img src={facebook} alt='image' className='w-6 h-6'/>
            <p className='underline font-semibold  cursor-pointer'>Message on facebook</p>
          </div>


          <h2 className='font-bold mt-5 text-2xl'>Call Us</h2>
          <p>Call our team Mon-Fri 8am-5pm.</p>

          <div className='flex gap-3 mt-3'>
            <img src={phone} alt='image' className='w-6 h-6'/>
            <p className='underline font-semibold  cursor-pointer'>+234-411-043-63</p>
          </div>

          <h2 className='text-2xl font-bold mt-5'>Visit Us</h2>
          <p>Chat with us in person at PortalPal PLC...</p>

          <div className='flex gap-3 mt-3'>
            <img src={location} alt='image' className='w-6 h-6'/>
            <p className='underline font-semibold  cursor-pointer'>100 smith street collingwood VIC 30-34</p>
          </div>
       
        </div>


      </div>

       {/* Popup */}
  {popup && (
    <div className='absolute right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50' data-aos="fade-right">
        <div className='flex justify-end'>
        <button
          className='text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]'
          onClick={() => setpopup(false)}
        >
          ×
        </button></div>
      <div className='flex items-center justify-center mb-2'>
        <h2 className='font-semibold text mb-4'>{userdetails.email}</h2>
      </div>

      <div className='flex justify-center mt-5'>
        <img src={babcocklogo} alt="image" className='w-16 h-16 rounded-full'/>
      </div>
      <div className='flex justify-center '>
      <h2 className='font-semibold text-2xl'>Hi, {getLastName(userdetails.name)}!</h2>
      </div>
      <div className='flex justify-center mt-2'><button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>Manage your PortalPal Account</button></div>
    
      
    </div>
  )}


      <ToastContainer />
    </div>
  );
};

export default Contact;





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';
// import { collection, addDoc } from "firebase/firestore";
// import profile3 from './images/profile3.png';
// import facebook from './images/facebook.svg';
// import instagram from './images/instagram.svg';
// import chat3 from './images/chat3.png';
// import phone from './images/phone.png';
// import location from './images/location.png';
// import babcocklogo from './images/babcocklogo.jpeg';
// import { auth, db } from "./config/firebase";
// import { doc, getDoc } from "firebase/firestore";

// const Contact = () => {
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [matric, setmatric] = useState('');
//   const [message, setmessage] = useState('');
//   const [loginTime, setLoginTime] = useState('');
//   const [submitted, setsubmitted] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [popup, setpopup] = useState(false);
//   const navigate = useNavigate();
//   const [userdetails, setuserdetails] = useState(null);

//   const handleSubmitfunction = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !matric || !message) {
//       setError('Please fill in all the fields.');
//       return;
//     }

//     try {
//       setLoading(true);
//       setError('');
//       const now = new Date();
//       const fullDateTime = now.toLocaleString();
//       setLoginTime(fullDateTime);

//       await addDoc(collection(db, "messages"), {
//         name,
//         email,
//         matric,
//         message,
//         timestamp: fullDateTime,
//       });

//       console.log(`Message saved to Firestore.`);
//       setsubmitted(true);
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong while sending your message.');
//     } finally {
//       setTimeout(() => {
//         setsubmitted(true);
//         setLoading(false);

//         // Clear inputs after sending
//         setname('');
//         setemail('');
//         setmatric('');
//         setmessage('');
//       }, 3000);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       const timer = setTimeout(() => {
//         setError('');
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [error]);

//   useEffect(() => {
//     if (submitted) {
//       toast.success("Message sent successfully!");
//     }
//   }, [submitted]);

//   //handle profile pop up
//   const handleprofile = () =>{
//     setpopup(true);
//     setTimeout(() => setpopup(true));
//   }

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
//       <div className="inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] absolute right-0 ml-auto w-full md:w-[80%]">
//         <div className="w-9 h-9">
//           <Lottie animationData={loadingAnimation} loop={true} />
//         </div>
//       </div>
//     );
//   }

//   function getLastName(name) {
//     if (!name) return "";
//     const parts = name.trim().split(" ");
//     return parts[parts.length - 1]; // returns the last word
//   }

//   return (
//     <div className="w-full md:w-[80%] mx-auto">
//       {/* Header */}
//       {/* <div className='flex flex-col lg:flex-row justify-between bg-whites p-[2px] shadow-sm px-5 fixed right-0 w-full md:w-[80%] z-50 top-0'>
//         <div>
//           <h1 className='text-3xl font-semibold'>Welcome, Babcock FeeGuide</h1>
//           <p className='font-semibold'>Let's solve our problem with ease</p>
//         </div>
//         <div className='flex mr-3 gap-5 justify-center mt-4'>
//           <p className='font-semibold '>{userdetails.name}</p>
//           <img src={profile3} alt="" className='h-7 w-7 cursor-pointer' onClick={handleprofile}/>
//         </div>
//       </div> */}
//       <div className='flex flex-col lg:flex-row justify-between bg-whites p-[2px] shadow-sm px-5 fixed right-0 w-full md:w-[80%] z-50 top-0'>
//   <div>
//     <h1 className='text-3xl font-semibold'>Welcome, Babcock FeeGuide</h1>
//     <p className='font-semibold'>Let's solve our problem with ease</p>
//   </div>
//   {/* Hide on small screens, show from md and above */}
//   <div className='hidden md:flex mr-3 gap-5 justify-center mt-4'>
//     <p className='font-semibold'>{userdetails.name}</p>
//     <img src={profile3} alt="" className='h-7 w-7 cursor-pointer' onClick={handleprofile} />
//   </div>
// </div>

//       {/* second header */}
//       <div className='flex justify-center text-center mt-32 px-4 md:px-0'>
//         <div>
//           <h1 className='text-3xl md:text-4xl font-bold'>Contact our team</h1>
//           <p className='mt-1'>Got any questions about the product or scaling on our platform? we're here to help.</p>
//           <p>Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>
//         </div>
//       </div>

//       {/* main */}
//       <div className='flex flex-col md:flex-row mt-5 px-4 md:px-20 gap-10 md:gap-20'>
//         {/* section1 */}
//         <div className='max-w-full md:max-w-[500px] w-full'>
//           <form onSubmit={handleSubmitfunction} className="">
//             <label htmlFor="name" className="font-semibold">Name</label><br/>
//             <input
//               type="text"
//               id="name"
//               placeholder="Portal Pal"
//               className="border-2 border-gray rounded-md w-full mb-2 py-1 pl-2 focus:outline-grays focus:ring-0 focus:border-transparent"
//               value={name}
//               onChange={(e) => setname(e.target.value)}
//             /><br/>

//             <label htmlFor="email" className="font-semibold text-[16px] sm:text-[18px]">Email</label><br/>
//             <input
//               type="email"
//               id="email"
//               placeholder="portalpal123@gmail.com"
//               className="border-2 border-gray rounded-md w-full mb-2 py-1 pl-2 focus:outline-grays focus:ring-0 focus:border-transparent"
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//             /><br/>

//             <label htmlFor="number" className="font-semibold text-[16px] sm:text-[18px]">Matric No</label><br/>
//             <input
//               type="text"
//               id="number"
//               placeholder="00/0000"
//               className="border-2 border-gray rounded-md w-full mb-2 py-1 pl-2 focus:outline-grays focus:ring-0 focus:border-transparent"
//               value={matric}
//               onChange={(e) => setmatric(e.target.value)}
//             /><br/>

//             <label htmlFor="message" className="font-semibold text-[16px] sm:text-[18px]">Message</label><br/>
//             <textarea
//               id="message"
//               placeholder="Type your message here..."
//               className="border-2 border-gray rounded-md w-full mb-2 max-h-[90px] min-h-[90px] pl-2 focus:outline-grays focus:ring-0 focus:border-transparent"
//               value={message}
//               onChange={(e) => setmessage(e.target.value)}
//             ></textarea>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`bg-blackss py-2 rounded-md w-full text-[16px] sm:text-[18px] font-semibold text-white transition-opacity ${
//                 loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
//               }`}
//             >
//               {loading ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>

//         {/* section2 */}
//         <div className='w-full md:w-auto'>
//           <h2 className='font-bold text-2xl'>Chat with us</h2>
//           <p>Speak to our friendly team via live chat.</p>

//           <div className='flex gap-3 items-center mt-2 cursor-pointer'>
//             <img src={chat3} alt='chat' className='w-6 h-6'/>
//             <p className='underline font-semibold'>Start a live chat</p>
//           </div>

//           <div className='flex gap-3 items-center mt-2 cursor-pointer'>
//             <img src={instagram} alt='instagram' className='w-6 h-6'/>
//             <p className='underline font-semibold'>Message on instagram</p>
//           </div>

//           <div className='flex gap-3 items-center mt-2 cursor-pointer'>
//             <img src={facebook} alt='facebook' className='w-6 h-6'/>
//             <p className='underline font-semibold'>Message on facebook</p>
//           </div>

//           <h2 className='font-bold mt-5 text-2xl'>Call Us</h2>
//           <p>Call our team Mon-Fri 8am-5pm.</p>

//           <div className='flex gap-3 mt-3 cursor-pointer'>
//             <img src={phone} alt='phone' className='w-6 h-6'/>
//             <p className='underline font-semibold'>+234-411-043-63</p>
//           </div>

//           <h2 className='text-2xl font-bold mt-5'>Visit Us</h2>
//           <p>Chat with us in person at PortalPal PLC...</p>

//           <div className='flex gap-3 mt-3 cursor-pointer'>
//             <img src={location} alt='location' className='w-6 h-6'/>
//             <p className='underline font-semibold'>100 smith street collingwood VIC 30-34</p>
//           </div>
//         </div>
//       </div>

//       {/* Popup */}
//       {popup && (
//         <div className='absolute right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50' data-aos="fade-right">
//           <div className='flex justify-end'>
//             <button
//               className='text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]'
//               onClick={() => setpopup(false)}
//             >
//               ×
//             </button>
//           </div>
//           <div className='flex items-center justify-center mb-2'>
//             <h2 className='font-semibold text mb-4'>{userdetails.email}</h2>
//           </div>

//           <div className='flex justify-center mt-5'>
//             <img src={babcocklogo} alt="babcock logo" className='w-16 h-16 rounded-full'/>
//           </div>
//           <div className='flex justify-center '>
//             <h2 className='font-semibold text-2xl'>Hi, {getLastName(userdetails.name)}!</h2>
//           </div>
//           <div className='flex justify-center mt-2'>
//             <button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>
//               Manage your PortalPal Account
//             </button>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default Contact;
