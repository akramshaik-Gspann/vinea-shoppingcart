import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import SmartGearProductPage from "../ProductInformation/smartGearPage";

import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';

import smartGear from "../../assets/images/smartGear.jpg";
import BreadCrumb from '../BreadCrumb/breadCrumb';
import '../../assets/scss/productList.css';
// import Pagination from "../Pagination/pagination";

const SmartGearProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const categoryList = products.filter((value) => value.category === "jewelery");
  return (
    <div className="productCatalog">
      <div className="productCatalog-mobile">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__image">
              <img src={smartGear} alt="smartGear" />
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__title">
              <h3>Smart Gear</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="productCatalog-desktop">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div className="productCatalog__title">
              <h3>Smart Gear</h3>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div className="productCatalog__image">
              <img src={smartGear} alt="smartGear" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadcrumbslist">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <BreadCrumb />
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <div className="product-filter">
                <button><FaArrowsAlt /> Filter Results</button><button><BiSort /> Sort Ptoducts</button>
              </div>
              <div className="breadcrumbslist__filter">
                <p>{categoryList.length} Results</p>
                <div className="sortByLatest">
                  <select>
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="productfilters">
                <h4>Filters</h4>
                <p>Categories</p>
                <label><input type="checkbox" />Jewellery</label>
                <label><input type="checkbox" />Electronics</label>
                <label><input type="checkbox" />Men's Clothing</label>
                <label><input type="checkbox" />Women's Clothing</label>
                <hr></hr>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <SmartGearProductPage />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartGearProductList;
