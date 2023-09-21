import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
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
        <nav className="bg-primary ">
            <ul className='md:flex hidden uppercase  gap-20 font-[Pappins] justify-center py-7 px-3 font-bold '>
           
            {
                    category.map(c=><li
                      key={c._id}  className='hover:text-white cursor-pointer'
                    >
                        {c.name}
                    </li>)
                }
                </ul>
        </nav>

        {/* Mobile view */}
         
        <nav className="bg-primary ">
            <ul className='md:hidden uppercase bg-white w-full h-full bottom-0 font-[Pappins]  py-24 px-4 font-bold '>
           <div className='cursor-pointer text-left px-3'>
            {
                    category.map(c=><li className='hover:text-primary py-7'
                    key={c._id} 
                    >
                        {c.name}
                        {
                           c.submenu  &&(
                            <div>
                                <ul>
                                  
                                {
      subCategory.filter(
         sub  =>
        sub.cid === c._id
      )
      .map( sub => 
        <li
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
        </nav>
        </div>
    );
};

export default Header2;