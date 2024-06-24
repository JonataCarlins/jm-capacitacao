import './App.css';
import Footer from './footer';
import Home from './home';
import NavBar from './navbar';
import Location from './Location';
import Contact from './Contact';
import { FloatingWhatsApp } from 'react-floating-whatsapp'; 

function App() {
  return (
    <div>
      <NavBar />
      <Home />


      <Location />
      <Contact />
      <FloatingWhatsApp
          phoneNumber='4734266611'
          accountName='JM Capacitação'
          avatar='/logo-empresa.png'
          statusMessage=''
          chatMessage='Olá, como posso ajudar?'
          placeholder='Mensagem'
          allowClickAway='true'
          messageDelay='1'
          notificationSound='true'
      />
      <Footer />
    </div>
  );
}

export default App;
