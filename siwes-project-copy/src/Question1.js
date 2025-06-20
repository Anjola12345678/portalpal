// import { NavLink, useLocation } from 'react-router-dom';
// const Question1 = () => {
//    const location = useLocation();
//   return (
//     <div className='w-full px-3 py-[2px] shadow'>
//       <h1 className="text-2xl font-bold mb-">Welcome to PortalPal</h1>
//       {/* <p className="mb-2">Let's solve our problem with ease</p> */}

//       <div className="flex gap-6 font-semibold">
//         {/* <NavLink to="faqhome" end className={({ isActive }) =>
//           isActive ? "border-b-2 border-blue pb-1 text-blue" : "pb-1"
//         }>
//           Home
//         </NavLink> */}
//         <NavLink
//   to="faqhome"
//   className={({ isActive }) =>
//     isActive ? 'border-b-2 border-blue pb-1 text-blue' : 'pb-1'
//   }
// >
//   Home
// </NavLink>


//         <NavLink to="faqfaq" className={({ isActive }) =>
//           isActive ? "border-b-2 border-blue pb-1 text-blue" : "pb-1"
//         }>
//           FAQ
//         </NavLink>
//         <NavLink to="faqtutorial" className={({ isActive }) =>
//           isActive ? "border-b-2 border-blue pb-1 text-blue" : "pb-1"
//         }>
//           Tutorial
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Question1;





import { NavLink, useLocation } from 'react-router-dom';

const Question1 = () => {
  const location = useLocation();

  return (
    <div className="w-full px-3 py-[2px] shadow">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2 text-center sm:text-left">
        Welcome to PortalPal
      </h1>

      {/* Horizontal Nav Links, centered on small screens */}
      <div className="flex gap-6 font-semibold justify-center sm:justify-start">
        <NavLink
          to="faqhome"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-blue pb-1 text-blue'
              : 'pb-1'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="faqfaq"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-blue pb-1 text-blue'
              : 'pb-1'
          }
        >
          FAQ
        </NavLink>

        <NavLink
          to="faqtutorial"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-blue pb-1 text-blue'
              : 'pb-1'
          }
        >
          Tutorial
        </NavLink>
      </div>
    </div>
  );
};

export default Question1;
