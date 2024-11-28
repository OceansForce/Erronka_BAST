import React, { useState, useEffect } from "react";

const Formulario = () => {
  
  return (
    <div className='flex flex-row justify-around'>
        <div class="p-4 mx-auto max-w-xl font-[sans-serif]">
            <h1 class="text-3xl text-gray-800 font-extrabold text-center dark:text-gray-300">Contact us</h1>
            <form class="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 dark:bg-black dark:text-white text-sm outline-blue-500" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 dark:bg-black dark:text-white text-sm outline-blue-500" />
                <input type='text' placeholder='Subject'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 dark:bg-black dark:text-white text-sm outline-blue-500" />
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 text-gray-800 dark:bg-black dark:text-white bg-gray-100  text-sm pt-3 outline-blue-500"></textarea>
                <button type='button'
                    class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>  
    </div>
  );
};

export default Formulario;
