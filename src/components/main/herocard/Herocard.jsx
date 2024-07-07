import './herocard.css'
export default function Herocard(){
    return (
        <div 
            style={ {
                backgroundImage: "url(img/summer_advert.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}
            className="herocard">
                <h1>Our Curated Summer Collection</h1>
                <p>Explore our curated summer collection featuring trending styles, vibrant colors and lightweight fabrics perfect for long days and nights.</p>
                <button>Explore noew</button>
        </div>
    )
}