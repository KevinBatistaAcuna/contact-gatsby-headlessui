import React, { forwardRef } from 'react';
import ListItems from '../ListItems';

const Footer = forwardRef(function Footer(props) {
    let technologies = ['Free Trial', 'Azure', 'AWS', 'Google'];
    let services = ['Resources', 'Terms Of Service', 'Privacy Policy', 'Support'];
    function focusHandler(){
        props.inputRef.current.focus();
    }

  return (
    <footer className='bg-blacky text-white'>
        <div className='flex flex-col md:flex-row justify-around items-center pt-10 mt-10'>
            <ul className='md:w-fit w-full text-center md:text-left m-0 mt-4'>
                <li>✆ +1 (877) 777-7777</li>
                <li>123 Main st, San Francisco, CA, 94107</li>
            </ul>
            <ListItems items={technologies}/>
            <ListItems items={services} />
            <p className='md:self-start cursor-pointer md:w-fit w-full text-center' onClick={focusHandler}>↑</p>
        </div>
        <div className='w-full text-center'>
            <hr className='m-0 bg-white'/>
            <p className='m-0 py-4'>© 2022 Example </p>
        </div>
    </footer>
  )
});

export default Footer