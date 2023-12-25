import React, { useState } from 'react'
import Login from '../Login/Login'
import Registation from '../Registaion/Registaion'

export default function LoginModal() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <dialog id="loginModal" className="modal">
            <div className="modal-box p-0 shadow-2xl shadow-[#3f223a80]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 text-red-500 text-3xl ">✕</button>
                </form>
                <div>
                    {!isLogin ?
                        <Login setIsLogin={setIsLogin} /> :
                        <Registation setIsLogin={setIsLogin} />}
                </div>
            </div>
        </dialog>
    )
}
