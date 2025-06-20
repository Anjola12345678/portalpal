// import { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// const faqData = [
//    { question: "What is BU Portal Pal?", answer: "BU Portal Pal is a smart assistant built to help Babcock University students easily get answers to school-related questions. Whether you're struggling with registration, trying to understand how to pay fees, or looking for your course form, the Portal Pal provides clear instructions and AI support to guide you through the process." },
//    { question: "How does the live chat work?", answer: "The live chat connects you with an AI-powered assistant that can answer your questions in real-time. You can ask about how to register, make payments, get course forms, or anything else related to student life at Babcock. It's available 24/7 to support your academic journey." },
//    { question: "Is my data secure?", answer: "Yes, your data is handled securely. BU Portal Pal is designed to maintain student privacy and follows strict data protection rules. No sensitive information is shared or stored outside of your browser or approved university systems." },
//    { question: "How do I pay my school fees?", answer: "To pay your fees, you must use your personal e-transact number, which is unique to you. You can go to any bank and request to make a payment to your e-transact account, or you can pay online using your debit card. After payment, it may take some time for the transaction to reflect on your student portal, so be patient and check back later." },
//    { question: "Why can't I register for the semester?", answer: "Before you can register successfully, you must select your meal type, church, and hostel. These are required fields in the portal, and registration cannot proceed without them. Once selected, you can then proceed to submit your registration and begin the semester officially." },
//    { question: "When can I submit my course registration?", answer: "After you've selected your courses during the registration process, you must wait for your course advisor to approve them. Once approval is granted, you’ll be able to submit the course registration officially. If you haven’t received approval, you won’t be able to complete the submission process." },
//    { question: "Why is the course form section blank?", answer: "The course form will only be available after you've completed key steps such as selecting your meal type, hostel, and church, and getting financial and advisor approval. If you've done all these but the form is still blank, try refreshing the portal or checking again later, as it may take time to update." },
//    { question: "How do I get financial approval?", answer: "Financial approval is automatically granted once your school fees payment is confirmed in the system. Make sure you pay through your unique e-transact number either at the bank or online. After payment, wait for it to reflect. If you still don’t see financial clearance, contact the finance department for help." },
//    { question: "How do I write online exams?", answer: "To write your online GEDS exams, log into your student portal, then go to the Courses section on the sidebar. There, you'll find an 'Online Exam' button next to the applicable courses. Follow the instructions and terms provided to take your exam. Make sure your device is ready and your internet connection is stable." },
//    { question: "What happens if my payment doesn’t reflect?", answer: "If your payment doesn’t reflect immediately, don’t panic. It can take a few hours or even up to 24 hours for transactions to update in the system. If it still doesn't appear after a day, ensure your payment details were correct and then contact the Bursary or ICT department for help resolving the issue." },
//    { question: "What should I do if I can't submit registration?", answer: "Make sure you've selected all required fields like meal type, hostel, and church. These selections must be completed before the portal allows you to submit your semester registration. If the problem persists after making those selections, try refreshing the page or logging in again later." },
//    { question: "Can I change my meal type after registration?", answer: "Once you've submitted your registration, changing your meal type becomes more difficult and may require administrative approval. If you need to change it for health or personal reasons, reach out to the registrar or student affairs office with a valid reason and request for change." },
//    { question: "How do I know if my course advisor has approved my registration?", answer: "You can check your portal for status updates. If your advisor has approved your registration, you’ll typically be allowed to download your course form or proceed with other academic steps. If not, try contacting your advisor directly to remind them to review and approve your courses." }
//  ];

// const Faqfaq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   // 🔧 Define the function here
//   const toggleAnswer = (index) => {
//     setOpenIndex(prevIndex => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="px-3">
//     {/* first div */}
//     <div className='justify-center items-center text-center'>
//      <h1 className='font-bold text-4xl mb-3'>Frequently asked questions</h1>
//      <p className=''>Those are the most commonly asked questions about <span className='text-reds font-semibold'>PortalPal</span></p>
//      <p>Can't find what your looking for? <Link className='underline hover:text-reds' to='/main/contact'>Chat our friendly team!</Link></p>
//     </div>


//       {/* second div */}
//       <div className=" p-4  mx-24 mt-10">
//         {/* <h2 className="text-3xl font-bold mb-6">General</h2> */}
//         {/* <p className='mb-20'>if you have questions, we have answers for you here. In case we don't, please feel free to reach out to us through the contact page where you can send a direct message to us...<Link to='/main/contact' className='text-reds'>contact</Link></p> */}
//         {faqData.map((item, index) => (
//           <div key={index} className="mb-4 border-b pb-3">
//             <button
//               onClick={() => toggleAnswer(index)}
//               className="w-full text-left text-lg font-medium flex justify-between items-center"
//             >
//               {item.question}
//               <span>{openIndex === index ? '−' : '+'}</span>
//             </button>
//             {openIndex === index && (
//               <div className="mt-2">{item.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faqfaq;







