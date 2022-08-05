import React from 'react'
// import "../Style/Checkoutthree.css"
import { Link } from "react-router-dom";
import '../../assets/scss/orderSuccessfull.css';
import Edit from '../../assets/images/Edit.svg';
import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';

function OrderSuccessfull() {
    return (
        <div className='container'>
            <section className="checkOutCart">
                <h1>Order Successful!</h1>
                <h4 className='orderNumberTitle'>Order Number #1700834</h4>
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='cartA'>
                            <div class="aem-Grid aem-Grid--12 order-method">

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='order_details'>
                                        <h3>Shipping Information </h3>
                                        <p className='shipping_details'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                                        <p className='shipping_details'>
                                            Qadim Farhan<br /> 1098 Wapello Street <br />Altadena, California 91001<br /> United States
                                        </p>
                                    </div>
                                </div>

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='order_details'>
                                        <h3>Shipping Method</h3>

                                        <p className='shipping_details'>
                                            Standard Shipping<br />
                                            Est. delivery in 4 - 8 business days<br />
                                            FREE
                                        </p>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='order_details'>
                                        <h3>Payment Information</h3>
                                        <p className='shipping_details'>
                                            Credit Card<br />
                                            Visa ending in 4567<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="aem-Grid aem-Grid--12">
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='imageOne'>
                                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                                        <div className='image_description'>
                                            <h3>Electric Leggings</h3>
                                            <p>Size: Medium</p>
                                            <p>Color: Storm</p>
                                            <p>Quantity: 2</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='imageTwo'>
                                        <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />
                                        <div className='image_description'>
                                            <h3>Electric Leggings</h3>
                                            <p>Size: Medium</p>
                                            <p>Color: Red</p>
                                            <p>Quantity: 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='terms_order'>
                                <p className='terms_condition'>
                                    You will also receive an email with the details and we will let you know when your order has shipped.
                                </p>
                                <p className='order_condition'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div class="orderSuccessfull-rightColumn">
                            <div class="orderSuccessfull-right">
                                <p className='order__Summary'>Give us a follow<br /> to SAVE 20%<br />on your next order.</p>
                                <div className='order__socialicons'>
                                    <img src={Instagram} alt="instagram" />
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderSuccessfull