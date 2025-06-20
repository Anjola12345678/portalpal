// import { useEffect, useRef, useState } from 'react';
// import ailogo from './images/ailogo.png';
// import emoji from './images/emoji.png';
// import send1 from './images/send1.png';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// const aiAvatar = ailogo; // AI avatar image
// const userAvatar = emoji; // User avatar image

// const Chat = () => {
//   const [message, setmessage] = useState([]);
//   const [input, setinput] = useState('what is ai');
//   const [loading, setloading] = useState(false);
//   const bottomRef = useRef(null); // scroll target ref
//   const containerRef = useRef(null); // chat container ref
//   const [currentTime, setCurrentTime] = useState('');

//   // State to control auto-scroll: only scroll if user is near bottom before new message
//   const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

//   // Handle sending message
//   const handlesendmessage = async () => {
//     if (input.trim()) {
//       const newmessages = [...message, { text: input, user: true }];
//       setmessage(newmessages);
//       setinput('');

//       try {
//         setloading(true);
//         const response = await axios.post(
//           'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDmwAGdVEsWbYvoOvWMNUxrsL7mQsuQmyU',
//           {
//             contents: [
//               {
//                 parts: [{ text: input }],
//               },
//             ],
//           }
//         );

//         const botresponse = response.data.candidates[0].content.parts[0].text;
//         setmessage([...newmessages, { text: botresponse, user: false }]);
//       } catch (error) {
//         console.log('Error sending message:', error);
//         setmessage([
//           ...newmessages,
//           { text: 'Error: could not get response from AI', user: false },
//         ]);
//       } finally {
//         setloading(false);
//       }
//     }
//   };

//   // Scroll handler to detect if user is near bottom
//   const handleScroll = () => {
//     if (!containerRef.current) return;
//     const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
//     const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
//     setAutoScrollEnabled(isNearBottom);
//   };

//   // Auto-scroll effect only if user near bottom before
//   useEffect(() => {
//     if (autoScrollEnabled) {
//       bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [message, loading, autoScrollEnabled]);

//   // Update current time every minute
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen ">
//       {/* Header */}
//       <div className="pt-1 shadow-xl flex items-center justify-between bg-blacksss">
//         <div className="flex gap-3">
//           <img src={ailogo} alt="AI logo" className="w-8 h-8 ml-3 mt-2" />
//           <div>
//             <div className="font-bold text-3xl text-white">PortalPal</div>
//             <p className="text-white">{currentTime}</p>
//           </div>
//         </div>
//         <div className="text-lg text-white mr-3 ">Online</div>
//       </div>

//       {/* Chat messages container */}
// <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-whites">
//   {message.map((msg, index) => (
//     <div
//       key={index}
//       className={`flex items-start ${msg.user ? 'justify-end' : 'justify-start'}`}
//     >
//       {/* AI avatar on left for AI messages */}
//       {!msg.user && (
//         <img
//           src={aiAvatar}
//           alt="AI"
//           className="w-8 h-8 rounded-full mr-2 mt-1 flex-shrink-0"
//         />
//       )}

//       <div
//         className={`max-w-xs md:max-w-md p-3 rounded-xl text-sm shadow break-words ${
//           msg.user
//             ? 'bg-blackss text-whites rounded-br-none '
//             : 'bg-whitesmoke text-black rounded-bl-none'
//         }`}
//       >
//         <ReactMarkdown
//           components={{
//             code({node, inline, className, children, ...props}) {
//               return !inline ? (
//                 <pre
//                   className="overflow-x-auto whitespace-pre bg-gray-100 p-2 rounded text-xs"
//                   {...props}
//                 >
//                   <code>{children}</code>
//                 </pre>
//               ) : (
//                 <code className={className} {...props}>
//                   {children}
//                 </code>
//               );
//             },
//           }}
//         >
//           {msg.text}
//         </ReactMarkdown>
//       </div>

//       {/* User avatar on right for user messages */}
//       {msg.user && (
//         <img
//           src={userAvatar}
//           alt="User"
//           className="w-8 h-8 rounded-full ml-2 mt-1 flex-shrink-0"
//         />
//       )}
//     </div>
//   ))}
//   {loading && <div className="text-grays text-sm italic">Loading...</div>}
//   <div ref={bottomRef} /> {/* 👈 scroll target */}
// </main>




//       {/* Footer */}
//       <footer className="border-t p-[6.6px] flex items-center gap-2 pt-[22.8px] bg-blackss">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="flex-1 p-2 bg-blackss text-white border-none focus:outline-none focus:border-none"
//           value={input}
//           onChange={(e) => setinput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handlesendmessage()}
//         />
//         <img
//           src={send1}
//           alt="Send"
//           className="w-9 h-9 mr-2 cursor-pointer mb-[15px]"
//           onClick={handlesendmessage}
//         />
//       </footer>
//     </div>
//   );
// };

// export default Chat;









// import React, { useState, useEffect, useRef } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import ReactMarkdown from 'react-markdown';
// import ailogo from './images/ailogo.png';
// import usericon from './images/emoji.png';
// import send1 from './images/send1.png';

// // const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
// const genAI = new GoogleGenerativeAI('AIzaSyDmwAGdVEsWbYvoOvWMNUxrsL7mQsuQmyU');
//  // Replace with your Gemini API key

// const systemInstructions = `
// You are PortalPal, an AI assistant for Babcock University students. Provide answers based on university policies, the student portal, and other school services.
// `;

