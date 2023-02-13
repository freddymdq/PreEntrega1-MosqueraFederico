import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-black ">
                <div className="navbar-start">
             
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-warning lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black  font-bold  rounded-box w-52">
                            <Link to={'/'}>
                                <li className="p-5 btn btn-ghost text-warning">Productos</li>
                            </Link>
                            <Link to = {'/categoria/whisky'}>                       
                                <li className="p-5 btn btn-ghost text-warning">Whisky</li>
                            </Link>
                            <Link to = {'/categoria/spirits'}>
                                <li className="p-5 btn btn-ghost text-warning">Spirits</li>
                            </Link>  
                        </ul>
                    </div>
                    
                     <li className="btn btn-ghost normal-case text-xl text-warning"><span className="font-black text-warning">DRIN</span><span className="text-white">HOME</span></li>
                    
                </div>
                <div className="navbar-end hidden lg:flex">
               
                    <ul className="menu menu-horizontal px-1 text-white font-bold">
                            <Link to={'/'}>
                                <li className="p-5 btn btn-ghost text-warning">Productos</li>
                            </Link>
                            <Link to = {'/categoria/whisky'}>
                                <li className="p-5 btn btn-ghost text-warning">Whisky</li>
                            </Link>
                            <Link to = {'/categoria/spirits'}>
                            <li className="p-5 btn btn-ghost text-warning">Spirits</li>
                            </Link>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </>
    )
}


export default NavBar


