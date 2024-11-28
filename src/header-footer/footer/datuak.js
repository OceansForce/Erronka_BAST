import React, { useState, useEffect } from "react";

const Datuak = () => {
  
  return (
    <div className='flex flex-col items-center text-center md:text-start md:flex-row justify-around'>
        <div>
          <p className='text-neutral-700 dark:text-gray-400 text-lg'>
            Get in touch
          </p>
          <p className='dark:text-slate-300'>guts@berserk.com</p>
          <p className='dark:text-slate-300'>griffith@berserk.com</p>
          
        </div>
        <div>
          <p className='text-neutral-700 text-lg dark:text-gray-400'>
            Connect
          </p>
          <a href='#' className='dark:text-slate-300'>Linkedin</a><br/>
          <a href='#' className='dark:text-slate-300'>Instagram</a><br/>
          <a href='#' className='dark:text-slate-300'>X</a>
        </div>
        <div>
          <p className='text-neutral-700 text-lg dark:text-gray-400'>
            Design Services
          </p>
          <p className='dark:text-slate-300'>IES Xabier Zubiri Manteo BHI</p>
          <p className='dark:text-slate-300'>C. Jose Miguel Barandiaran, 10-12</p>
          <p className='dark:text-slate-300'>20001 Donostia, Euskal Herria</p>
        </div>
        <div>
          <p className='text-neutral-700 text-lg dark:text-gray-400'>
            Ventures
          </p>
          <p className='dark:text-slate-300'>IES Xabier Zubiri Manteo BHI</p>
          <p className='dark:text-slate-300'>C. Jose Miguel Barandiaran, 10-12</p>
          <p className='dark:text-slate-300'>20001 Donostia, Euskal Herria</p>
        </div>
      </div>
  );
};

export default Datuak;
