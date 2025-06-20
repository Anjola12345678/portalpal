// import { useState, useEffect } from 'react';
// import error from './images/error.png';
// import timer from './images/timer.png';
// import wifi from './images/wifi.png';
// import profile3 from './images/profile3.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Lottie from 'lottie-react';
// import calender1 from './images/calender1.png';
// import people1 from './images/people1.png';
// import stat1 from './images/stat1.png';
// import graph from './images/graph.png';
// import babcocklogo from './images/babcocklogo.jpeg';
// import loadingAnimation from './loading.json';
// import { auth, db } from "./config/firebase";
// import { doc, getDoc } from "firebase/firestore";

// const Homepage = () => {
//   const [popup, setpopup] = useState(false);
//    const [userdetails, setuserdetails] = useState(null);
//    const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const fetchuserdata = async () => {
//       auth.onAuthStateChanged(async (user) => {
//         if (user) {
//           const docRef = doc(db, "Users", user.uid);
//           const docSnap = await getDoc(docRef);
  
//           if (docSnap.exists()) {
//             setuserdetails(docSnap.data());
//           } else {
//             console.log("No user data found.");
//           }
//         }
//         setLoading(false);
//       });
//     };
//    fetchuserdata();
//     useEffect(() => {
     
//     }, []);


//      if (!userdetails) {
//   return (
//     <div className=" inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] w-[80%] absolute right-0 ml-auto">
//       <div className="w-9 h-9">
//         <Lottie animationData={loadingAnimation} loop={true} />
//          {/* <LoadingSpinner /> */}
//       </div>
//     </div>
//   );
// }
  
  
//     //handle profile pop up
//     const handleprofile = () =>{
//       setpopup(true);
//       setTimeout(() => setpopup(true));
//     }


//     function getLastName(name) {
//   if (!name) return "";
//   const parts = name.trim().split(" ");
//   return parts[parts.length - 1]; // returns the last word
// }

//   return (
//     <div className=' min-h-screen w-full'>

//       {/* Header */}
//       <div className='flex top-0  lg:flex-row justify-between bg-whites p-[2px] shadow-sm  px-5  fixed  right-0  w-[80%] z-50
// '>
//         <div>
//           <h1 className='text-3xl font-semibold'>Welcome to PortalPal</h1>
//           <p className='font-semibold'>Let's solve our problem with ease</p>
//         </div>
//         <div className='flex mr-3 gap-5 justify-center mt-2'>
//           <p className='font-semibold'>{userdetails.name}</p>
//           <img src={profile3} alt="" className='h-7 w-7 cursor-pointer' onClick={handleprofile}/>
//         </div>
//       </div>



     


//       {/* dashboard analytics */}
//       <div className='px-5'>
//       <h1 className='text-3xl font-bold mt-20'>Dashboard Analytics</h1>
//       <p className='text-darkBlue mt-1'>Track our event performance and attendance</p>
//       </div>
//       {/* parent */}
//       <div className='px-5 mt-7 flex gap-7'>
//         {/* first */}
//         <div className='border-whites border-[1.5px] shadow-sm rounded-lg w-[300px] px-6 py-4'>
//              <p className='ml-14 mt-[18px] text-darkBlue'>Total Events</p>
//              <img src={calender1} alt="image" className='w-11 h-11 mt-[-8px]'/>
//              <h2 className='ml-14 font-bold text-3xl mt-[-25px]'>2</h2>
//         </div>

//         {/* second */}
//         <div className='border-whites border-[1.5px] shadow-sm rounded-lg w-[300px] px-6 py-4'>
//              <p className='ml-14 mt-[18px] text-darkBlue'>Total Attendees</p>
//              <img src={people1} alt="image" className='w-11 h-11 mt-[-8px]'/>
//              <h2 className='ml-14 font-bold text-3xl mt-[-25px]'>215</h2>
//         </div>
//         {/* third */}
//         <div className='border-whites border-[1.5px] shadow-sm rounded-lg w-[300px] px-6 py-4'>
//              <p className='ml-14 mt-[18px] text-darkBlue'>Average Attendance</p>
//              <img src={stat1} alt="image" className='w-11 h-11 mt-[-8px]'/>
//              <h2 className='ml-14 font-bold text-3xl mt-[-25px]'>107.5</h2>
//         </div>
//       </div>



