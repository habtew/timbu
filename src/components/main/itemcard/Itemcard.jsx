import './itemcard.css'

export default function ItemCard() {
    return (
        <div className="itemcard--container">
            <div className="itemcard">
                <img src={`/img/street_wear.png`} className="card--image" />
                <h3 className="card--title">streat wear</h3>
                <p className="card--price">to wear on streat</p>
            </div>

            <div className="itemcard">
                <img src={`/img/shoe.png`} className="card--image" />
                <h3 className="card--title">shoe </h3>
                <p className="card--price">shoe to wear</p>
            </div>

            <div className="itemcard">
                <img src={`/img/sun_wear.webp`} className="card--image" />
                <h3 className="card--title">sun wear</h3>
                <p className="card--price">to wear on sun</p>
            </div>

            <div className="itemcard">
                <img src={`/img/sunglasses.webp`} className="card--image" />
                <h3 className="card--title">sunglasses</h3>
                <p className="card--price">best sunglasses</p>
            </div>

            <div className="itemcard">
                <img src={`/img/vintage_dress.png`} className="card--image" />
                <h3 className="card--title">Dress</h3>
                <p className="card--price">vintage dress</p>
            </div>

            <div className="itemcard">
                <img src={`/img/wigs.webp`} className="card--image" />
                <h3 className="card--title">wigs</h3>
                <p className="card--price">wigs to look cool</p>
            </div>
        </div>
    )
}