import { useState } from 'react';
import { Link } from 'react-router-dom';
const faqData = [
    { question: "What is BU Portal Pal?", answer: "BU Portal Pal is a smart assistant built to help Babcock University students easily get answers to school-related questions. Whether you're struggling with registration, trying to understand how to pay fees, or looking for your course form, the Portal Pal provides clear instructions and AI support to guide you through the process." },
    { question: "How does the live chat work?", answer: "The live chat connects you with an AI-powered assistant that can answer your questions in real-time. You can ask about how to register, make payments, get course forms, or anything else related to student life at Babcock. It's available 24/7 to support your academic journey." },
    { question: "Is my data secure?", answer: "Yes, your data is handled securely. BU Portal Pal is designed to maintain student privacy and follows strict data protection rules. No sensitive information is shared or stored outside of your browser or approved university systems." },
    { question: "How do I pay my school fees?", answer: "To pay your fees, you must use your personal e-transact number, which is unique to you. You can go to any bank and request to make a payment to your e-transact account, or you can pay online using your debit card. After payment, it may take some time for the transaction to reflect on your student portal, so be patient and check back later." },
    { question: "Why can't I register for the semester?", answer: "Before you can register successfully, you must select your meal type, church, and hostel. These are required fields in the portal, and registration cannot proceed without them. Once selected, you can then proceed to submit your registration and begin the semester officially." },
    { question: "When can I submit my course registration?", answer: "After you've selected your courses during the registration process, you must wait for your course advisor to approve them. Once approval is granted, you’ll be able to submit the course registration officially. If you haven’t received approval, you won’t be able to complete the submission process." },
    { question: "Why is the course form section blank?", answer: "The course form will only be available after you've completed key steps such as selecting your meal type, hostel, and church, and getting financial and advisor approval. If you've done all these but the form is still blank, try refreshing the portal or checking again later, as it may take time to update." },
    { question: "How do I get financial approval?", answer: "Financial approval is automatically granted once your school fees payment is confirmed in the system. Make sure you pay through your unique e-transact number either at the bank or online. After payment, wait for it to reflect. If you still don’t see financial clearance, contact the finance department for help." },
    { question: "How do I write online exams?", answer: "To write your online GEDS exams, log into your student portal, then go to the Courses section on the sidebar. There, you'll find an 'Online Exam' button next to the applicable courses. Follow the instructions and terms provided to take your exam. Make sure your device is ready and your internet connection is stable." },
    { question: "What happens if my payment doesn’t reflect?", answer: "If your payment doesn’t reflect immediately, don’t panic. It can take a few hours or even up to 24 hours for transactions to update in the system. If it still doesn't appear after a day, ensure your payment details were correct and then contact the Bursary or ICT department for help resolving the issue." },
    { question: "What should I do if I can't submit registration?", answer: "Make sure you've selected all required fields like meal type, hostel, and church. These selections must be completed before the portal allows you to submit your semester registration. If the problem persists after making those selections, try refreshing the page or logging in again later." },
    { question: "Can I change my meal type after registration?", answer: "Once you've submitted your registration, changing your meal type becomes more difficult and may require administrative approval. If you need to change it for health or personal reasons, reach out to the registrar or student affairs office with a valid reason and request for change." },
    { question: "How do I know if my course advisor has approved my registration?", answer: "You can check your portal for status updates. If your advisor has approved your registration, you’ll typically be allowed to download your course form or proceed with other academic steps. If not, try contacting your advisor directly to remind them to review and approve your courses." }
  ];

const Faqfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className='text-center max-w-4xl mx-auto mt-8'>
        <h1 className='font-bold text-3xl sm:text-4xl mb-3'>Frequently Asked Questions</h1>
        <p className='text-base sm:text-lg'>
          These are the most commonly asked questions about <span className='text-reds font-semibold'>PortalPal</span>.
        </p>
        <p className="text-sm sm:text-base mt-1">
          Can’t find what you're looking for? <Link className='underline hover:text-reds' to='/main/contact'>Chat our friendly team!</Link>
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-10 max-w-4xl mx-auto px-2 sm:px-4">
        {faqData.map((item, index) => (
          <div key={index} className="mb-5 border-b pb-3">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-[16px] sm:text-lg font-medium flex justify-between items-center"
            >
              <span>{item.question}</span>
              <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqfaq;
