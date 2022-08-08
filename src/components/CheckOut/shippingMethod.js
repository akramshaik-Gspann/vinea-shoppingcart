import React, { useState } from 'react'
import '../../assets/scss/shippingMethod.css';
import { Link } from "react-router-dom";
import Edit from '../../assets/images/Edit.svg';
import { useForm } from "react-hook-form";
import PaymentInformation from './paymentInformation';
import ShippingInformation from './shippingInformation';

function ShippingMethod(props) {

  const [shippingDetails, setShippingDetails] = useState([]);
  const [ isShipping, setIsShipping ] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setShippingDetails(data);
    setIsShipping(data);
  };
  return (
    <div className='container'>
      <section className="shipMethodCart">
        <h1>Checkout</h1>
        <div class="aem-Grid aem-Grid--12">
          <h4 className='shippingTitle'>Guest Checkout</h4>
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div class="aem-Grid aem-Grid--12 shipping-Info">
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

            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='shipping_method_radio'>
                    <h3>2. Shipping Method</h3>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                         className={`form-control ${errors.flexRadioDefault && "invalid"}`}
                         {...register("flexRadioDefault", {
                           required: "Please enter the phone number"
                         })}
                      />
                      <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                        Standard Shipping (4-8 business days via USPS) FREE
                      </label>
                      {errors.flexRadioDefault && (
                    <small className="text-danger">{errors.flexRadioDefault.message}</small>
                  )}
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label class="form-check-label" for="flexRadioDefault2" className='label_text'>
                        Express Delivery (2-5 business days via USPS) $17.95
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                        Next Day Delivery (Next business days via FedEx) $53.61
                      </label>
                    </div>
                  </div>

                  <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                      <div>
                        <button type="submit" class="btn-shipping">
                          CONTINUE TO SHIPPING METHOD
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className='checkout_leftSteps'>
                  <hr />
                  {
                    !shippingDetails ?   <h4>3. Payment Information</h4> : <PaymentInformation shippingDetails={shippingDetails} />
                  }
                  <hr />
                  <hr />
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
              </div>
            </div>


            {/* <div className='button__method'>
              <Link to="/paymentInformation">
                <button type="button" class="btn-shipping-method">
                  CONTINUE TO PAYMENT
                </button></Link>
            </div> */}
{/* 
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12 payment_info">
                <hr />
                <p> 3. Payment Information</p>
                <hr />
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
              </div>
            </div> */}
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="aem-Grid aem-Grid--12 aem-GridColumn--phone--12 shipping_pricing">
              <p className='pricing__Summary'>Pricing Summary</p>

              <div class="aem-GridColumn aem-GridColumn--default--6 ">
                <p>Subtotal</p>
                <p>Coupon</p>
                <p>Gift Card</p>
                <p>Estimated tax</p>
                <p>Estimated shipping</p>
                <p><strong>Estimated Total</strong></p>

              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 text-right">
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

export default ShippingMethod