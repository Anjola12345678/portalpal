/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '10%': { transform: 'translateY(0)', opacity: 1 },
          '90%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '60%': { transform: 'scale(1.05)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        slideInOut: 'slideInOut 3s ease-in-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        scaleUp: 'scaleUp 0.5s ease-out',
      },
      colors: {
        brightRed: 'hsl(12, 88%, 50%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(204, 98%, 21%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        green: 'hsl(120, 61%, 34%)',
        gray: 'hsl(120, 2%, 69%)',
        grays: 'hsl(120, 2%, 54%)',
        blue: 'hsl(196, 37%, 53%)',
        whitesmoke: 'hsl(0, 0%, 82.4%)',
        black: 'hsl(0, 0%, 0%)',
        darkBlues: 'hsl(210, 100%, 31%)',
        lightblue: 'hsl(240, 100%, 58%)',
        lightorange: 'hsl(30, 79%, 57%)',
        orange: 'hsl(30, 88%, 47%)',
        blues: 'hsl(240, 100%, 50%)',
        deepBlue: 'hsl(240, 100%, 21%)',
        lightgreen: 'hsl(120, 77%, 61%)',
        cream: 'hsl(60, 100%, 93%)',
        lightcream: 'hsl(60, 100%, 96%)',
        gold: 'hsl(45, 100%, 44%)',
        blacks : 'hsl(60, 1%, 19%)',
        blackss: 'hsl(60, 3%, 15%)',
        reds: 'hsl(0, 72%, 57%)',
        whites: 'hsl(0, 0%, 96%)',
        lightred: 'hsl(0, 100%, 99%)',
        lightreds: 'hsl(10, 40%, 91%)',
        lightredss: 'hsl(10, 100%, 97%)',
        bluish: 'hsl(211, 98%, 51%)',
        lightblues: 'hsl( 201, 41, 87)',
        lightbluess: 'hsl(201, 47, 82)',
        dogerblue: 'hsl(231, 100, 61)',
        blacksss: 'hsl(0, 0%, 18.8%)',
        blackssss: 'hsl(0, 0%, 12.9%)',
        redss: 'hsl(346, 82%, 56%) ',
      },
    },
  },
  plugins: [
     
  ],
};





 // <div className="w-full">
    //   {/* Header */}
    //   <div className=" bg-whites shadow-sm md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center px-5 fixed  right-0 top-0 w-[80%] z-50">
    //     <div>
    //       <h1 className="text-2xl md:text-3xl font-semibold">Welcome to PortalPal</h1>
    //       <p className="font-medium text-gray-600">Let's solve our problem with ease</p>
    //     </div>
    //     <div className="flex items-center gap-3 mt-4 md:mt-0">
    //       <p className="font-semibold">{userdetails.name}</p>
    //       <img src={profile3} alt="profile" className="h-7 w-7 rounded-full cursor-pointer" onClick={handleprofile} />
    //     </div>
    //   </div>

    //   {/* Title */}
    //   <div className=" px-4 md:px-8 flex items-center gap-2 mt-20">
    //     <img src={bell} alt="bell" className="w-6 h-7" />
    //     <div>
    //       <h1 className="text-xl md:text-2xl font-semibold">Student Details</h1>
    //       <p className="text-gray-500 text-sm">Manage students details for security reasons</p>
    //     </div>
    //   </div>

    //   {/* Main content area */}
    //   <div className="mt-4 px-4 md:px-8 flex flex-col lg:flex-row gap-6">
    //     {/* Left Panel */}
    //     <div className="w-full lg:w-3/5 bg-white p-4 rounded-lg border border-gray">
    //       <div className="flex justify-between items-center mb-4">
    //         <h2 className="font-bold text-lg">Student Details</h2>
    //         <h1 className="text-2xl cursor-pointer">...</h1>
    //       </div>

    //       <div className="flex gap-4 items-center">
    //         <img src={profile3} alt="profile" className="w-14 h-14 rounded-full" />
    //         <div>
    //           <div className="flex flex-wrap gap-2 items-center">
    //             <h2 className="font-semibold text-lg">{userdetails.name}</h2>
    //             <p className="bg-lightgreen text-green rounded-full px-4 text-sm font-medium bg-opacity-30">Active</p>
    //           </div>
    //           <p className="text-sm text-gray-600">{userdetails.level} Level</p>
    //         </div>
    //       </div>

    //       <h1 className="text-blue-600 text-lg font-semibold mt-6 mb-2">Basic Information</h1>
    //       <hr />

    //       <div className="space-y-8 mt-6">
    //         {/* Row 1 */}
    //         <div className="flex flex-col sm:flex-row sm:gap-20 gap-4">
    //           <div className="flex-1">
    //             <div className="flex gap-2 items-center">
    //               <img src={profile4} alt="icon" className="w-6 h-6" />
    //               <h2>Name :</h2>
    //             </div>
    //             <h2 className="font-bold mt-1">{userdetails.name}</h2>
    //           </div>
    //           <div className="flex-1">
    //             <div className="flex gap-2 items-center">
    //               <img src={phone} alt="icon" className="w-6 h-6" />
    //               <h2>Phone :</h2>
    //             </div>
    //             <h2 className="font-bold mt-1">{userdetails.number}</h2>
    //           </div>
    //         </div>

    //         {/* Row 2 */}
    //         <div className="flex flex-col sm:flex-row sm:gap-20 gap-4">
    //           <div className="flex-1">
    //             <div className="flex gap-2 items-center">
    //               <img src={course} alt="icon" className="w-6 h-6" />
    //               <h2>Course :</h2>
    //             </div>
    //             <h2 className="font-bold mt-1">{userdetails.department}</h2>
    //           </div>
    //           <div className="flex-1">
    //             <div className="flex gap-2 items-center">
    //               <img src={mail1} alt="icon" className="w-6 h-6" />
    //               <h2>Email :</h2>
    //             </div>
    //             <h2 className="font-bold mt-1 ">{userdetails.email}</h2>
    //           </div>
    //         </div>

    //         {/* Row 3 */}
    //         <div className="flex flex-col sm:flex-row sm:gap-20 gap-4">
    //           <div className="flex-1">
    //             <div className="flex gap-2 items-center">
    //               <img src={course} alt="icon" className="w-6 h-6" />
    //               <h2>Level :</h2>
    //             </div>
    //             <h2 className="font-bold mt-1">{userdetails.level}</h2>
    //           </div>
    //           <div className="flex-1">
    //             <div className="flex gap-2 items-center">
    //               <img src={matric} alt="icon" className="w-6 h-6" />
    //               <h2>Matric :</h2>
    //             </div>
    //             <h2 className="font-bold mt-1">{userdetails.matric}</h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* ✅ Right Panel: Top Departments */}
    //     <div className="w-full lg:w-2/5">
    //       <ToDepartments />
    //     </div>
    //   </div>

    //   {/* Popup */}
    //   {popup && (
    //     <div className='absolute right-5 top-10 w-[350px] bg-white border border-whites rounded-lg shadow-md px-1 py-5 z-50' data-aos="fade-right">
    //       <div className='flex justify-end'>
    //         <button
    //           className='text-gray-500 hover:text-red-500 font-bold text-2xl mt-[-10px]'
    //           onClick={() => setpopup(false)}
    //         >
    //           ×
    //         </button>
    //       </div>
    //       <div className='flex items-center justify-center mb-2'>
    //         <h2 className='font-semibold text mb-4'>{userdetails.email}</h2>
    //       </div>
    //       <div className='flex justify-center mt-5'>
    //         <img src={babcocklogo} alt="image" className='w-16 h-16 rounded-full' />
    //       </div>
    //       <div className='flex justify-center '>
    //         <h2 className='font-semibold text-2xl'>Hi, {getLastName(userdetails.name)}!</h2>
    //       </div>
    //       <div className='flex justify-center mt-2'>
    //         <button className='border-[1.5px] border-gray py-2 px-3 rounded-full text-darkBlue font-semibold hover:text-white hover:bg-darkBlue hover:border-darkBlue'>
    //           Manage your PortalPal Account
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
