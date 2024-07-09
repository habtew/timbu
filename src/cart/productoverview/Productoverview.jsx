import './productoverview.css'

export default function ProductOverview() {
    return (
        <div className="product-overview">
            <div className="tabs">
                <button className="tab">Overview</button>
                <button className="tab">Description</button>
                <button className="tab">Warranty</button>
                <button className="tab">Reviews</button>
            </div>
            <div className="tab-content">
                <ul>
                    <li>Available in a wide range of colors, patterns, and themes to appeal to kids.</li>
                    <li>Rubber outsoles with good traction to prevent slips and falls.</li>
                    <li>Built-in arch support to help maintain healthy foot development.</li>
                    <li>Soft insoles and adequate padding to support growing feet.</li>
                </ul>
            </div>
        </div>
    );
}