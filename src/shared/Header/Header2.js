import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header2 = ({open}) => {
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
            <ul className='md:flex hidden uppercase  gap-20 font-[Pappins] justify-center py-5 px-3 '>
           
            {
                    category.map(c=><li
                      key={c._id}  className='hover:text-white cursor-pointer font-bold group'
                    >
                        {c.name}
                        {
                           c.submenu  &&(
                            <div className='absolute top-30 bg-white p-3.5 hidden group-hover:block hover:block'>
                                
                                <ul >
                                  
                                {
                                    subCategory.filter(sub=>sub.cid === c._id).map( sub => <li className='text-sm text-gray-600 my-2.5 hover:text-primary'
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
                </ul>
        </nav>

        {/* Mobile view  with side menu*/}
         
        <nav className="bg-primary">
            <ul className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 font-bold
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
           <div className='cursor-pointer text-left px-3'>
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
               
                </div>
                </ul>
        </nav>
        </div>
    );
};

export default Header2;