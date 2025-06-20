import { Routes, Route, Navigate } from 'react-router-dom';
import Details from './Details';
import Homepage from './Homepage';
import Livechat from './Livechat';
import Contact from './Contact';
import Changepassword from './Changepassword';
import Logout from './Logout';
import Community from './Community';
import Profile from './Profile';
import Faqtutorial from "./Faqtutorial";
import Faqfaq from "./Faqfaq";
import Faqhome from "./Faqhome";
import Question from './Question';

const Section2 = () => {
  return (
    <div className="h-full w-full">
      <Routes>
        {/* Make Homepage the landing page */}
        {/* <Route path="/" element={<Homepage />} /> */}
          <Route index element={<Navigate to="homepage" replace />} />
  <Route path="homepage" element={<Homepage />} />
        
        {/* Other Routes */}
        <Route path="/details" element={<Details />} />
        <Route path="/livechat" element={<Livechat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/home" element={<Logout />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />

        {/* FAQ Section */}
        <Route path="/question" element={<Navigate to="/faqhome" replace />} />  {/* Redirect /question to /faqhome */}
        <Route path="/faqhome" element={<Faqhome />} />
        <Route path="/faqfaq" element={<Faqfaq />} />
        <Route path="/faqtutorial" element={<Faqtutorial />} />
      </Routes>
    </div>
  );
};

export default Section2;
