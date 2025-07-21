import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WebAutomation from './pages/WebAutomation';
import SendKeys from './pages/SendKeys';
import Buttons from './pages/Buttons';
import Dropdown from './pages/Dropdown';
import Radio from './pages/Radio';
import Checkbox from './pages/Checkbox';
import Alert from './pages/Alert';
import WebTable from './pages/Webtable';
import WindowHandle from './pages/WindowHandle';
import Navigation from './pages/Navigation';
import Screenshot from './pages/Screenshot';
import Condition from './pages/Condition';
import ActionClass from './pages/ActionClass';
import Frames from './pages/Frames';
import ButtonFrame from './pages/ButtonFrame';
import TextAttribute from './pages/TextAttribute';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import UsernameFrame from './pages/UsernameFrame';
import UsernameInput from './pages/UsernameInput';
import ApiTesting from './pages/ApiTesting';
import ProductManagement from './pages/ProductManagement';
import LoginPage from './pages/LoginPage';


function LayoutRoutes() {
  const location = useLocation();

  
  const hideBothLayoutPaths = ['/button-frame', '/username-frame', '/username-input'];
  const hideSidebarOnlyPaths = ['/api-testing','/','/product-management','/login']; // Add more as needed

  const hideBoth = hideBothLayoutPaths.includes(location.pathname);
  const hideSidebar = hideSidebarOnlyPaths.includes(location.pathname);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!hideBoth && <Navbar />}
      <div style={{ display: 'flex', flex: 1 }}>
        {!hideBoth && !hideSidebar && <Sidebar />}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/web-automation" element={<WebAutomation />} />
            <Route path="/send_keys" element={<SendKeys />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/dropdown" element={<Dropdown />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/checkbox" element={<Checkbox />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/webtable" element={<WebTable />} />
            <Route path="/windowhandle" element={<WindowHandle />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/screenshot" element={<Screenshot />} />
            <Route path="/condition" element={<Condition />} />
            <Route path="/actionclass" element={<ActionClass />} />
            <Route path="/frames" element={<Frames />} />
            <Route path="/button-frame" element={<ButtonFrame />} />
            <Route path="/username-frame" element={<UsernameFrame />} />
            <Route path="/username-input" element={<UsernameInput />} />
            <Route path="/text_attribute" element={<TextAttribute />} />
            <Route path="/api-testing" element={<ApiTesting />} />
            <Route path="/product-management" element={<ProductManagement />} />
           <Route path="/login" element={<LoginPage />} />



          </Routes>
        </div>
      </div>
      {!hideBoth && <Footer />}
    </div>
  );
}


function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;
