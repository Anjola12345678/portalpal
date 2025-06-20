// import { useState, useEffect } from 'react';
// import arrow from './images/arrow.png';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import loadingAnimation from './loading.json';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from "./config/firebase";
// import { setDoc, doc } from "firebase/firestore";
// import bu4 from './images/bu4.jpg';
// import babcocklogo from './images/babcocklogo.jpeg';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [number, setnumber] = useState('');
//   const [department, setdepartment] = useState('');
//   const [matric, setmatric] = useState('');
//   const [level, setlevel] = useState('');
//   const [submitted, setsubmitted] = useState(false);
//   const [error, seterror] = useState('');
//   const [loading, setloading] = useState(false);
//   const [loggedin, setloggedin] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

//     if (!name || !email || !password || !number || !department || !matric || !level) {
//       toast.error("Please fill in all the fields.");
//       setsubmitted(false);
//       return;
//     }

//     if (!passwordRules.test(password)) {
//       toast.error("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
//       setsubmitted(false);
//       return;
//     }

//     try {
//       setloading(true);
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           name, email, number, department, matric, level
//         });
//       }
//       console.log("User registered successfully!");
//       setloggedin(true);
//       setsubmitted(true);

//       // Clear form fields
//       setname('');
//       setemail('');
//       setpassword('');
//       setnumber('');
//       setmatric('');
//       setdepartment('');
//       setlevel('');
//     } catch (error) {
//       console.error(error.message);
//       if (error.code === 'auth/email-already-in-use') {
//         toast.error("This email is already in use. Please log in or use a different email.");
//       } else {
//         toast.error("Registration failed. Please try again.");
//       }
//     } finally {
//       setloading(false);
//     }
//   };

//   useEffect(() => {
//     let successTimer;
//     let errorTimer;

//     if (submitted) {
//       successTimer = setTimeout(() => {
//         navigate('/main', {
//           state: { name, email, number, department, matric, level },
//         });
//       }, 2000);
//     }

//     if (error) {
//       errorTimer = setTimeout(() => {
//         seterror('');
//       }, 3000);
//     }

//     return () => {
//       clearTimeout(successTimer);
//       clearTimeout(errorTimer);
//     };
//   }, [submitted, error, name, email, number, department, matric, level, navigate]);

//   return (
//     <div className='flex relative h-screen'>
//       {/* first container */}
//       <div className="relative w-[35%] h-screen"> 
//         <img src={bu4} alt="img" className="w-full h-full object-cover" loading="eager" />
//       </div>

//       {/* second container */}
//       <div className="w-[65%] px-[100px]">
//         <div className="flex justify-center items-center mb-1 w-full mt-3 rounded-lg">
//           <img src={babcocklogo} alt="Login Icon" className="w-16 h-16 rounded-lg" />
//         </div>
//         <div className='flex gap-2 justify-center text-center mb-5'>
//           <h2 className='font-bold text-3xl'>Create Account with</h2>
//           <h2 className='font-bold text-3xl text-gold'>Portal Pal</h2>
//         </div>

//         <form className="flex flex-col" onSubmit={handleSubmit}>
//           <label className="font-semibold text-base sm:text-lg">Name</label>
//           <input 
//             type="text"
//             value={name}
//             onChange={(e) => setname(e.target.value)}
//             placeholder="Name"
//             className="w-full p-2 rounded mt-0 mb-2 border-b-2 border-gray-300 focus:border-black outline-none"
//           />

//           <label className="font-semibold text-base sm:text-lg">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             placeholder="Email"
//             className="w-full p-2 rounded mb-1 border-b-2 border-gray-300 focus:border-black outline-none"
//           />
          
//           <label className="font-semibold text-base sm:text-lg">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//             placeholder="Password"
//             className="w-full p-2 rounded mb-1 border-b-2 border-gray-300 focus:border-black outline-none"
//           />