//       {/* graph section */}
//       <div className='mt-10 border-whites border-[1.5px] shadow-sm rounded-lg z-50 py-4 px-10 mx-5'>
//         <h1 className='text-3xl text-darkBlue font-semibold'>PortalPal Attendance Distribution</h1>
//         <img src={graph} alt="graph" className=''/>
//       </div>





//       <div className='flex flex-wrap gap-3 items-center mx-5 mt-10 '>
//         {/* <img src={issues} alt='issues' className='w-6 h-6'/> */}
//         <h1 className='text-3xl font-bold'>Regular issues</h1>
//         <p className='bg-brightRed text-reds rounded-full px-4 text-sm font-medium bg-opacity-30 mt-1'>3 common</p>
//       </div>



// <div className='flex mt-5  px-5 gap-4 flex-wrap lg:flex-nowrap items-end mb-5'>

//   {/* Network Error – equal height, padded down to align */}
//  <div className='border-whites border-[1.5px] shadow-sm  rounded-lg p-2 '>
//     <div className='flex gap-4 utems-center mb-2 pl-2'>
//         <img src={wifi} alt="wifi" className='w-5 h-5 mt-1'/>
//         <h2 className='font-semibold text-lg'>Network Error</h2>
//     </div>
//     {/*  */}
//     <div className='max-w-[300px] bg-whites mx- px-2 rounded-lg mb-2'>
//     <div className='flex justify-between pt-2 mb-3'>
//         <p className='font-bold'>INC-1</p>
//         <p className='font-bold text-green'>Rate-70%</p>
//     </div>
//     <p className='pb-2 font-[500]'>Network errors disrupt online payments transactions, causing uncertainty for students.</p>
// </div>

//  </div>

//   {/* Delayed Approval – taller overall */}
//   <div className='border-whites border-[1.5px] shadow-sm rounded-lg p-2 '>
//     <div className='flex gap-4 utems-center mb-2 pl-2'>
//         <img src={timer} alt="wifi" className='w-5 h-5 mt-1'/>
//         <h2 className='font-semibold text-lg'>Delayed Approval</h2>
//     </div>
//     {/*  */}
//     <div className='max-w-[300px] bg-whites mx- px-2 rounded-lg mb-2'>
//     <div className='flex justify-between pt-2 mb-3'>
//         <p className='font-bold'>INC-2</p>
//         <p className='font-bold text-green'>Rate-40%</p>
//     </div>
//     <p className='pb-2 font-[500]'>Network errors disrupt online payments transactions, causing uncertainty for students.</p>
// </div>

//  </div>

//   {/* Registering Error – equal height, padded down */}
//   <div className='border-whites border-[1.5px] shadow-sm  rounded-lg p-2'>
//     <div className='flex gap-4 utems-center mb-2 pl-2'>
//         <img src={error} alt="wifi" className='w-5 h-5 mt-1'/>
//         <h2 className='font-semibold text-lg'>Registration Error</h2>
//     </div>
//     {/*  */}
//     <div className='max-w-[300px]  shadow-sm bg-whites px-2 rounded-lg mb-2'>
//     <div className='flex justify-between pt-2 mb-3'>
//         <p className='font-bold'>INC-2</p>
//         <p className='font-bold text-green'>Rate-90%</p>
//     </div>
//     <p className='pb-2 font-[500]'>Network errors disrupt online payments transactions, causing uncertainty for students.</p>
// </div>

//  </div>
  

// </div>



