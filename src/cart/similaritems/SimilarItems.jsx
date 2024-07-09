import './similaritems.css'


export default function SimilarItems(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="similar-items">
            <h2>Similar items you may like</h2>
            <div className="similar-card">
                <img src="/icons/gridicons_heart-outline.png" alt="star icon" className='similar-card--heart'/>
                {badgeText && <div className="similar-card--badge">{badgeText}</div>}
                <img src={`/img/${props.item.coverImg}`} className="similar-card--image" />
                <div className="similar-card--stats">
                    <button>women</button>
                    <div className="csimilar-ard-stats-container">
                        <img src="/icons/star1.png" className="card--star" />
                        <span>{props.item.stats.rating}</span>
                        <span className="gray">({props.item.stats.reviewCount}) • </span>
                        <span className="gray">{props.item.location}</span>
                    </div>
                </div>
                <div className="similar-title-container">
                    <h3 className="similar-card--title">{props.item.title}</h3>
                    <span>ALDO</span>
                </div>
                <div className="similar-card--footer">
                    <p className="similar-card--price"><span className="bold">${props.item.price}</span></p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
}