//           <div className='flex justify-between'>
//             <div>
//               <p className="font-semibold text-base sm:text-lg">Phone</p>
//               <input
//                 type="text"
//                 value={number}
//                 onChange={(e) => setnumber(e.target.value)}
//                 placeholder="Phone Number"
//                 className="w-[280px] p-2 rounded border-b-2 border-gray-300 focus:border-black outline-none"
//               />
//             </div>

//             <div>
//               <p className="font-semibold text-base sm:text-lg">Department</p>
//               <select  
//                 value={department}
//                 onChange={(e) => setdepartment(e.target.value)}
//                 className="w-[280px] p-2 rounded border-b-2 border-gray-300 focus:border-black outline-none"
//               >
//                 <option value="">Select Department</option>
//                 <option value="Accounting">Accounting</option>
//                 <option value="Accounting">Accounting</option>
//                 <option value="Agricultural Economics and Extension">Agricultural Economics and Extension</option>
//                 <option value="Agricultural Engineering">Agricultural Engineering</option>
//                 <option value="Agriculture">Agriculture</option>
//                 <option value="Animal Science">Animal Science</option>
//                 <option value="Banking and Finance">Banking and Finance</option>
//                 <option value="Bachelor of Laws (LL.B.)">Bachelor of Laws (LL.B.)</option>
//                 <option value="Biochemistry">Biochemistry</option>
//                 <option value="Biology">Biology</option>
//                 <option value="Business Administration">Business Administration</option>
//                 <option value="Chemistry">Chemistry</option>
//                 <option value="Civil Engineering">Civil Engineering</option>
//                 <option value="Computer Engineering">Computer Engineering</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Crop Science">Crop Science</option>
//                 <option value="Early Childhood Education">Early Childhood Education</option>
//                 <option value="Education and Biology">Education and Biology</option>
//                 <option value="Education and Chemistry">Education and Chemistry</option>
//                 <option value="Education and English Language">Education and English Language</option>
//                 <option value="Education and French">Education and French</option>
//                 <option value="Education and History">Education and History</option>
//                 <option value="Education and Mathematics">Education and Mathematics</option>
//                 <option value="Education and Physics">Education and Physics</option>
//                 <option value="Education and Political Science">Education and Political Science</option>
//                 <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
//                 <option value="English Language">English Language</option>
//                 <option value="English Literature">English Literature</option>
//                 <option value="Entrepreneurship">Entrepreneurship</option>
//                 <option value="Food Science and Technology">Food Science and Technology</option>
//                 <option value="Forestry and Wildlife Management">Forestry and Wildlife Management</option>
//                 <option value="French">French</option>
//                 <option value="History and International Studies">History and International Studies</option>
//                 <option value="Linguistics">Linguistics</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Mass Communication">Mass Communication</option>
//                 <option value="Mathematics">Mathematics</option>
//                 <option value="Mechanical Engineering">Mechanical Engineering</option>
//                 <option value="MicroBiology">MicroBiology</option>
//                 <option value="Music">Music</option>
//                 <option value="Nursing">Nursing</option>
//                 <option value="Nursing/post basic nursing">Nursing/post basic nursing</option>
//                 <option value="Nursing/Basic Nursing">Nursing/Basic Nursing</option>
//                 <option value="Philosophy">Philosophy</option>
//                 <option value="Physics">Physics</option>
//                 <option value="Public Health">Public Health</option>
//                 <option value="Religious Studies">Religious Studies</option>
//                 <option value="Statistics">Statistics</option>
//                 <option value="Theatre Arts">Theatre Arts</option>
//                 <option value="Theology">Theology</option>
//                 {/* Add more as needed */}
//               </select>
//             </div>
//           </div>

//           <div className='flex justify-between'>
//             <div>
//               <p className="font-semibold text-base sm:text-lg">Level</p>
//               <select 
//                 value={level}
//                 onChange={(e) => setlevel(e.target.value)}
//                 className="w-[280px] p-2 rounded border-b-2 border-gray-300 focus:border-black outline-none"
//               >
//                 <option value="">Select Level</option>
//                 <option value="100">100 Level</option>
//                 <option value="200">200 Level</option>
//                 <option value="300">300 Level</option>
//                 <option value="400">400 Level</option>
//                 <option value="500">500 Level</option>
//               </select>
//             </div>

