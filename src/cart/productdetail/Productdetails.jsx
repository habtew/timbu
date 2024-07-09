import { useState } from 'react';
import './productdetails.css'
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {
    const navigate = useNavigate();
    const [val, setVal] = useState(1)
    return (
        <div className="product-details">
            <div className="imgae--container">
                <img src="img/shoee.jpeg" alt="Product" className="product-image" />
                <div className="small--image--container">
                    <img src="img/shoee.jpeg" alt="Product" className="small-product-image" />
                    <img src="img/shoee.jpeg" alt="Product" className="small-product-image" />
                    <img src="img/shoee.jpeg" alt="Product" className="small-product-image" />
                    <img src="img/shoee.jpeg" alt="Product" className="small-product-image" />
                </div>
            </div>
            <div className="product-info">
                <div className="hr"></div>
                <div className="tiitlee">
                    <h1 className='title'>Burberry shine</h1>
                    <p className='title--info'>Brand: FENDI</p>
                </div>
                <div className="hr"></div>

                <div className="price--contiainer">
                    <p className="price">$150 <span className="original-price">$200</span> <span className="discount">-50%</span></p>
                    <p>5.0 ⭐⭐⭐⭐⭐ (50 reviews)</p>
                </div>

                <div className="hr"></div>
                
                <div className="product-options">
                    <div className="quantity">
                        <label>Quantity</label>
                        <div className="quant-cont">
                            <button className='minus' onClick={()=> setVal(prev=> prev - 1)}>-</button>
                            <div className="place">{val}</div>
                            <button className='add' onClick={()=> setVal(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                    <div className="size">
                        <span>Size</span>
                        <div className="size-options">
                            <button>28</button>
                            <button>29</button>
                            <button>30</button>
                            <button>31</button>
                            
                        </div>
                    </div>
                    <div className="color">
                        <label>Color</label>
                        <div className="color-options">
                            <button className="color-option" style={{ backgroundColor: '#FF0000' }}></button>
                            <button className="color-option" style={{ backgroundColor: '#00FF00' }}></button>
                            <button className="color-option" style={{ backgroundColor: '#0000FF' }}></button>
                            <button className="color-option" style={{ backgroundColor: '#FFFF00' }}></button>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="product-actions">
                    <button className="buy-now" onClick={() => navigate('/checkout')}>Checkout</button>
                    <button className="add-to-cart">Add to cart</button>
                </div>
                <div className="hr"></div>
                <div className="share-product">
                    <p>Share this product:</p>
                    <div className="btnss">
                        <img src="/icons/insta.png" alt="" />
                        <img src="/icons/x.png" alt="" />
                        <img src="/icons/whatsapp.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}