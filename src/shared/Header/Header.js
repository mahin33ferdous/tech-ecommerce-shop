import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import Header2 from './Header2';

const Header = () => {

    const[open,setOpen]=useState(false)
  
    return (
        <div>
        <nav className='bg-white'>
         <div className='flex items-center font-medium justify-around'>
            <div className='z-50 p-5 md:auto w-full flex justify-between'>
                <img src={logo} alt='/' className='md:cursor-pointer '/>
                <div className='text-3xl lg:hidden' onClick={()=>setOpen(!open)}> 
            <ion-icon name={`${open?'close':'menu'}`}></ion-icon>
            </div>
            </div>
           
            {/* category menu on navber */}

            <ul className='md:flex hidden uppercase  items-center gap-6 font-[Pappins]'>
                <li>
                    <Link to='/' className='py-7 px-3 inline-block'>
                        Cart
                    </Link>

                </li>
                <li>
                    <Link to='/login' className='py-7 px-3 inline-block'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/signup' className='py-7 px-3 inline-block'>
                        Register
                    </Link>
                </li>
              </ul>
         </div>
        </nav>
        <Header2 open={open}></Header2>
        </div>
    );
};

export default Header;