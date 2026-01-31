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

    <footer className='footer mt-5 right-0  absolute left-0 bottom-0'>
      <div className='bg-gray-800 text-white flex justify-center flex-wrap shrink md:flex md:flex-wrap md:gap-7 md:shrink lg:shrink-0'>
      <div className='p-4 pt-8 col-md-6 col-lg-4'>
        <h5 className='mb-3 font-bold  text-amber-500'> Rates Charges & Limit </h5>
      <ul className='list-inline'> 
        
        <li className='mb-2'><a href='https://www.siddharthabank.com/interest-rates'>Interest Rates</a></li>
        <li className='mb-2'><a href='https://www.siddharthabank.com/rates-charges-limit/base-rate--interest-spread-rate'>Base Rate & Interest Spread Rate</a></li>
        <li className='mb-2'><a href='https://www.siddharthabank.com/rates-charges-limit/standard-tariff-of-charges'>Standard Tariff of Charges</a></li>
        <li className='mb-2'><a href='https://www.siddharthabank.com/forex'>Foreign Exchange Rates</a></li>
        <li className='mb-2'><a href='https://www.siddharthabank.com/rates-charges-limit/transaction-limit'>Transaction Limit</a></li>
      </ul>
      </div>
      <div className='p-4 pt-8 col-md-6 col-lg-4'>
        <h5 className='mb-3 font-bold  text-amber-500'>Easy Bank </h5>
      <ul className='list-inline'>
        
        <li className='mb-2'><a href='https://openaccount.siddharthabank.com/'  target='_blank' rel='nofollow'>Online Account Opening</a></li>
        <li className='mb-2'><a href='https://onlinecreditcard.siddharthabank.com/'  target='_blank' rel='nofollow'>Online Credit Card Application</a></li>
        <li className='mb-2'><a href='https://easybank.siddharthabank.com/FixedDeposit/FixedDepositCreate' target='_blank' rel='nofollow'>Online Ficed Deposit</a></li>
        <li className='mb-2'><a href='https://onlinedemat.siddharthabank.com/'  target='_blank' rel='nofollow'>ONline DEmat Account</a></li>
        <li className='mb-2'><a href='https://easybank.siddharthabank.com/'  target='_blank' rel='nofollow'>Explore All</a></li>

        <h5 className='mb-3 font-bold  text-amber-500'>Forms & Download</h5>
        <ul>
          <li className='mb-2'><a href='https://www.siddharthabank.com/downloads'>Forms</a></li>
          <li className='mb-2'><a href="https://www.siddharthabank.com/assets/backend/uploads/Calender/Calender_2082.pdf" target='_blank'>Calender 2082</a></li>
        </ul>
      </ul>
      </div>

      <div className='p-4 pt-8 col-md-6 col-lg-4'>
        <h5 className='mb-3 font-bold  text-amber-500'>Others</h5>
        <ul>
          <li className='mb-2'><a href="https://www.siddharthabank.com/">Cyber Security</a></li>
           <li className='mb-2'><a href="https://www.siddharthabank.com/">List of Employees Training</a></li>
            <li className='mb-2'> <a href="https://www.siddharthabank.com/">AML</a></li>
             <li className='mb-2'> <a href="https://www.siddharthabank.com/">Disclaimer</a></li>
              <li className='mb-2'> <a href="https://www.siddharthabank.com/"></a>Career</li>
              <li className='mb-2'> <a href="https://www.siddharthabank.com/"></a>Discount Partner</li>
              <li className='mb-2'> <a href="https://www.siddharthabank.com/"></a>Book an Appointment</li>
              <li className='mb-2'> <a href="https://www.siddharthabank.com/"></a>Auction POrtal</li>
              <li className='mb-2'> <a href="https://www.siddharthabank.com/"></a>QR Terms & Conditions</li>
        </ul>

</div>

    <div className='p-4 pt-8 col-md-6 col-lg-4'>
     <h5 className='mb-3 font-bold  text-amber-500'>Siddhartha Care</h5>
     <ul>
      <li className='mb-2'><a href=""><i class="ri-phone-fill"></i>+977-0105970020</a></li>
      <li className='mb-2'><a href=""> 1660-01-24024</a></li>
      <li className='mb-2'><a href=""><i class="ri-whatsapp-line"></i> +977-9851242919(For chat only)</a></li>
      <li className='mb-2'><a href=""><i class="ri-mail-fill"></i>customercare@sbl.com.np</a></li>
      <li className='mb-2'><a href=""> <i class="ri-question-fill"></i>Helpdesk</a></li>
     <div className="flex flex-wrap gap-4 text-xl">
      <a href="https://www.facebook.com/SiddharthaBankltd/"><i className="ri-facebook-fill"></i></a>
      <a href="https://www.instagram.com/SiddharthaBankltd/"><i className="ri-instagram-line"></i></a>
      <a href=""><i className="ri-twitter-x-line"></i></a>
      <a href=""><i className="ri-linkedin-box-fill"></i></a>
      <a href=""><i className="ri-github-fill"></i></a>
</div>


     </ul> 
    </div>

      </div>
    </footer>
    
    
    </>
  )
}

export default App