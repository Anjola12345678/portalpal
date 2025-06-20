import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, googleProvider } from "./config/firebase";
import { signInWithPopup, fetchSignInMethodsForEmail  } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";
import back7 from './images/back7.jpg'; 
import arrow from './images/arrow.png'; 
import logo2 from './images/logo2.jpeg';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();



  const handleGoogleSignIn = async () => {
  try {
    // Open Google popup
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Check if the user is an existing user
    const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);

    // If the email has Google as a provider, it's a valid returning user
    if (signInMethods.includes('google.com')) {
      console.log('Signed in:', user.displayName);
      // Proceed with login flow
    } else {
      // Optional: Sign the user out immediately
      await auth.signOut();
      alert('Access denied. This Google account is not registered.');
    }
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back7})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 min-h-screen flex flex-col  justify-between">
        {/* Navbar */}
        <div className="flex items-center py-4 justify-between px-5 text-white">
          <div className="flex items-center gap-3">
            <img src={logo2} alt="logo" className='w-8 h-8 rounded-md'/>
            <h2 className="lg:text-3xl sm:text-xl font-bold">Portal Pal</h2>
          </div>

          <div>
          <ul className="hidden lg:flex gap-6 text-sm sm:text-base font-medium ">
            {/* <Link to='/'><li className="hover:text-blue transition cursor-pointer">Home</li></Link> */}
            {/* <Link to='/terms'><li className="hover:text-blue transition cursor-pointer">Terms</li></Link> */}
            {/* <li className="hover:text-blue transition cursor-pointer">Enterprise</li>
            <li className="hover:text-blue transition cursor-pointer">Pricing</li> */}
          </ul>
          </div>

          <div>
          <ul className="hidden lg:flex gap-6 items-center text-sm sm:text-base font-medium">
           <Link to='/terms'><li className="hover:text-blue transition cursor-pointer">Terms</li></Link>
            <Link to="/login"><li className="hover:text-blue cursor-pointer">Login</li></Link>
            <li>
              <Link to='/signup'><button className="bg-darkBlue text-white hover:bg-reds px-4 py-2 rounded-lg transition">
                Signup
              </button>
              </Link>
            </li>
          </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white text-2xl font-bold focus:outline-none"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col gap-4 bg-gray-900 bg-opacity-90 p-5 mx-4 rounded-xl text-sm font-medium text-white">
            <li className="hover:text-reds cursor-pointer">Product</li>
            <li className="hover:text-reds cursor-pointer">Solutions</li>
            <li className="hover:text-reds cursor-pointer">Enterprise</li>
            <li className="hover:text-reds cursor-pointer">Pricing</li>
            <Link to="/login"><li className="hover:text-reds cursor-pointer">Login</li></Link>
            <li>
              <Link to='/signup'><button className="bg-bluish text-white px-4 py-2 w-full rounded-full mt-2 hover:bg-reds transition">
                SignUp
              </button></Link>
            </li>
          </ul>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 px-6 md:px-20 flex-grow">
          <div className="text-white max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <button className="bg-blue hover:bg-reds px-3 py-1 text-sm rounded-full">New</button>
              <h2 className="text-[16px] font-medium">Babcock FeeGuide: Spring '25 Release</h2>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              BU Portal Pal
              <br />
              Instant help and solution.
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Find, organize, and protect your academic tasks. <br />
              With AI-powered assistance and up-to-date Babcock info,<br />
              get guidance faster and smarter.
            </p>

            <Link to='/signup'><button
              className="flex items-center bg-darkBlue px-6 py-3 mt-6 text-white rounded-lg hover:bg-reds transition">
              Register on PortalPal
              <img src={arrow} alt="arrow" className="ml-3 w-5 h-5" />
            </button></Link>
            {/* <p>Please ensure your account exists...</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



