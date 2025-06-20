// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo2 from './images/logo2.jpeg';

// const Terms = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <div className=''>
//             {/* px-4 sm:px-8 md:px-14 */}
//             {/* nav bar */}
//             <div className='flex py-5 justify-between items-center bg-whitesmoke w-full px-5 fixed top-0'>
//                 {/* logo */}
//                 <div className='flex items-center gap-2 sm:gap-4'>
//                     <img src={logo2} alt='logo' className='w-6 h-6 rounded-sm' />
//                     <h3 className='font-semibold text-lg sm:text-base'>PORTALPAL</h3>
//                 </div>

//                 {/* desktop nav links */}
//                 <div className='hidden md:flex'>
//                     <ul className='flex gap-6 lg:gap-8 text-sm sm:text-base'>
//                        <Link to='/'><li className='hover:text-bluish cursor-pointer text-lg'>Home</li></Link>
//                         <li className='hover:text-bluish cursor-pointer text-lg'>Services</li>
//                         <li className='hover:text-bluish cursor-pointer text-lg'>Blog</li>
//                         <li className='hover:text-bluish cursor-pointer text-lg'>Resources</li>
//                     </ul>
//                 </div>

//                 {/* auth links */}
//                 <div className='hidden md:flex gap-4 lg:gap-8 items-center text-sm sm:text-base'>
//                     <Link to='/login' className='hover:text-bluish cursor-pointer text-lg'><p>Login</p></Link>
//                     <Link to='/signup' className='hover:bg-reds bg-bluish px-4 py-1 rounded-md text-white'><p>Sign-Up</p></Link>
//                 </div>

//                 {/* hamburger menu */}
//                 <div className='md:hidden'>
//                     <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
//                         ☰
//                     </button>
//                 </div>
//             </div>

//             {/* mobile menu */}
//             {menuOpen && (
//                 <div className='md:hidden flex flex-col gap-4 mt-[80px] text-sm'>
//                     <ul className='flex flex-col gap-3'>
//                         <li className='hover:text-bluish cursor-pointer'>Home</li>
//                         <li className='hover:text-bluish cursor-pointer'>Services</li>
//                         <li className='hover:text-bluish cursor-pointer'>Blog</li>
//                         <li className='hover:text-bluish cursor-pointer'>Resources</li>
//                     </ul>
//                     <div className='flex flex-col gap-2'>
//                         <Link to='/login' className='hover:text-bluish cursor-pointer'><p>Login</p></Link>
//                         <Link to='/signup' className='hover:bg-reds bg-bluish px-4 py-1 rounded-md text-white text-center'><p>Sign-Up</p></Link>
//                     </div>
//                 </div>
//             )}


//             {/* terms section */}
//             <div className='mt-[100px] px-4 sm:px-8 md:px-10 '>
//                 <h1 className='font-semibold text-2xl sm:text-3xl'>Terms of Service</h1>
//                 <h3 className='mt-4 font-semibold'>AGREEMENT OF TERMS</h3>
//                 <p className='mt-3 text-sm sm:text-base'>
//                     These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity you and Space we, concerning your access to and use of the space.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
//                 </p>
//                 <p className='mt-3 text-sm sm:text-base'>
//                     You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
//                 </p>

//                 <h3 className='mt-7 font-semibold'>USER REPRESENTATIONS</h3>
//                 <p className='mt-3 mb-3'>By using the site, you represent and warrant that :</p>

//                 <ul className='text-sm sm:text-base   space-y-1'>
//                     <li>1. All registration information you submit will be true, accurate, current, and complete;</li>
//                     <li>2. You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
//                     <li>3. You have the legal capacity and you agree to comply with these Terms of Service;</li>
//                     <li>4. You are not a minor in the jurisdiction in which you reside;</li>
//                     <li>5. You will not access the site through automated or non-human means, whether through a bot, script, or otherwise.</li>
//                 </ul>

