import './cart.css'
import SimilarItems from './similaritems/SimilarItems';
import DeliveryAndReturns from './delivery/Delivery';
import ProductDetails from './productdetail/Productdetails';
import ProductOverview from './productoverview/Productoverview';

function CartPage() {

    return (
        <div className="cart-page">
            <div className="cart-page-content">
                <ProductDetails />
                <DeliveryAndReturns />
            </div>
            <div className="overview-content">
                <ProductOverview />
                <SimilarItems
                    item={{
                        id: '1',
                        title: "Life Lessons with Katie Zaferes",
                        description: 'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals',
                        price: 136,
                        coverImg: "Bag.png",
                        stats: {
                            rating: 5.0,
                            reviewCount: 6
                        },
                        location: "Online",
                        openSpots: 0
                    }
                }
                />



            </div>
        </div>
    );
}

export default function Cart() {
    return (
        <div className='app'>
            <CartPage />
        </div>
    );
}
