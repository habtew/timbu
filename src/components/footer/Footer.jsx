import './footer.css'

export default function Footer(){
    return (
        <div className='footer'>
            <div className="left">

                <div className="about">
                    <span>About</span>
                    <img src="/icons/arrow-down-01-sharp.png" alt="arrow down" />
                </div>
                <div className="products">
                    <span>Products</span>
                    <img src="/icons/arrow-down-01-sharp.png" alt="arrow down" />
                </div>
                <div className="discover">
                    <span>Discover</span>
                    <img src="/icons/arrow-down-01-sharp.png" alt="arrow down" />
                </div>
            </div>
            <div className="hr"></div>
            <div className="right">
                <img src="/icon_logo.png" alt="logo" />
                <div className="socials">
                    <img src="/icons/insta.png" alt="instagram icon" />
                    <img src="/icons/whatsapp.png" alt="whatsapp icon" />
                    <img src="/icons/x.png" alt="twitter icon" />
                </div>
            </div>
        </div>
    )
}