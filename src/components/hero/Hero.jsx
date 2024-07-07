import './hero.css'

export default function Hero(){
    return (
        <div className='hero'>
            <h1 className='timbu item1 grid-item'>TIMBU</h1>
            <img src="/img/person.jpg" alt="" className='timbu-person item2 grid-item'/>
            <h1 className='timbu-shop item3 grid-item'>SHOP</h1>
            <p className='timbu-text item4 grid-item'>Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service</p>
            <button className='timbu-btn item5 grid-item'>Explore More</button>
            <img src="" alt="" className='timbu-shoe item6 grid-item'/>
            <img className='timbu-img item7 grid-item' src="" alt="" />
        </div>
    )
}