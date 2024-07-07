import './header.css'

export default function Header(){
    return (
        <header className="header">
            <img src="/icons/menu.png" alt="menu icon" className="menu-icon"/>
            <img src='/logo.png' alt='logo' className='logo'/>
            <nav className="nav">

            </nav>
            <div className="search-container">
                <img src="/icons/search.png" alt="search icon" />
                <input type="text" placeholder="search" />
            </div>
            <img src="/icons/cart.png" alt="cart icons" className="cart-icon"/>
        </header>
    )
}