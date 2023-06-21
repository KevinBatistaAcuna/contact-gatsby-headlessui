import React, {useRef} from 'react';
import Header from '../Header';
import ContactForm from '../Contactform';
import ContactInfo from '../ContactInfo';
import Footer from '../Footer'

const ContactPage = () => {
  let inputRef = useRef();
  return (
    <>
      <Header />
      <h2 className="text-2xl font-bold mb-4 px:10 md:px-28 text-center md:text-left">Contact Us</h2>
      <h3 className="text-lg mb-4 px-10 text-center md:px-28 md:text-left">Please provide some information to get started</h3>
      <div className="container mx-auto flex flex-col md:flex-row px-10 md:px-28">
        <div className="md:w-3/5">
          <ContactForm inputRef={inputRef}/>
        </div>
        <div className="md:w-2/5">
          <ContactInfo />
        </div>
      </div>
      <Footer inputRef={inputRef}/>
    </>
  );
};

export default ContactPage;