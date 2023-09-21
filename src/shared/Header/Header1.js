import React, { useEffect, useState } from 'react';
import Header2 from './Header2';
import { Link } from 'react-router-dom';

const Header1 = () => {
    const [category,setCategory]=useState([])
    const [subCategory,setSubCategory]=useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])

    useEffect(()=>{
        fetch('SubCategory.json')
        .then(res=>res.json())
        .then(data=>setSubCategory(data))
    },[])
    return (
        <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul className='md:hidden uppercase bg-white w-full h-full bottom-0 font-[Pappins]  py-24 px-4 font-bold dropdown-content'>
           <div className='cursor-pointer text-left px-3'>
            {
                    category.map(c=><li className='hover:text-primary py-7 group'
                    key={c._id} 
                    >
                        {c.name}
                        {
                           c.submenu  &&(
                            <div className='hidden group-hover:block hover:block'>
                                <ul className='py-4 '>
                                  
                                {
                                    subCategory.filter(sub=>sub.cid === c._id).map( sub => <li className='text-sm text-gray-600 my-2.5'
                                               key={sub.sid}>
                                                        {sub.name}
                                      </li>
                                )}

                                </ul>
                            </div>
                           )
                        }
                    </li>)
                  
                }
                <li className='hover:text-primary py-7'>
                    <Link to='/' >
                        Login
                    </Link>
                </li>
                <li className='hover:text-primary py-7'>
                    <Link to='/' >
                        Register
                    </Link>
                </li>
                </div>
                </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenuuu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
<Header2></Header2>
</div>
    );
};

export default Header1;