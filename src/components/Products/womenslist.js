import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import WomenProductPage from "../ProductInformation/womensPage";
import women from "../../assets/images/adobe-lady.jpeg";
import BreadCrumb from '../BreadCrumb/breadCrumb';
import '../../assets/scss/productList.css';
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';

const WomenProductList = () => {
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
  const categoryList = products.filter((value) => value.category === "women's clothing");
  return (
    <div className="productCatalog">
      <div className="productCatalog-mobile">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__image">
              <img src={women} alt="women" />
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__title">
              <h3>Women’s Outerwear</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="productCatalog-desktop">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--4">
              <div className="productCatalog__title">
                <h3>Women's</h3>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--8">
              <div className="productCatalog__image">
                <img src={women} alt="women" />
              </div>
            </div>
          </div>
        </div>

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
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <a href="/">Show more</a>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <p>Color</p>
                <button className="btn-1"></button>
                <button className="btn-2"></button>
                <button className="btn-3"></button>
                <button className="btn-4"></button>
                <button className="btn-5"></button>
                <button className="btn-6"></button>
                <button className="btn-7"></button>
                <button className="btn-8"></button>
                <button className="btn-9"></button>
                <button className="btn-10"></button>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <hr></hr>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <WomenProductPage />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WomenProductList;
