import './categorycard.css'

export default function Categorycard(){
    return (
        <>
        <h1>Browse category</h1>
        <div className='categorycard--container'>
            <div className="itemcard">
                <img src={`/img/french_kiss_bag.png`} className="card--image" />
                <h3 className="card--title">french kiss bag</h3>
                <p className="card--price">french kiss bag for ladies</p>
            </div>

            <div className="itemcard">
                <img src={`/img/gym_wears.webp`} className="card--image" />
                <h3 className="card--title">Gym wear</h3>
                <p className="card--price">cloth for gym</p>
            </div>

            <div className="itemcard">
                <img src={`/img/hat.png`} className="card--image" />
                <h3 className="card--title">Hat</h3>
                <p className="card--price">hat for casual wear</p>
            </div>

            <div className="itemcard">
                <img src={`/img/Jacket.webp`} className="card--image" />
                <h3 className="card--title">Jacket</h3>
                <p className="card--price">jecket good</p>
            </div>

            <div className="itemcard">
                <img src={`/img/shoee.jpeg`} className="card--image" />
                <h3 className="card--title">Shoe</h3>
                <p className="card--price">shoe on your choice</p>
            </div>

            <div className="itemcard">
                <img src={`/img/slippers.png`} className="card--image" />
                <h3 className="card--title">slippers</h3>
                <p className="card--price">paragraph</p>
            </div>
        
        </div>
        </>
    )
}