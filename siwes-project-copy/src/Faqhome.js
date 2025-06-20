// import question from './images/question.png';
// const Faqhome = () =>{
//     return(
//         <div>
//         {/* Home Section */}
//         <div className="w-full px-3">
//           <div className=' p-3  px-6 text- pb-[75px]'>
//             <p>FAQ</p>
//             <h1 className='font-bold text-6xl'>Let's talk about<br />PortalPal</h1>
//             <div className='flex gap-3'>
//               <p className='mt-7'>
//                 FAQs (Frequently Asked Questions) are designed to give quick answers to common student issues. They help you understand how to navigate the Babcock University portal with ease. From registration challenges to payment procedures, the FAQ section covers it all. It's especially helpful for first-time users who might feel overwhelmed by the process. 
//               </p>
//               <img src={question} alt="question" className='w-[500px] h-[400px] mt-[-150px]' />
//             </div>
//           </div>
//         </div>

//         </div>
//     )
// }
// export default Faqhome;








// import question from './images/question.png';

// const Faqhome = () => {
//   return (
//     <div className="w-full px-4">
//       {/* Home Section */}
//       <div className="p-4 md:px-6 pb-20">
//         <p className="text-sm md:text-base">FAQ</p>

//         <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-4">
//           Let's talk about <br /> PortalPal
//         </h1>

//         <div className="flex flex-col md:flex-row gap-6 items-center">
//           {/* Text Section */}
//           <p className="text-base md:text-lg md:w-1/2">
//             FAQs (Frequently Asked Questions) are designed to give quick answers to common student issues. They help you understand how to navigate the Babcock University portal with ease. From registration challenges to payment procedures, the FAQ section covers it all. It's especially helpful for first-time users who might feel overwhelmed by the process.
//           </p>

//           {/* Image Section */}
//           <img
//             src={question}
//             alt="question"
//             className="w-full md:w-[400px] lg:w-[500px] h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faqhome;







import question from './images/question.png';

const Faqhome = () => {
  return (
    <div className="w-full px-4">
      {/* Home Section */}
      <div className="p-4 md:px-6 pb-20">
        <p className="text-sm md:text-base">FAQ</p>

        <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-6">
          Let's talk about <br /> PortalPal
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start">
          {/* Text */}
          <p className="text-base md:text-lg lg:w-1/2">
            FAQs (Frequently Asked Questions) are designed to give quick answers to common student issues.
            They help you understand how to navigate the Babcock University portal with ease.
            From registration challenges to payment procedures, the FAQ section covers it all.
            It's especially helpful for first-time users who might feel overwhelmed by the process.
          </p>

          {/* Image */}
          <img
            src={question}
            alt="question"
            className="w-full sm:w-[400px] lg:w-[500px] h-auto object-contain mt-6 lg:mt-[-150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Faqhome;
