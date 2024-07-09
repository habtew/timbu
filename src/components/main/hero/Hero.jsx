import './hero.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Hero(){
    const notify = () => toast.warn("comming soon!")
    return (
        <div className='hero'>
            <div className="top">
                    <h1 className='timbu'>TIMBU</h1>
                    <img src="/img/person.jpg" alt="" className='timbu-person'/>
                    <div className="top-par">
                        <p className='timbu-text'>Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service</p>
                        <h1 className='timbu-shop'>SHOP</h1>
                    </div>

            </div>
            <div className="mid">
                <p className='timbu-text'>Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service</p>
            </div>
            <div className='bottom'>
                <img src="/img/shoee.jpeg" alt="" className='top--image'/>
                <button className='timbu-btn' onClick={notify}>Explore More</button>
                <img src="/img/shirt.jpeg" alt="" className='bottom--image'/> 
            </div>
            <ToastContainer />
        </div>
    )
}

