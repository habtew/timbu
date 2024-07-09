import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const notify = () => toast.warn("coming soon!");

    return (
        <div className='cart'>
            <div className="cart--container">
                <div className='shipping-address'>
                    <div className="hr"></div>
                    <h2>Shipping Address</h2>
                    <div className="hr"></div>
                    <form>
                        <input type='text' placeholder='First & Last Name' />
                        <input type='text' placeholder='412, Dubai St' />
                        <input type='text' placeholder='23rd, Boulevard Ave' />
                        <div className='location'>
                            <div className="city">
                                <label htmlFor="city">city</label>
                                <input type='text' placeholder='Enter City' />
                            </div>
                            <div className="state">
                                <label>State</label>
                                <select>
                                    <option>Select State</option>
                                    {/* Add other state options */}
                                </select>
                            </div>
                        </div>
                        <label>Zipcode</label>
                        <input type='text' placeholder='Zip code' />
                    </form>
                </div>


                <div className='payment-method'>
                    <div className="hr"></div>
                    <h2>Payment method</h2>
                    <div className="hr"></div>
                    <div className='methods'>
                        <div className='method card'><img src="/icons/card.png" alt="" onClick={notify}/> Card</div>
                        <div className='method wallet'><img src="/icons/wallet.png" alt="" onClick={notify}/>Wallet</div>
                        <div className='method bank-transfer'><img src="/icons/bank.png" alt="" onClick={notify}/>Bank transfer</div>
                    </div>
                    <form>
                        <input type='text' placeholder='First & Last Name' />
                        <input type='text' placeholder='0000 0000 0000 0000' />
                        <div className='expiry-cvv'>
                            <p>Expiry</p>
                            <div className="yy">
                                <select>
                                    <option>MM</option>
                                    {/* Add month options */}
                                </select>
                                <select>
                                    <option>YYYY</option>
                                    {/* Add year options */}
                                </select>
                            </div>
                        </div>
                        <span>CVV</span>
                        <input type='text' placeholder='CVV' />
                    </form>
                </div>
            </div>


            <div className='order-summary'>
                <h2>Order Summary</h2>
                <div className="hr"></div>
                <div className="order-summery-container">
                    <img src="/img/Bag.png" alt="" />
                    <div className="desc">
                        <h3>Burberry shine</h3>
                        <p>oila amigo</p>
                    </div>
                </div>
                <div className='summary'>
                    <div><span>Subtotal</span> <span>$150</span></div>
                    <div><span>Shipping</span><span>$10</span></div>
                    <div><span>Tax</span> <span>$3</span></div>
                    <div className="hr"></div>
                    <div><span>Total</span><span>$165</span></div>
                </div>
                <button onClick={notify}>Place order</button>
            </div>
            <ToastContainer />
        </div>
    );
}
