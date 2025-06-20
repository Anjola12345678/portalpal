// import React, { useState } from 'react';
// import Section1 from './Section1';
// import { Outlet } from 'react-router-dom'; // Add this import

// const Main = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="flex h-screen w-full overflow-hidden">
//       {/* Sidebar */}
//       <Section1 isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

//       {/* Toggle Menu Button */}
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden fixed top-4 left-4 z-50 bg-blackss text-white p-2 rounded"
//       >
//         ☰ Menu
//       </button>

//       {/* Main Content Area (Section2) */}
//       <div className="flex-1 h-full overflow-y-auto">
//         <Outlet /> {/* Renders nested routes like Homepage, Question (QA), etc. */}
//       </div>
//     </div>
//   );
// };

// export default Main;



import React, { useState } from 'react';
import Section1 from './Section1';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <Section1
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        toggleSidebar={toggleSidebar}
      />

      {/* Toggle Menu Button – Hidden when sidebar is open */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-3 left-1 z-50 bg-blackss text-white p-2 rounded"
        >
          ☰ Menu
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;



//   useEffect(() =>{
//    GetData();
//   }, [])

//   const GetData = () =>{
//      axios
//      .get('http://localhost:3001/contacts')
//      .then((res) =>{
//       setContacts(res.data)
//       console.log(res.data)
//      } )
//      .catch((error) =>{
//       console.log(error);
//      })
//   }

//   //to put data
//   axios
//   .post('http://localhost:3001/contacts', {
//     email : 'anjolaoluwa'
//   })
//   .then((res) => {
//     setContacts([...contacts, res.data])
//     GetData();
//   })
//   .catch((err) => console.log(err));