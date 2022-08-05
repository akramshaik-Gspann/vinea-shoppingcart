import React from 'react'
import '../../assets/scss/checkoutForm.scss';
import PaymentInformation from './paymentInformation';
import ShippingInformation from './shippingInformation';
import ShippingMethod from './shippingMethod';

function CheckOutForm() {
    return (
        <div class="aem-Grid aem-Grid--12">
            <section className="checkOutCart">
                <h1>Checkout</h1>
                <div className='container'>
                        <div class="aem-Grid aem-Grid--12">
                            < div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12" >
                                <ShippingInformation />
                                {/* <hr />
                            <ShippingMethod />
                            <hr />
                            <PaymentInformation />
                            <hr /> */}
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default CheckOutForm