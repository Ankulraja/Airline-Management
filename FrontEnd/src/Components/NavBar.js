import React from 'react'

import {NavLink,Link} from "react-router-dom"
import {toast} from 'react-hot-toast'
 const NavBar = (props) => {
        let isLoggedIn= props.isLoggedIn;
        let setISLoggedIn= props.setISLoggedIn;
  return (
    <div className='bg-zinc-950  fixed top-0 left-0 right-0 z-10'>
    <div className='flex justify-between items-center w-11/12
            max-w-[1160px] py-4 ml-20 relative'>
        <Link to="/">
            <img src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1708422225/samples/Logo_llkrfe.png" alt='logo' width={60} loading='lazy'/>     
       </Link>

       <nav className='absolute left-12'>
        <ul className='flex gap-x-2 text-white '>
            <li>
                <Link to="/" className=' text-white p-[4px] ml-40 px-[12px] rounded-[8px] focus:bg-white focus:text-black mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100'> Home </Link>
            </li>
           <li>
            <NavLink to="/about" className=' text-white p-[4px] px-[12px] rounded-[8px] focus:bg-white focus:text-black mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100'>About</NavLink>
            </li>
        </ul>
       </nav>

       {/* Login-Signup-Logout-dashboard */}

       <div className='flex gap-x-4'>
       { !isLoggedIn &&
        <Link to="/login">
            <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100'>
                Log in
            </button>
        </Link>
       }

       {!isLoggedIn &&
        <Link to="/signup">
            <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100'>
            Sign up
            </button>
        </Link>
       }

       {isLoggedIn &&
        <Link to="/">
            <button  onClick={() => {
                setISLoggedIn(false);
                toast.success("Logged Out");
            }} className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100'>
            Log out
            </button>
        </Link>
       } 

       {isLoggedIn &&
        <Link to="/dashboard">
            <button className='bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate00 hover:text-white transition-all duration-100'>
            Dashboard
            </button>
        </Link>
       }
       
       </div>
    </div>
    </div>
  )
}
export default NavBar