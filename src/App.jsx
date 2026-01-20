import React from 'react'

function App() {
  return (
    <>
    <nav className='main p-3 bg-amber-50 flex justify-center gap-15 border-black'>
    
      <a href='https://www.siddharthabank.com/' className='flex md:block lg:flex'>
        <img src="/siddharthabank.png" alt='siddhartha Bank' 
        className='w-45 h-11'/>
        <img src="/3.jpeg" alt='siddhartha Bank' 
        className='w-35 h-9 border-b-2 border-amber-300'/>
      </a>
      <ul className='hidden md:flex gap-7 cursor-pointer'  >
        <li> About Us</li>
        <li>Contact Us</li>
        <li>Locate Us</li>
        <li>Helpdesk</li>
        <li>Investor Relation</li>
        <li>News & Notice</li>
         
      </ul>
      <div className='flex gap-5'>
      <i className='ri-search-line cursor-pointer  '></i>
    <i className='ri-menu-line cursor-pointer   block md:hidden'></i>
     <button className='px-1 bg-amber-300 text-sm cursor-pointer   md:hidden'>Open Account</button>

      </div>
     
    </nav>
    <div className='text-xs bg-amber-50 md:px-5 lg:px-5 flex justify-center gap-20 border-t border-gray-300 w-full'>
    <ul className=' hidden md:flex md:flex-wrap md:gap-7 md:shrink lg:shrink-0 cursor-pointer text-sm'>
      <li>Personal</li>
      <li>Business</li>
      <li>Card</li>
      <li>Digital Services</li>
      <li>Remittance</li>
      <li>Grievances</li>
    </ul>
    <ul className='hidden md:flex md:flex-wrap md:gap-7 md:shrink lg:shrink-0 gap-7 text-sm  cursor-pointer  '>
       <li className='  border-t-2 border-amber-300 '> <i className="ri-links-line "></i>Quick Links</li>
      <li className='border-t-2 border-amber-300 '><i className="ri-tools-line"></i>Tools</li>
      <li className='border-t-2 border-amber-300 '><i className="ri-file-text-fill"></i>Auction Portal</li>
      <li className='border-t-2 border-amber-300 '><i className="ri-account-circle-2-fill"></i>Log In</li>
      <button className=' p-2 bg-amber-300 text-xs'>Open Account</button>
    </ul>
  
    </div>
    
    
    </>
  )
}

export default App