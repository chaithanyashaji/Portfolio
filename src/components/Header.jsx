import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#' className='text-2xl font-bold font-primary'>
            <span className='text-gradient'>Chaithanya</span> Shaji
          </a>
          <button className='btn btn-lg'>
         <a href='mailto:chaiithanyashaji@gmail.com?subject=Inquiry%20from%20Portfolio'>
                  Hire me
                </a>
              </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
