import './delivery.css'

export default function DeliveryAndReturns() {
    return (
        <div className="delivery-returns">
            <h2>Delivery & Returns</h2>
            <div className="location">
                <label>Location</label>
                <select>
                    <option className='option'>Location</option>
                </select>
            </div>
            <div className="sub-location">
                <label>Sub-location</label>
                <select>
                    <option className='suboption'>Sub-location</option>
                </select>
            </div>
            <div className="delivery">
                <img src="/icons/iconoir_delivery-truck.png" alt="" />
                <div className="delivery--container">
                    <h3>Delivery</h3>
                    <p>Estimated delivery time: 5-12 business days for home delivery. Please place your order early.</p>
                    <p>Note: Availability may vary by location.</p>
                </div>
            </div>
            <div className="return-policy">
                <img src="/icons/hugeicons_delivery-return-01.png" alt="" />
                <div className="return-container">
                    <h3>Return policy</h3>
                    <p>Guaranteed 30-day return policy. For details about return shipping options, please visit our Contact page.</p>

                </div>
            </div>
        </div>
    );
}