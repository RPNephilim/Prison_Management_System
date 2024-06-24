import './ImpsLogin.css'
import world_govt_logo from '../assets/world-govt-logo-white.png';
import marine_logo from '../assets/marine_logo.png';
import { IoHelpCircleSharp } from "react-icons/io5";
import { useState } from 'react';
const ImpsLogin = () => {
    const [userDetails,setUserDetails] = useState({
        username: "",
        password: ""
    })
    const updateUserDetails = () => {
        
    }
    const login = () => {

    }
    return (
        <>
            <div className="p-4 imps_login h-screen bg-scroll">
                <div className='flex justify-between h-1/5'>
                    <img src={world_govt_logo} alt='world-govt' />
                    <img src={marine_logo} alt='world-govt' />
                </div>
                <div className='w-1/3 mx-auto mt-40 flex flex-col space-y-8'>
                    <div className='username_input w-full bg-white p-3'>
                        <input type='text' placeholder='Username' className='outline-none w-full' />
                    </div>
                    <div className='password_input w-full p-3 flex justify-between bg-white'>
                        <input type='text' placeholder='Password' className='outline-none w-full' />
                        <IoHelpCircleSharp size={30} color='black' className='cursor-pointer'/>
                    </div>

                    <div className='buttons flex justify-around font-serif text-2xl'>
                        <button type='button' className='bg-white p-4 rounded-md'>
                            LOGIN
                        </button>
                        <button type='button' className='bg-white p-4 rounded-md'> 
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImpsLogin;