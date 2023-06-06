import React from 'react';
import Header from '../Header';
import ContactForm from '../Contactform';
import ContactInfo from '../ContactInfo';

const ContactPage = () => {
  return (
    <>
      <Header />
      <h2 className="text-2xl font-bold mb-4 px:10 md:px-28 text-center md:text-left">Contact Us</h2>
      <h3 className="text-lg mb-4 px-10 text-center md:px-28 md:text-left">Please provide some information to get started</h3>
      <div className="container mx-auto flex flex-col md:flex-row px-10 md:px-28">
        <div className="md:w-1/2">
          <ContactForm />
        </div>
        <div className="md:w-1/2">
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

export default ContactPage;