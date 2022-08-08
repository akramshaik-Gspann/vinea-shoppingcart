import React from 'react'
import '../../assets/scss/shippingInformation.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ShippingInformation() {

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
  };

  return (
    <div className='container'>

      <div class="aem-Grid aem-Grid--12">
        <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="aem-Grid aem-Grid--12 ">
              <h4 className='guestOut'>Guest Checkout</h4>
              <p className="contact">
                Contact information
              </p>
              <p className='details'>
                We’ll use these details to keep you informed on your delivery.
              </p>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label className='emailLabel' for="exampleFormControlInput1">Email</label>
                  <input
                    type="text" placeholder="abc@xyz.com"
                    className={`form-control ${errors.email && "invalid"}`}
                    {...register("email", {
                      required: "Please enter the email address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email address",
                      }
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="Phone Number1">Phone Number</label>
                  <input
                    type="text"
                    className={`form-control ${errors.phoneNumber && "invalid"}`}
                    {...register("phoneNumber", {
                      required: "Please enter the phone number"
                    })}
                    onKeyUp={() => {
                      trigger("phoneNumber");
                    }}
                  />
                  {errors.phoneNumber && (
                    <small className="text-danger">{errors.phoneNumber.message}</small>
                  )}
                </div>
              </div>
            </div>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <p className='shippingInfo'>1. Shipping Information</p>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Country</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name && "invalid"}`}
                    {...register("country", { required: "Please fill the country field" })}
                    onKeyUp={() => {
                      trigger("country");
                    }}
                  />
                  {errors.country && (
                    <small className="text-danger">{errors.country.message}</small>
                  )}
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              </div>
            </div>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lname && "invalid"}`}
                    {...register("fname", {
                      required: "Please enter the first name."
                    })}
                    onKeyUp={() => {
                      trigger("fname");
                    }}
                  />
                  {errors.fname && (
                    <small className="text-danger">{errors.fname.message}</small>
                  )}
                </div>
              </div>

              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Last Name</label>
                  {/* <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" /> */}

                  <input
                    type="text"
                    className={`form-control ${errors.lname && "invalid"}`}
                    {...register("lname", {
                      required: "PLease enter the last name."
                    })}
                    onKeyUp={() => {
                      trigger("lname");
                    }}
                  />
                  {errors.lname && (
                    <small className="text-danger">{errors.lname.message}</small>
                  )}
                </div>
              </div>
            </div>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Street Address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lname && "invalid"}`}
                    {...register("streetAddress", {
                      required: "There is an error that relates to this field"
                    })}
                    onKeyUp={() => {
                      trigger("streetAddress");
                    }}
                  />
                  {errors.streetAddress && (
                    <small className="text-danger">{errors.streetAddress.message}</small>
                  )}
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Street Address 2</label>
                  {/* <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" /> */}
                  <input
                    type="text"
                    className={`form-control ${errors.streetAddress1 && "invalid"}`}
                    {...register("streetAddress1", {
                      required: "There is an error that relates to this field"
                    })}
                    onKeyUp={() => {
                      trigger("streetAddress1");
                    }}
                  />
                  {errors.streetAddress1 && (
                    <small className="text-danger">{errors.streetAddress1.message}</small>
                  )}
                </div>
              </div>
            </div>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">City</label>
                  <input
                    type="text" placeholder="Altadena"
                    className={`form-control ${errors.city && "invalid"}`}
                    {...register("city", {
                      required: "There is an error that relates to this field"
                    })}
                    onKeyUp={() => {
                      trigger("city");
                    }}
                  />
                  {errors.city && (
                    <small className="text-danger">{errors.city.message}</small>
                  )}
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">State</label>
                  <input
                    type="text"
                    className={`form-control ${errors.state && "invalid"}`}
                    {...register("state", {
                      required: "please fill the state field"
                    })}
                    onKeyUp={() => {
                      trigger("state");
                    }}
                  />
                  {errors.state && (
                    <small className="text-danger">{errors.state.message}</small>
                  )}
                </div>
              </div>

              <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Zip</label>
                  <input
                    type="text" placeholder="91001"
                    className={`form-control ${errors.zipcode && "invalid"}`}
                    {...register("zipcode", {
                      required: "please fill the code"
                    })}
                    onKeyUp={() => {
                      trigger("zipcode");
                    }}
                  />
                  {errors.zipcode && (
                    <small className="text-danger">{errors.zipcode.message}</small>
                  )}
                </div>
              </div>

            </div>
            <br />
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 ">
                {/* <div>
                    <button type="submit" class="btn-shipping">
                      CONTINUE TO SHIPPING METHOD
                    </button>
                  </div> */}

                <div className='continue_shipping'>
                  <Link to="/shippingMethod" >
                    <button type="submit" class="btn-shipping">
                      CONTINUE TO SHIPPING METHOD
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <p> 2. Shipping Method</p>
            <hr />
            <p> 3. Payment Information</p>
            <hr />
          </form>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
          <div class="aem-Grid aem-Grid--12 button-btn">
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 text-left">
              <p className='expressCheckOut'>Sign in for Express <br />Checkout</p>
            </div>

            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 text__right">
              <Link to="/login"> <button type="button" className='btn-signin'>
                SIGN IN</button></Link>

            </div>
          </div>
          <br />
          <br />
          <br />

          <div class="aem-Grid aem-Grid--12 button-btnone">
            <p className='pricingSummary'>Pricing Summary</p>

            <div class="aem-GridColumn aem-GridColumn--default--6 ">
              <p>Subtotal</p>
              <p>Coupon</p>
              <p>Gift Card</p>
              <p>Estimated tax</p>
              <p>Estimated shipping</p>
              <p><strong>Estimated Total</strong></p>

            </div>
            <div class="aem-GridColumn aem-GridColumn--default--6  text-right">
              <div className='text-Right'>
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
      </div>
    </div>

  )
}

export default ShippingInformation