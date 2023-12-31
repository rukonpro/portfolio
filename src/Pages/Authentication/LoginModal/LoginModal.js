import React, { useState } from 'react'
import Login from '../Login/Login'
import Registration from '../Registaion/Registaion'
import OnClickSound from "../../../Helpers/OnClickSound";

export default function LoginModal() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <dialog id="login" className="modal">
            <div className="modal-box p-0 shadow-2xl shadow-[#3f223a80]">
                <form method="dialog">
                    <button
                        aria-label="x"
                        onClick={()=>OnClickSound("/Music/keypress.mp3")}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 text-purple-500 text-3xl ">✕</button>
                </form>
                <div>
                    {!isLogin ?
                        <Login setIsLogin={setIsLogin} /> :
                        <Registration setIsLogin={setIsLogin} />}
                </div>
            </div>
        </dialog>
    )
}