//                 <p className='mt-5 text-sm sm:text-base'>
//                     If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of <span className='text-reds font-semibold'>PORTALPAL</span> (or any portion thereof).
//                 </p>

//                 {/* buttons */}
//                 <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 mt-10 mb-10'>
//                     <button className='bg-white px-5 py-2 text-black rounded-lg border'>Not, right now</button>
//                     <button className='bg-bluish px-5 py-2 text-white hover:bg-reds rounded-lg border'>I agree with terms</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Terms;









import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from './images/logo2.jpeg';

const Terms = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-whitesmoke z-50 px-4 sm:px-8 md:px-14 py-4 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img src={logo2} alt="logo" className="w-6 h-6 rounded-sm" />
          <h3 className="font-semibold text-lg sm:text-xl">PORTALPAL</h3>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm sm:text-base">
          <ul className="flex gap-6 lg:gap-8">
            {/* <Link to="/"><li className="hover:text-bluish text-lg cursor-pointer">Home</li></Link> */}
            {/* <li className="hover:text-bluish text-lg cursor-pointer">Services</li>
            <li className="hover:text-bluish text-lg cursor-pointer">Blog</li>
            <li className="hover:text-bluish text-lg cursor-pointer">Resources</li> */}
          </ul>
          <div className="flex gap-4">
             <Link to="/" className="hover:text-bluish text-lg cursor-pointer">Home</Link>
            <Link to="/login" className="hover:text-bluish text-lg">Login</Link>
            <Link to="/signup" className="bg-bluish hover:bg-reds text-white px-4 py-1 rounded-md text-lg">Sign-Up</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white mt-[70px] px-4 pb-4 shadow-md z-40 relative">
          <ul className="flex flex-col gap-3 mb-4">
            <li className="hover:text-bluish cursor-pointer">Home</li>
            {/* <li className="hover:text-bluish cursor-pointer">Services</li>
            <li className="hover:text-bluish cursor-pointer">Blog</li>
            <li className="hover:text-bluish cursor-pointer">Resources</li> */}
          </ul>
          <div className="flex flex-col gap-3">
            <Link to="/login" className="hover:text-bluish text-lg">Login</Link>
            <Link to="/signup" className="bg-bluish hover:bg-reds text-white px-4 py-2 rounded-md text-center text-lg">Sign-Up</Link>
          </div>
        </div>
      )}

      {/* Terms Section */}
      <main className="pt-[90px] px-4 sm:px-8 md:px-14 pb-10 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Terms of Service</h1>

        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">AGREEMENT OF TERMS</h3>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and PORTALPAL (“we,” “us” or “our”), concerning your access to and use of the portalpal.com website as well as any other media form, channel, mobile website or application related thereto (collectively, the “Site”).
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              By accessing the Site, you agree to be bound by these Terms of Service. If you do not agree, you are expressly prohibited from using the Site and must discontinue use immediately.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-6">USER REPRESENTATIONS</h3>
            <p className="mt-3 text-sm sm:text-base">By using the site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-sm sm:text-base">
              <li>All registration information you submit is true, accurate, and complete.</li>
              <li>You will maintain the accuracy of such information and update it as necessary.</li>
              <li>You have the legal capacity and agree to comply with these Terms.</li>
              <li>You are not a minor in your jurisdiction.</li>
              <li>You will not access the site via automated or non-human means (e.g., bots).</li>
            </ul>
          </div>

          <p className="mt-6 text-sm sm:text-base">
            If you provide false, inaccurate, or incomplete information, we reserve the right to suspend or terminate your account and deny current or future access to <span className="text-reds font-semibold">PORTALPAL</span>.
          </p>
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-white border border-gray-400 px-6 py-2 rounded-md text-sm sm:text-base hover:bg-gray-100">
            Not right now
          </button>
          <button className="bg-bluish hover:bg-reds text-white px-6 py-2 rounded-md text-sm sm:text-base">
            I agree with terms
          </button>
        </div>
      </main>
    </div>
  );
};

export default Terms;
