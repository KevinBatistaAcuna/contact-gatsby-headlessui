import React from 'react'
import ListItems from '../ListItems';

function Footer() {
    let technologies = ['Free Trial', 'Azure', 'AWS', 'Google'];
    let services = ['Resources', 'Terms Of Service', 'Privacy Policy', 'Support'];
  return (
    <footer className='bg-blacky text-white '>
        <div className='flex justify-around items-center pt-10 mt-10'>
            <ul>
                <li>✆ +1 (877) 777-7777</li>
                <li>123 Main st, San Francisco, CA, 94107</li>
            </ul>
            <ListItems items={technologies}/>
            <ListItems items={services} />
            <p className='focusEmail self-start cursor-pointer'>↑</p>
        </div>
        <div className='w-full text-center'>
            <hr className='m-0 bg-white'/>
            <p className='m-0 py-4'>© 2022 Example </p>
        </div>
    </footer>
  )
}

export default Footer