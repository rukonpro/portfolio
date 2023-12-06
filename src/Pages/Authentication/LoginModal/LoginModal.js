import React from 'react'
import Login from '../Login/Login'

export default function LoginModal() {
    return (
        <dialog id="loginModal" className="modal">
            <div className="modal-box p-0 shadow-2xl shadow-[#3f223a80]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 text-red-500 text-3xl">✕</button>
                </form>
                <div>
                    <Login />
                </div>
            </div>
        </dialog>
    )
}
