import './header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header(){
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isSignOpen, setIsSignOpen] = useState(false)

    const toggleMore = () => {
        setIsMoreOpen(!isMoreOpen);
    }

    const toggleSign =() => {
        setIsSignOpen(!isSignOpen)
    }

    const notify = () => toast.warn("coming soon!");

    return (
        <header className="header">
            <img src="/icons/menu.png" alt="menu icon" className="menu-icon"/>
            <img src='/logo.png' alt='logo' className='logo'/>
            <nav className="nav">
                <ul>
                    <li className='ff' onClick ={toggleSign}><img src={isSignOpen ? "icons/down.png" : "icons/up.png"} alt="" /> Register/Sign In
                    {isSignOpen && (
                        <ul className='toggle-sign'>
                            <li>Register</li>
                            Sign in
                        </ul>
                    )}
                    </li>
                    
                    <li><Link to='/'>Home</Link></li>
                    <li onClick={notify}>Men</li>
                    <li onClick={notify}>Women</li>
                    <li onClick={notify}>Kids</li>
                    <li onClick={notify}>Accessories</li>
                    <li className="more" onClick={toggleMore}>
                        More <img src={isMoreOpen ? "icons/down.png" : "icons/up.png"} alt="" />
                        {isMoreOpen && (
                            <ul className="dropdown">
                                <li>Perfumes</li>
                                <li>Jewelries</li>
                                <li>Gym wears</li>
                                <li>Vintage wears</li>
                                <li>Sport wear</li>
                                <li>Pyjamas</li>
                                <li>Slippers</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <div className="search-container">
                <img src="/icons/search.png" alt="search icon" />
                <input type="text" placeholder="search" />
            </div>
            <p className='header--curr'><img src="/icons/uk.png" alt="" />En/currency</p>
            <Link to='/cart'>
                <img src="/icons/cart.png" alt="cart icons" className="cart-icon"/>
            </Link>
            <ToastContainer />
        </header>
    )
}
