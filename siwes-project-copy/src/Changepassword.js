import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import profile3 from './images/profile3.png';
import babcocklogo from './images/babcocklogo.jpeg';
import { auth, db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Changepassword = () => {
  const [current, setcurrent] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [submitted, setsubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const [userdetails, setuserdetails] = useState(null);
  const [popup, setpopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!current || !newpassword || !confirmpassword) {
      setError("❌ All fields are required.");
      setsubmitted(false);
      return;
    }

    if (newpassword !== confirmpassword) {
      setError("❌ Passwords do not match.");
      setsubmitted(false);
      return;
    }

    if (!passwordRules.test(newpassword)) {
      setError(
        "❌ Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      setsubmitted(false);
      return;
    }

    setloading(true);
    setsubmitted(false);
    setError("");

    try {
      const user = auth.currentUser;

      if (!user || !user.email) {
        throw new Error("No authenticated user found.");
      }

      const credential = EmailAuthProvider.credential(user.email, current);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newpassword);

      setsubmitted(true);
      setcurrent("");
      setnewpassword("");
      setconfirmpassword("");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/wrong-password") {
        setError("❌ The current password is incorrect.");
      } else if (error.code === "auth/too-many-requests") {
        setError("❌ Too many attempts. Try again later.");
      } else {
        setError(`❌ ${error.message}`);
      }
    } finally {
      setloading(false);
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
      toast.success("Password Changed Successfully");
    }
  }, [submitted]);


   //handle profile pop up
   const handleprofile = () =>{
    setpopup(true);
    setTimeout(() => setpopup(true));
  }

 function getLastName(name) {
  if (!name) return "";
  const parts = name.trim().split(" ");
  return parts[parts.length - 1]; // returns the last word
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
        setloading(false);
      });
    };
  
    useEffect(() => {
      fetchuserdata();
    }, []);




    if (!userdetails) {
  return (
    <div className=" inset-0 flex items-center justify-center bg-whites bg-opacity-50 z-[9999] w-[80%] absolute right-0 ml-auto">
      <div className="w-9 h-9">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}





  return (
    <div className="ChangePasswordPanel min-h-screen flex flex-col">
      
      {/* Header */}
      <div className='flex flex-col lg:flex-row bg-whites p-[14px] shadow-sm px-5 fixed  right-0  w-[80%] z-50'>
        <div>
          <h1 className='text-3xl font-semibold font-roboto'>Welcome, {getLastName(userdetails.name)}</h1>
        </div>
        <div className='ml-auto gap-5 items-center hidden md:flex'>
          <p className='font-semibold'>{userdetails.name}</p>
          <img src={profile3} alt="Profile" className='h-7 w-7 cursor-pointer rounded-full' onClick={handleprofile}/>
        </div>
      </div>

      {/* Main Background Section */}
      <div className="flex-1 py-4 px-4  mt-12 lg:mt-0">
        
        {/* Form 1 */}
        <form className="flex justify-center mb-3 mt-16">
          <div className="w-full max-w-lg bg-whites p-4 rounded-md shadow-sm">
            <h2 className="text-3xl font-bold text-center mb-5">Change Password</h2>

            <div className="relative w-full mb-4">
              <input
                type="password"
                id="current-password"
                placeholder=" "
                value={current}
                onChange={(e) => setcurrent(e.target.value)}
                className="peer w-full border-0 border-b-[1.5px] border-gray bg-transparent px-4 pt-8 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition duration-300"
              />
              <label
                htmlFor="current-password"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 mb-5"
              >
                Current Password
              </label>
            </div>

            <div className="relative w-full mb-4">
              <input
                type="password"
                id="new-password"
                placeholder=" "
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
                className="peer w-full border-0 border-b-[1.5px] border-gray bg-transparent px-4 pt-8 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition duration-300"
              />
              <label
                htmlFor="new-password"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                New Password
              </label>
            </div>

            <p className="text-center text-reds font-semibold cursor-pointer hover:text-blackss">Forgot password?</p>
          </div>
        </form>

        {/* Form 2 */}
        <form className="flex justify-center mt-10 md:mt-0" onSubmit={handleSubmit}>
          <div className="w-full max-w-lg bg-whites p-4 rounded-md shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Confirm Password Change</h2>

            <div className="relative w-full mb-6">
              <input
                type="password"
                id="confirm-password"
                placeholder=" "
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                className="peer w-full border-0 border-b-[1.5px] border-gray bg-transparent px-4 pt-8 pb-2 text-sm placeholder-transparent focus:outline-none focus:border-blue-500 transition duration-300"
              />
              <label
                htmlFor="confirm-password"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Confirm Password 
              </label>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-blackss  hover:bg-opacity-95 text-white w-full rounded-md py-2 text-lg">
                Change Password
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Loading Overlay */}
      {/* {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center z-20 h-screen">
          <div className="w-[10px] h-[10px]">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>
      )} */}



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
      <h2 className='font-semibold text-2xl'>Hi,{getLastName(userdetails.name)}!</h2>
      </div>
      <div className='flex justify-center mt-2'><button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>Manage your PortalPal Account</button></div>
    
      
    </div>
  )}


      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Changepassword; 


   