// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './config/firebase';
// import arrow from './images/arrow.png';
// import bu4 from './images/bu4.jpg';
// import babcocklogo from './images/babcocklogo.jpeg';
// import showpassword from './images/showpassword.svg';
// import hidepassword from './images/hidepassword.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './style.css';
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';

// const Login = () => {
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [error, seterror] = useState('');
//   const [loading, setloading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in both fields");
//       return;
//     }

//     setloading(true);
//     seterror('');

//     try {
//       const response = await signInWithEmailAndPassword(auth, email, password);
//       if (response) {
//         navigate('/main');
//       }
//     } catch (err) {
//       toast.error('Invalid email or password');
//       console.error(err.message);
//     } finally {
//       setloading(false);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       const timer = setTimeout(() => seterror(''), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [error]);

//   return (
//     <div className="relative flex h-screen">
//       {/* First section */}
//       <div className="relative w-[35%] h-screen">
//         <img
//           src={bu4}
//           alt="img"
//           className="w-full h-full object-cover"
//           loading="eager"
//         />
//       </div>

//       {/* Second section */}
//       <div className="w-[65%] px-[150px] bg-white">
//         <div className="flex justify-center items-center mb-4 w-full mt-5 rounded-lg">
//           <img src={babcocklogo} alt="Login Icon" className="w-16 h-16 rounded-lg" />
//         </div>

//         <div className='flex gap-2 justify-center text-center mb-10'>
//           <h2 className='font-bold text-3xl'>Welcome back to</h2>
//           <h2 className='font-bold text-3xl text-gold'>Portal Pal</h2>
//         </div>

//         <form onSubmit={handleLogin} className="flex flex-col space-y-4">
//           <div>
//             <label className="font-semibold text-sm sm:text-base">Email</label>
//             <input
//               type="text"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               className="w-full p-2 mt-1 bg-transparent border-b-2 border-gray-300 focus:border-blacks outline-none"
//             />
//           </div>

//           <div className="relative w-full">
//             <label className="font-semibold text-sm sm:text-base">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               className="w-full pr-16 p-2 mt-1 border-b-2 border-gray-300 focus:border-black outline-none"
//             />
//             <p
//               onClick={() => setShowPassword(prev => !prev)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer mt-3"
//             >
//               {showPassword ? (
//                 <img src={showpassword} alt="Hide" className="w-5 h-5" />
//               ) : (
//                 <img src={hidepassword} alt="Show" className="w-5 h-5" />
//               )}
//             </p>
//           </div>

//           <div className='flex gap-3'>
//             <input type='checkbox' />
//             <p>
//               I agree with <Link to='/terms'><span className='underline text-reds'>Terms and conditions</span></Link>
//             </p>
//           </div>

//           <button
//             type="submit"
//             className="flex justify-center items-center text-lg sm:text-xl mt-4 p-3 bg-darkBlue text-white rounded-lg hover:opacity-90 font-bold transition"
//           >
//             Login
//             <img src={arrow} alt="arrow" className="ml-2 w-5 h-5" />
//           </button>

//           <div className="mt-[200px] flex flex-wrap text-sm sm:text-base gap-2">
//             <p>Don't have an account?</p>
//             <Link to="/signup" className="text-brightRed font-medium">SignUp</Link>
//           </div>
//         </form>
//       </div>

//       {/* Loading Spinner Centered */}
//       {loading && (
//         <div className=" inset-0 flex items-center justify-center bg-whites bg-opacity-70 z-[9999] w-[100%] absolute right-0 ml-auto">
//              <div className="w-9 h-9">
//                <Lottie animationData={loadingAnimation} loop={true} />
//                 {/* <LoadingSpinner /> */}
//              </div>
//            </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;









import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase';
import arrow from './images/arrow.png';
import bu4 from './images/bu4.jpg';
import babcocklogo from './images/babcocklogo.jpeg';
import showpassword from './images/showpassword.svg';
import hidepassword from './images/hidepassword.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in both fields');
      return;
    }

    setloading(true);
    seterror('');

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        navigate('/main');
      }
    } catch (err) {
      toast.error('Invalid email or password');
      console.error(err.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => seterror(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left image section */}
      <div className="hidden md:block md:w-[35%] h-[250px] md:h-full">
        <img
          src={bu4}
          alt="Babcock"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Right form section */}
      <div className="w-full md:w-[65%] px-6 sm:px-12 md:px-20 lg:px-32 py-10 bg-white flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={babcocklogo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg"
          />
        </div>

        {/* Welcome */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-2xl sm:text-3xl">Welcome back to</h2>
          <h2 className="font-bold text-2xl sm:text-3xl text-gold">Portal Pal</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="font-semibold text-sm sm:text-base">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-2 mt-1 bg-transparent border-b-2 border-gray-300 focus:border-black outline-none text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <label className="font-semibold text-sm sm:text-base">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full pr-12 p-2 mt-1 border-b-2 border-gray-300 focus:border-black outline-none text-sm sm:text-base"
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-2 top-[40px] cursor-pointer"
            >
              <img
                src={showPassword ? showpassword : hidepassword}
                alt="Toggle"
                className="w-5 h-5"
              />
            </span>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree with{' '}
              <Link to="/terms" className="underline text-reds">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center p-3 bg-darkBlue text-white rounded-lg hover:opacity-90 font-bold text-sm sm:text-lg transition"
          >
            Login
            <img src={arrow} alt="Arrow" className="ml-2 w-5 h-5" />
          </button>

          <div className="text-center mt-10 text-sm sm:text-base">
            <p>
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="text-brightRed font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
          <div className="w-14 h-14">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Login;