// const knowledgeBase = `
// Babcock University is a private Christian co-educational Nigerian university owned and operated by the Seventh-day Adventist Church in Nigeria. It offers programs in Law, Medicine, Public Health, Computer Science, and more.
// The school portal can be accessed via portal.babcock.edu.ng for registration, fees, and results.
// Students must complete financial clearance, select meal type, hostel, and church preferences before full registration.
// Payment is made via e-transact or online with your student ID. Contact bursary if payments don’t reflect within 24 hours.
// `;

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef(null);
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleSend = async () => {
//     if (!input.trim()) return;
//     const userMessage = { text: input, user: true };
//     const newMessages = [...messages, userMessage];
//     setMessages(newMessages);
//     setInput('');

//     try {
//       setLoading(true);
//       console.log("Gemini API key:", process.env.REACT_APP_GEMINI_API_KEY);

//       const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

//       const context = [
//         { role: "system", parts: [{ text: systemInstructions + "\n" + knowledgeBase }] },
//         ...chatHistory,
//         { role: "user", parts: [{ text: input }] },
//       ];

//       const result = await model.generateContent({ contents: context });
//       const response = result.response.candidates?.[0]?.content.parts?.[0]?.text ?? "No response from Gemini.";
//       const botMessage = { text: response, user: false };

//       setMessages(prev => [...prev, botMessage]);
//       setChatHistory(prev => [...context, { role: "model", parts: [{ text: response }] }]);
//     } catch (error) {
//       console.error(error);
//       setMessages(prev => [...prev, { text: "Something went wrong.", user: false }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') handleSend();
//   };

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       {/* Header */}
//       <div className="bg-black p-4 text-white font-bold text-xl">PortalPal</div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg, i) => (
//           <div key={i} className={`flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
//             {!msg.user && <img src={ailogo} alt="AI" className="w-8 h-8 mr-2" />}
//             <div className={`p-3 rounded-lg max-w-md shadow text-sm ${msg.user ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
//               <ReactMarkdown>{msg.text}</ReactMarkdown>
//             </div>
//             {msg.user && <img src={usericon} alt="User" className="w-8 h-8 ml-2" />}
//           </div>
//         ))}
//         {loading && <div className="text-gray-500 italic">Thinking...</div>}
//         <div ref={bottomRef} />
//       </div>

//       {/* Footer */}
//       <div className="flex p-3 border-t bg-white">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Ask me anything about Babcock..."
//           className="flex-1 p-2 border border-gray-300 rounded-lg outline-none"
//         />
//         <button onClick={handleSend} className="ml-2">
//           <img src={send1} alt="Send" className="w-8 h-8" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;











import React, { useState, useEffect, useRef } from 'react'; 
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import ailogo from './images/ailogo.png';
import usericon from './images/emoji.png';
import send1 from './images/send1.png';

// Initialize Gemini API client with your API key
const genAI = new GoogleGenerativeAI('AIzaSyDmwAGdVEsWbYvoOvWMNUxrsL7mQsuQmyU');

// Your assistant's instructions and knowledge base as plain text
const systemInstructions = `
You are PortalPal, an AI assistant for Babcock University students. Provide answers based on university policies, the student portal, and other school services.
`;

const knowledgeBase = `
Babcock University is a private Christian co-educational Nigerian university owned and operated by the Seventh-day Adventist Church in Nigeria. It offers programs in Law, Medicine, Public Health, Computer Science, and more.
The school portal can be accessed via portal.babcock.edu.ng for registration, fees, and results.
Students must complete financial clearance, select meal type, hostel, and church preferences before full registration.
Payment is made via e-transact or online with your student ID. Contact bursary if payments don’t reflect within 24 hours.
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]); // stores conversation as {role, parts}

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };
    setMessages((prev) => [...prev, userMessage]);

    // Build prompt string including systemInstructions, knowledgeBase, and full chat history
    let prompt = systemInstructions.trim() + "\n\n" + knowledgeBase.trim() + "\n\n";

    // Append prior conversation with role labels
    chatHistory.forEach((msg) => {
      if (msg.role === "user") {
        prompt += `User: ${msg.parts[0].text}\n`;
      } else if (msg.role === "assistant") {
        prompt += `AI: ${msg.parts[0].text}\n`;
      }
    });

    // Append current user input and prepare for AI reply
    prompt += `User: ${input}\nAI:`;

    setLoading(true);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });

      const botResponse =
        result.response.candidates?.[0]?.content.parts?.[0]?.text ||
        "Sorry, I couldn't get a response.";

      const botMessage = { text: botResponse, user: false };
      setMessages((prev) => [...prev, botMessage]);

      // Update chat history with user and assistant messages for next context
      setChatHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: input }] },
        { role: "assistant", parts: [{ text: botResponse }] },
      ]);
    } catch (error) {
      console.error("Error from Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, something went wrong.", user: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      {/* <div className="bg-black p-4 text-white font-bold text-xl">PortalPal</div> */}
      <div className="bg-blackss p-4 py-[28.3px] text-white font-bold text-xl text-center sm:text-left">PortalPal</div>


      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
            {!msg.user && <img src={ailogo} alt="AI" className="w-8 h-8 mr-2" />}
            <div className={`p-3 rounded-lg max-w-md shadow text-sm ${msg.user ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
            {msg.user && <img src={usericon} alt="User" className="w-8 h-8 ml-2" />}
          </div>
        ))}
        {loading && <div className="text-gray-500 italic">Loading...</div>}
        <div ref={bottomRef} />
      </div>

      {/* Footer */}
      <div className="flex p-3 py-[19.2px] border-t bg-blackss">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about Babcock..."
          className="flex-1 p-2  rounded-lg outline-none text-white bg-blackss"
        />
        <button onClick={handleSend} className="ml-2">
          <img src={send1} alt="Send" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
