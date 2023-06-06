import React from 'react';

const ContactInfo = () => {
  return (
    <div className="md:pl-8 mt-10 md:mt-0 text-center md:text-left">
      <p className="text-sm mb-4">
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
      </p>
      <h4 className="text-sm mb-2 font-bold">Phone</h4>
      <a href='#' className='mb-2 text-sky no-underline'>+1 (877) 777-7777</a>
      <h4 className="text-sm mb-2 mt-2 font-bold">Hours</h4>
      <p className='text-sm'>Monday - Sunday: <span className='font-bold'>7:00 am - 11:00 pm EST</span></p>
    </div>
  );
};

export default ContactInfo;