//        <div className="bg-black text-white px-6 py-8 tracking-normal font-sans">
//             <h1 className="text-4xl font-semibold leading-tight text-center">Have an idea in mind?</h1>
//             <div className="flex items-center justify-center mb-20">
//   <h1 className="text-8xl font-bold  text-center inline-block border-b-[5px] border-white hover:text-redss hover:border-black transition-all duration-300 cursor-pointer">
//     Let's connect!
//   </h1>
//    </div>


// {/* list */}
//  <h2 className='text-3xl font-bold mb-7'>Locations</h2>
//   <div className='flex justify-between'>

//     {/* first */}
     
//     <div>
//       <h3 className='mb-3'>NIGERIA</h3>
// <p>ILISHAN-REMO, OGUN STATE</p>
// <p>Cupertino, CA 95014</p>
// <p>PH: +234 704 110 4364</p>
//     </div>
    

//        {/* second */}
//     <div>
//       <h3 className='mb-3'>NIGERIA</h3>
// <p>ILISHAN-REMO, OGUN STATE</p>
// <p>Cupertino, CA 95014</p>
// <p>PH: +234 704 110 4364</p>
//     </div>


//      <div className='leading-10'>
// <p className='hover:underline cursor-pointer'>About us</p>
// <p className='hover:underline cursor-pointer'>Career</p>
// <p className='hover:underline cursor-pointer'>Services</p>
// <p className='hover:underline cursor-pointer'>Blog</p>
//     </div>


//      <div className='leading-10'>
// <p className='hover:underline cursor-pointer'>Dribble</p>
// <p className='hover:underline cursor-pointer'>Linkdin</p>
// <p className='hover:underline cursor-pointer'>Instagram</p>
// <p className='hover:underline cursor-pointer'>Twitter</p>
//     </div>
    

// </div>

//        </div>



//      {/* Logout Modal (outside sidebar) */}
     
//         {/* Popup */}
//   {popup && (
//     <div className='absolute right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50' data-aos="fade-right">
//         <div className='flex justify-end'>
//         <button
//           className='text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]'
//           onClick={() => setpopup(false)}
//         >
//           ×
//         </button></div>
//       <div className='flex items-center justify-center mb-2'>
//         <h2 className='font-semibold text mb-4'>{userdetails.email}</h2>
//       </div>

//       <div className='flex justify-center mt-5'>
//         <img src={babcocklogo} alt="image" className='w-16 h-16 rounded-full'/>
//       </div>
//       <div className='flex justify-center '>
//       <h2 className='font-semibold text-2xl'>Hi, {getLastName(userdetails.name)}!</h2>
//       </div>
//       <div className='flex justify-center mt-2'><button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>Manage your PortalPal Account</button></div>
     
      
//     </div>
//   )}



// </div>
//   );
// };

// export default Homepage;








