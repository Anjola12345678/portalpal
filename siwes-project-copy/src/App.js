import { Routes, Route , Navigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Login from './Login';
import Details from './Details';
import Homepage from './Homepage';
import Contact from './Contact';
import Changepassword from './Changepassword';
import Signup from './Signup';
import Message from './Message';
import Community from './Community';
import Question from './Question'; 
import Faqhome from './Faqhome';
import Faqfaq from './Faqfaq';
import Faqtutorial from './Faqtutorial';
import ToDepartments from './ToDepartments';
import Terms from './Terms';
import Chat from './Chat';
import './style.css'; 
import Main from './Main';


function App() {
  return (
    
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="message" element={<Message />} />
        <Route path="terms" element={<Terms />} />
        <Route path="todepartments" element={<ToDepartments />} />

        {/* Main Layout */} 
        <Route path="/main" element={<Main />}>
          {/* Static pages */}
          <Route index element={<Navigate to="homepage" replace />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="details" element={<Details />} />
           <Route path="chat" element={<Chat />} />
          <Route path="contact" element={<Contact />} />
          <Route path="changepassword" element={<Changepassword />} />
          <Route path="community" element={<Community />} />
         
          

          {/* QA (Question) page with nested layout */}
          <Route path="question" element={<Question />}>
           <Route index element={<Navigate to="faqhome" replace />} />
    
           <Route path="faqhome" element={<Faqhome />} />
            <Route path="faqfaq" element={<Faqfaq />} />
            <Route path="faqtutorial" element={<Faqtutorial />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