//             <div>
//               <p className="font-semibold text-base sm:text-lg">Matric</p>
//               <input
//                 type="text"
//                 value={matric}
//                 onChange={(e) => setmatric(e.target.value)}
//                 placeholder="22/3478"
//                 className="w-[280px] p-2 rounded border-b-2 border-gray-300 focus:border-black outline-none"
//               />
//             </div>
//           </div>

//           <button className="flex justify-center items-center text-lg sm:text-xl mt-4 p-3 bg-darkBlue text-white rounded-lg w-full hover:opacity-90 font-bold transition duration-200">
//             Create Account
//             <img src={arrow} alt="arrow" className="ml-2 w-5 h-5" />
//           </button>
//           <div className='flex justify-center'>
//           <Link to='/terms'><p className='underline text-reds hover:text-darkBlue'>Terms and condition</p></Link>
//           </div> 
//         </form>
//       </div>

//       {loading && (
//         <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-20">
//           <div className="w-9 h-9">
//             <Lottie animationData={loadingAnimation} loop={true} />
//           </div>
//         </div>
//       )}

//       {error && (
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg z-30">
//           <p className="text-sm sm:text-base font-medium">{error}</p>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;








import { useState, useEffect } from 'react';
import arrow from './images/arrow.png';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "./config/firebase";
import { setDoc, doc } from "firebase/firestore";
import bu4 from './images/bu4.jpg';
import babcocklogo from './images/babcocklogo.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [number, setnumber] = useState('');
  const [department, setdepartment] = useState('');
  const [matric, setmatric] = useState('');
  const [level, setlevel] = useState('');
  const [submitted, setsubmitted] = useState(false);
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!name || !email || !password || !number || !department || !matric || !level) {
      toast.error("Please fill in all the fields.");
      setsubmitted(false);
      return;
    }

    if (!passwordRules.test(password)) {
      toast.error("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
      setsubmitted(false);
      return;
    }

    try {
      setloading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name, email, number, department, matric, level
        });
      }
      setloggedin(true);
      setsubmitted(true);

      // Clear form fields
      setname('');
      setemail('');
      setpassword('');
      setnumber('');
      setmatric('');
      setdepartment('');
      setlevel('');
    } catch (error) {
      console.error(error.message);
      if (error.code === 'auth/email-already-in-use') {
        toast.error("This email is already in use. Please log in or use a different email.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    let successTimer;
    let errorTimer;

    if (submitted) {
      successTimer = setTimeout(() => {
        navigate('/main', {
          state: { name, email, number, department, matric, level },
        });
      }, 2000);
    }

    if (error) {
      errorTimer = setTimeout(() => {
        seterror('');
      }, 3000);
    }

    return () => {
      clearTimeout(successTimer);
      clearTimeout(errorTimer);
    };
  }, [submitted, error, name, email, number, department, matric, level, navigate]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen w-full">
      
      {/* Left Image Panel */}
      <div className="hidden md:block md:w-[35%] h-full">
        <img src={bu4} alt="img" className="w-full h-full object-cover" loading="eager" />
      </div>

      {/* Right Form Panel */}
      <div className="w-full md:w-[65%] px-6 sm:px-12 md:px-[100px] py-2">
        <div className="flex justify-center mb-1">
          <img src={babcocklogo} alt="Logo" className="w-16 h-16 rounded-lg" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center text-center mb-5 gap-2">
          <h2 className="font-bold text-2xl sm:text-3xl">Create Account with</h2>
          <h2 className="font-bold text-2xl sm:text-3xl text-gold">Portal Pal</h2>
        </div>

        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <div>
            <label className="font-semibold">Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
            />
          </div>

          {/* Grouped Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[48%]">
              <label className="font-semibold">Phone</label>
              <input 
                type="text"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
              />
            </div>

            <div className="w-full md:w-[48%]">
              <label className="font-semibold">Department</label>
              <select
                value={department}
                onChange={(e) => setdepartment(e.target.value)}
                className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
              >
                 <option value="">Select Department</option>
//                 <option value="Accounting">Accounting</option>
//                 <option value="Accounting">Accounting</option>
//                 <option value="Agricultural Economics and Extension">Agricultural Economics and Extension</option>
//                 <option value="Agricultural Engineering">Agricultural Engineering</option>
//                 <option value="Agriculture">Agriculture</option>
//                 <option value="Animal Science">Animal Science</option>
//                 <option value="Banking and Finance">Banking and Finance</option>
//                 <option value="Bachelor of Laws (LL.B.)">Bachelor of Laws (LL.B.)</option>
//                 <option value="Biochemistry">Biochemistry</option>
//                 <option value="Biology">Biology</option>
//                 <option value="Business Administration">Business Administration</option>
//                 <option value="Chemistry">Chemistry</option>
//                 <option value="Civil Engineering">Civil Engineering</option>
//                 <option value="Computer Engineering">Computer Engineering</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Crop Science">Crop Science</option>
//                 <option value="Early Childhood Education">Early Childhood Education</option>
//                 <option value="Education and Biology">Education and Biology</option>
//                 <option value="Education and Chemistry">Education and Chemistry</option>
//                 <option value="Education and English Language">Education and English Language</option>
//                 <option value="Education and French">Education and French</option>
//                 <option value="Education and History">Education and History</option>
//                 <option value="Education and Mathematics">Education and Mathematics</option>
//                 <option value="Education and Physics">Education and Physics</option>
//                 <option value="Education and Political Science">Education and Political Science</option>
//                 <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
//                 <option value="English Language">English Language</option>
//                 <option value="English Literature">English Literature</option>
//                 <option value="Entrepreneurship">Entrepreneurship</option>
//                 <option value="Food Science and Technology">Food Science and Technology</option>
//                 <option value="Forestry and Wildlife Management">Forestry and Wildlife Management</option>
//                 <option value="French">French</option>
//                 <option value="History and International Studies">History and International Studies</option>
//                 <option value="Linguistics">Linguistics</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Mass Communication">Mass Communication</option>
//                 <option value="Mathematics">Mathematics</option>
//                 <option value="Mechanical Engineering">Mechanical Engineering</option>
//                 <option value="MicroBiology">MicroBiology</option>
//                 <option value="Music">Music</option>
//                 <option value="Nursing">Nursing</option>
//                 <option value="Nursing/post basic nursing">Nursing/post basic nursing</option>
//                 <option value="Nursing/Basic Nursing">Nursing/Basic Nursing</option>
//                 <option value="Philosophy">Philosophy</option>
//                 <option value="Physics">Physics</option>
//                 <option value="Public Health">Public Health</option>
//                 <option value="Religious Studies">Religious Studies</option>
//                 <option value="Statistics">Statistics</option>
//                 <option value="Theatre Arts">Theatre Arts</option>
//                 <option value="Theology">Theology</option>
                {/* Add more as needed */}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[48%]">
              <label className="font-semibold">Level</label>
              <select
                value={level}
                onChange={(e) => setlevel(e.target.value)}
                className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
              >
                <option value="">Select Level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
              </select>
            </div>

            <div className="w-full md:w-[48%]">
              <label className="font-semibold">Matric</label>
              <input 
                type="text"
                value={matric}
                onChange={(e) => setmatric(e.target.value)}
                placeholder="22/3478"
                className="w-full p-2 border-b-2 border-gray-300 focus:border-black outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center bg-darkBlue text-white p-3 rounded-lg font-bold text-lg hover:opacity-90 transition"
          >
            Create Account
            <img src={arrow} alt="arrow" className="ml-2 w-5 h-5" />
          </button>

          <div className="text-center mt-2">
            <Link to="/terms" className="underline text-reds hover:text-darkBlue">Terms and Conditions</Link>
          </div>
        </form>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-20">
          <div className="w-9 h-9">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Signup;
