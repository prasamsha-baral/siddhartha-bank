import React from 'react'

function App() {
  return (
    <>
    <nav className='main p-3 bg-amber-50 flex justify-center gap-20 border-black'>
    
      <a href='https://www.siddharthabank.com/' className='flex'>
        <img src="/siddharthabank.png" alt='siddhartha Bank' 
        className='w-45 h-11'/>
        <img src="/3.jpeg" alt='siddhartha Bank' 
        className='w-35 h-9 border-b-2 border-amber-300'/>
      </a>
      <ul className='cursor-pointer flex gap-7'>
        <li> About Us</li>
        <li>Contact Us</li>
        <li>Locate Us</li>
        <li>Helpdesk</li>
        <li>Investor Relation</li>
        <li>News & Notice</li>
         
      </ul>
      <div className='flex gap-10'>
      <i class="ri-search-line"></i>
      <i class="ri-menu-line "></i>
      </div>
     
    </nav>
    <div className='bg-amber-50 px-3 flex justify-center gap-20 border-t border-gray-300 w-full'>
    <ul className='cursor-pointer flex gap-7 text-sm'>
      <li>Personal</li>
      <li>Business</li>
      <li>Card</li>
      <li>Digital Services</li>
      <li>Remittance</li>
      <li>Grievances</li>
    </ul>
    <ul className='  cursor-pointer  flex gap-7 text-sm'>
       <li className='  border-t-2 border-amber-300 '> <i class="ri-links-line "></i>Quick Links</li>
      <li className='border-t-2 border-amber-300 '><i class="ri-tools-line"></i>Tools</li>
      <li className='border-t-2 border-amber-300 '><i class="ri-file-text-fill"></i>Auction Portal</li>
      <li className='border-t-2 border-amber-300 '><i class="ri-account-circle-2-fill"></i>Log In</li>
      <button className='p-2 bg-amber-300 text-xs'>Open Account</button>
    </ul>
  
    </div>
    
    
    </>
  )
}

export default App