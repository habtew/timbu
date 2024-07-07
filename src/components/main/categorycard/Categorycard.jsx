import './categorycard.css'

export default function Categorycard(){
    return (
        <>
        <h1>Browse category</h1>
        <div className='categorycard--container'>
            <div className="itemcard">
                <img src={`/img/Bag.png`} className="card--image" />
                <h3 className="card--title">Title</h3>
                <p className="card--price">paragraph</p>
            </div>

            <div className="itemcard">
                <img src={`/img/Bag.png`} className="card--image" />
                <h3 className="card--title">Title</h3>
                <p className="card--price">paragraph</p>
            </div>

            <div className="itemcard">
                <img src={`/img/Bag.png`} className="card--image" />
                <h3 className="card--title">Title</h3>
                <p className="card--price">paragraph</p>
            </div>

            <div className="itemcard">
                <img src={`/img/Bag.png`} className="card--image" />
                <h3 className="card--title">Title</h3>
                <p className="card--price">paragraph</p>
            </div>

            <div className="itemcard">
                <img src={`/img/Bag.png`} className="card--image" />
                <h3 className="card--title">Title</h3>
                <p className="card--price">paragraph</p>
            </div>

            <div className="itemcard">
                <img src={`/img/Bag.png`} className="card--image" />
                <h3 className="card--title">Title</h3>
                <p className="card--price">paragraph</p>
            </div>
        
        </div>
        </>
    )
}