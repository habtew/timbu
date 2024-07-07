import './card.css'

export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
            <div className="card">
                <img src="/icons/gridicons_heart-outline.png" alt="star icon" className='card--heart'/>
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`/img/${props.item.coverImg}`} className="card--image" />
                <div className="card--stats">
                    <button>women</button>
                    <div className="card-stats-container">
                        <img src="/icons/star1.png" className="card--star" />
                        <span>{props.item.stats.rating}</span>
                        <span className="gray">({props.item.stats.reviewCount}) • </span>
                        <span className="gray">{props.item.location}</span>
                    </div>
                </div>
                <div className="title-container">
                    <h3 className="card--title">{props.item.title}</h3>
                    <span>ALDO</span>
                </div>
                <div className="card--footer">
                    <p className="card--price"><span className="bold">${props.item.price}</span></p>
                    <button>Add to cart</button>
                </div>
            </div>
    )
}