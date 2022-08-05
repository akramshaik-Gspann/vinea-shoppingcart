import React from 'react'
// import "../Style/Checkoutthree.css"
import { Link } from "react-router-dom";
import '../../assets/scss/paymentInformation.css';
import Edit from '../../assets/images/Edit.svg';
import { BsQuestionCircle } from 'react-icons/bs';

function PaymentInformation() {
    return (
        <div className='container'>
            <section className="paymentInfoCart">
                <h1>Checkout</h1>
                <div class="aem-Grid aem-Grid--12">
                    <h4 className='paymentInfoTitle'>Guest Checkout</h4>
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div class="aem-Grid aem-Grid--12 payment-method">
                            <div className='editOption'>
                                <p>Shipping Information</p>
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
                                <div className='editIcon3'>
                                    <img src={Edit} /><span>Edit</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="aem-Grid aem-Grid--12 payment-method">
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
                                <div className='editIcon3'>
                                    <img src={Edit} /><span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 payment_info">
                                <p className='shippingInfo'>3. Payment Information</p>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                                        Credit Card
                                    </label>
                                </div>
                                <label for="exampleFormControlInput1">Name on Card</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" " />
                                <br />
                                <label for="exampleFormControlInput1">Credit Card Number</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" " />
                                <br />
                                <div class="aem-Grid aem-Grid--12">
                                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                        <label for="exampleFormControlInput1">Expiration Date</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">

                                        <label for="exampleFormControlInput1">CVV</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="91001" />
                                    </div>
                                    <div class="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
                                        <BsQuestionCircle className='icon' />
                                    </div>
                                </div>
                                <div class="checkbox1">
                                    <label><input type="checkbox" />Billing address same as shipping address</label>
                                </div>
                            </div>

                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            </div>

                            <div class="aem-Grid aem-Grid--12">
                                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 payment_info">
                                    <hr />
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                                            PayPal
                                        </label>
                                    </div>
                                    <hr />
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                </div>
                            </div>
                        </div>

                        <div className='button__method'>
                            <Link to="/placeOrder">
                                <button type="button" class="btn-shipping-method">
                                    CONTINUE TO REVIEW ORDER
                                </button></Link>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div class="aem-Grid aem-Grid--12 button-btnone">
                            <p className='pricing__Summary'>Pricing Summary</p>

                            <div class="aem-GridColumn aem-GridColumn--default--6 ">
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

export default PaymentInformation