import { useState, useEffect } from 'react';
import error from './images/error.png';
import timer from './images/timer.png';
import wifi from './images/wifi.png';
import profile3 from './images/profile3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import calender1 from './images/calender1.png';
import people1 from './images/people1.png';
import stat1 from './images/stat1.png';
import graph from './images/graph.png';
import babcocklogo from './images/babcocklogo.jpeg';
import loadingAnimation from './loading.json';
import { auth, db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Homepage = () => {
  const [popup, setPopup] = useState(false);
  const [userdetails, setUserdetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserdetails(docSnap.data());
          }
        }
        setLoading(false);
      });
    };

    fetchUserData();
  }, []);

  const handleProfile = () => {
    setPopup(true);
  };

  function getLastName(name) {
    if (!name) return "";
    const parts = name.trim().split(" ");
    return parts[parts.length - 1];
  }

  if (loading || !userdetails) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-whites bg-opacity-70">
        <div className="w-9 h-9">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-white">
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

      {/* Main Content */}
      <div className="pt-[120px] px-6 ">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard Analytics</h1>
        <p className="text-darkBlue mt-1">Track our event performance and attendance</p>

        {/* Analytics Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'Total Events',
            value: 2,
            image: calender1
          }, {
            title: 'Total Attendees',
            value: 215,
            image: people1
          }, {
            title: 'Average Attendance',
            value: 107.5,
            image: stat1
          }].map((item, i) => (
            <div key={i} className="border border-whites shadow-sm rounded-lg p-5 flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-10 h-10" />
              <div>
                <p className="text-darkBlue">{item.title}</p>
                <h2 className="font-bold text-xl">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Graph */}
        <div className="mt-10 border border-whites shadow-sm rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-darkBlue mb-4">PortalPal Attendance Distribution</h1>
          <img src={graph} alt="graph" className="w-full" />
        </div>

        {/* Issues Section */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold">Regular issues</h1>
            <p className="bg-brightRed text-reds rounded-full px-4 py-1 text-sm font-medium bg-opacity-30">3 common</p>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row gap-6">
            {[
              { title: "Network Error", image: wifi, rate: "70%", id: "INC-1" },
              { title: "Delayed Approval", image: timer, rate: "40%", id: "INC-2" },
              { title: "Registration Error", image: error, rate: "90%", id: "INC-3" }
            ].map((issue, i) => (
              <div key={i} className="border border-whites shadow-sm rounded-lg p-4 w-full lg:w-[33%]">
                <div className="flex items-center gap-3 mb-2">
                  <img src={issue.image} alt={issue.title} className="w-5 h-5" />
                  <h2 className="font-semibold text-lg">{issue.title}</h2>
                </div>
                <div className="bg-whites p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">{issue.id}</p>
                    <p className="font-bold text-green">Rate-{issue.rate}</p>
                  </div>
                  <p className="font-medium">Network errors disrupt online payment transactions, causing uncertainty for students.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        

        {/* Footer */}
        <div className="mt-16 bg-black text-white px-4 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Have an idea in mind?</h1>
          <div className='text-center'>
          <h1 className="text-5xl sm:text-7xl font-bold text-center border-b-4 inline-block border-white hover:text-redss hover:border-black transition-all duration-300 cursor-pointer mb-12">
            Let's connect!
          </h1>
          </div>
          <h2 className="text-2xl font-bold mb-5">Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="mb-2">NIGERIA</h3>
              <p>ILISHAN-REMO, OGUN STATE</p>
              <p>Cupertino, CA 95014</p>
              <p>PH: +234 704 110 4364</p>
            </div>
            <div>
              <h3 className="mb-2">NIGERIA</h3>
              <p>ILISHAN-REMO, OGUN STATE</p>
              <p>Cupertino, CA 95014</p>
              <p>PH: +234 704 110 4364</p>
            </div>
            <div className="leading-8">
              <p className="hover:underline cursor-pointer">About us</p>
              <p className="hover:underline cursor-pointer">Career</p>
              <p className="hover:underline cursor-pointer">Services</p>
              <p className="hover:underline cursor-pointer">Blog</p>
            </div>
            <div className="leading-8">
              <p className="hover:underline cursor-pointer">Dribble</p>
              <p className="hover:underline cursor-pointer">LinkedIn</p>
              <p className="hover:underline cursor-pointer">Instagram</p>
              <p className="hover:underline cursor-pointer">Twitter</p>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* Profile Popup */}
      {popup && (
        <div
          className="absolute right-5 top-20 w-[300px] bg-white border border-whites rounded-lg shadow-md px-3 py-5 z-50"
          data-aos="fade-left"
        >
          <div className="flex justify-end">
            <button className="text-gray-500 hover:text-red-500 text-2xl font-bold" onClick={() => setPopup(false)}>×</button>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-3">{userdetails.email}</p>
            <img src={babcocklogo} alt="babcock" className="w-16 h-16 rounded-full mx-auto mb-2" />
            <h2 className="text-lg font-semibold mb-3">Hi, {getLastName(userdetails.name)}!</h2>
            <button className="border border-gray-300 text-darkBlue font-semibold py-2 px-4 rounded-full hover:bg-darkBlue hover:text-white transition">
              Manage your PortalPal Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
