import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/scss/placeOrder.css';
import Edit from '../../assets/images/Edit.svg';

function PlaceOrder() {
    return (
        <div className='container'>
            <section className="placeOrderCart">
                <h1>Checkout</h1>
                <div class="aem-Grid aem-Grid--12">
                    <h4 className='placeOrderTitle'>Guest Checkout</h4>
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='cartA'>
                            <div class="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Shipping Information </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        Qadim Farhan<br /> 1098 Wapello Street <br />Altadena, California 91001<br /> United States
                                    </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon2'>
                                        <img src={Edit} /><span>Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Shipping Method</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        Standard Shipping<br />
                                        Est. delivery in 4 - 8 business days<br />
                                        FREE
                                    </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon2'>
                                        <img src={Edit} /><span>Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Payment Information</p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        Credit Card<br />
                                        Visa ending in 4567<br />
                                    </p>
                                </div>

                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon3'>
                                        <img src={Edit} /><span>Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipping_info_radio'>
                                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                        <div class="aem-Grid aem-Grid--12 placeorder-method">
                                            <div className='editOption'>
                                                <p>3 items in your order</p>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6">
                                                <div className='imageOne'>
                                                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                                                    <div>
                                                        <h4>Electric Leggings</h4>
                                                        <p>Size: Medium</p>
                                                        <p>Color: Storm</p>
                                                        <p>Quantity: 2</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6">
                                                <div className='imageTwo'>
                                                    <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />
                                                    <div>
                                                        <h4>Electric Leggings</h4>
                                                        <p>Size: Medium</p>
                                                        <p>Color: Red</p>
                                                        <p>Quantity: 1</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    </div>
                                </div>
                            </div>

                            <div className='payment__method'>
                                <div className='placeOrder_btn'>
                                    <Link to="/orderSuccessfull">
                                        <button type="button" class="btn-shipping-method">
                                            PLACE ORDER
                                        </button></Link>
                                </div>
                            </div>
                            <div className='terms'>
                                <p className='terms_condition'>By clicking confirm order you agree to our <Link to='/' ><span className='condition'>Terms and Conditions</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div class="aem-Grid aem-Grid--12 pricing-detail">
                            <p className='pricing__Summary'>Pricing Summary</p>

                            <div class="aem-GridColumn aem-GridColumn--default--6">
                                <p>Subtotal</p>
                                <p>Coupon</p>
                                <p>Gift Card</p>
                                <p>Estimated tax</p>
                                <p>Estimated shipping</p>
                                <p><strong>Estimated Total</strong></p>

                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--6  text-right">
                                <p>$ 388.00</p>
                                <p>- $ 77.60</p>
                                <p>- $ 100.00 </p>
                                <p>$ 23.28</p>
                                <p>FREE</p>
                                <p><strong>$ 233.68</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PlaceOrder