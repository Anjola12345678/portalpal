// import facebook from './images/facebook.svg';
// import twitter from './images/twitter.svg';
// import instagram from './images/instagram.svg';
// import telegram from './images/telegram.svg';
// import bu22 from './images/bu22.jpeg';
// import phone from './images/phone.png';
// import location from './images/location.png';
// import me from './images/me.png';
// const Community = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top image with clipped bottom-right */}
//       <img
//         src={bu22}
//         alt="bu"
//         className="w-full h-[217px] brightness-70 object-cover [clip-path:polygon(0_0,100%_0,100%_80%,0%_100%)]"
//       />

//       {/* Profile picture positioned relative to the parent */}
//       <div className="relative mt-[-60px]">
//         <img
//           src={me}
//           alt="profile2"
//           className="w-[170px] h-[170px] rounded-full border-2 border-black object-cover object-[center_40%] absolute left-4 top-[-50px]  z-20"
//         />
//       </div>

//       {/* Following, Followers, Likes section */}
//       <div className="flex mt-10 justify-end w-full gap-20 pr-10">
//         <div className="flex flex-col items-center justify-center">
//           <p>Following</p>
//           <h2 className="font-bold">247</h2>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <p>Followers</p>
//           <h2 className="font-bold">57</h2>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <p>Likes</p>
//           <h2 className="font-bold">105</h2>
//         </div>
//       </div>

//       {/* About section */}
//       <div className="flex gap-20 mt-[40px] mx-10 justify-between flex-grow">
//         {/* Left info */}
//         <div>
//           <h1 className="font-bold text-2xl">Akintunde Michael</h1>
//           <p>Software Developer</p>

//           <div className="flex gap-1 mt-3">
//             <img src={phone} alt="phone" className="w-6 h-6" />
//             <p className="underline font-semibold hover:text-reds">+234-70-411-043-65</p>
//           </div>


//           <div className="flex gap-1 mt-3">
//             <img src={location} alt="location" className="w-6 h-6" />
//             <p className="underline font-semibold hover:text-reds">ILISHAN-REMO, OGUN STATE</p>
//           </div>
//         </div>

//         {/* Right about me */}
//         <div>
//           <h2 className="text-lg font-semibold">About Me</h2>
//           <p>
//             Hey, my name is Akintunde Michael Anjolaoluwa a 300 Level computer
//             science <br />
//             student from babcock university. I was able to build this project
//             during my siwes <br />
//             period in access bank company during my internship. It has being a
//             pleasure
//             <br /> working with access bank plc. I worked there as a frontend
//             developer using React.js
//             <br /> to build my project which the company also use for their's.
//           </p>

//           <h2 className='mt-3'>ME ON SOCIAL MEDIA</h2>
//            <div className="flex gap-4 mt-2">
//                             <img src={facebook} alt="facebook" className="w-7 cursor-pointer hover:brightness-75" />
//                             <img src={twitter} alt="twitter" className="w-8 cursor-pointer hover:brightness-75" />
//                             <img src={instagram} alt="instagram" className="w-7 cursor-pointer hover:brightness-75" />
//                             <img src={telegram} alt="telegram" className="w-7 cursor-pointer hover:brightness-75" />
//                         </div>
//         </div>
//       </div>

//       {/* Bottom image clipped top-left, stuck to bottom */}
//       <img
//         src={bu22}
//         alt="bu bottom"
//         className="w-full h-[70px] brightness-0 object-cover [clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)]"
//       />
//     </div>
//   );
// };

// export default Community;











import React from 'react';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';
import telegram from './images/telegram.svg';
import bu22 from './images/bu22.jpeg';
import phone from './images/phone.png';
import location from './images/location.png';
import me from './images/me.png';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Image */}
      <img
        src={bu22}
        alt="bu"
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] brightness-70 object-cover [clip-path:polygon(0_0,100%_0,100%_80%,0%_100%)]"
      />

      {/* Profile Image */}
      <div className="relative -mt-[70px] sm:-mt-[80px] md:-mt-[90px]">
        <img
          src={me}
          alt="profile"
          className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] rounded-full border-2 border-black object-cover object-[center_40%] absolute left-4 top-[-50px] z-20"
        />
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-6 sm:gap-12 mt-24 pr-0 sm:pr-10">
        <div className="flex flex-col items-center">
          <p className="text-sm sm:text-base">Following</p>
          <h2 className="font-bold text-lg sm:text-xl">247</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm sm:text-base">Followers</p>
          <h2 className="font-bold text-lg sm:text-xl">57</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm sm:text-base">Likes</p>
          <h2 className="font-bold text-lg sm:text-xl">105</h2>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-12 px-6 sm:px-10 flex-grow">
        {/* Left Info */}
        <div className="flex-1">
          <h1 className="font-bold text-xl sm:text-2xl">Akintunde Michael</h1>
          <p className="text-sm sm:text-base">Software Developer</p>

          <div className="flex items-center gap-2 mt-4">
            <img src={phone} alt="phone" className="w-5 sm:w-6 h-5 sm:h-6" />
            <p className="underline font-semibold text-sm sm:text-base hover:text-red-600">
              +234-70-411-043-65
            </p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <img src={location} alt="location" className="w-5 sm:w-6 h-5 sm:h-6" />
            <p className="underline font-semibold text-sm sm:text-base hover:text-red-600">
              ILISHAN-REMO, OGUN STATE
            </p>
          </div>
        </div>

        {/* Right About Me */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">About Me</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Hey, my name is Akintunde Michael Anjolaoluwa, a 300 Level Computer
            Science student from Babcock University. I built this project during
            my SIWES at Access Bank. It has been a pleasure working with Access Bank
            PLC as a frontend developer using React.js.
          </p>

          <h2 className="mt-4 font-semibold">ME ON SOCIAL MEDIA</h2>
          <div className="flex gap-4 mt-2">
            <img src={facebook} alt="facebook" className="w-6 sm:w-7 cursor-pointer hover:brightness-75" />
            <img src={twitter} alt="twitter" className="w-6 sm:w-7 cursor-pointer hover:brightness-75" />
            <img src={instagram} alt="instagram" className="w-6 sm:w-7 cursor-pointer hover:brightness-75" />
            <img src={telegram} alt="telegram" className="w-6 sm:w-7 cursor-pointer hover:brightness-75" />
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <img
        src={bu22}
        alt="bu bottom"
        className="w-full h-[60px] sm:h-[70px] brightness-0 object-cover [clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)] mt-10"
      />
    </div>
  );
};

export default Community;
