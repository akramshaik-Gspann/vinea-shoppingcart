import React from 'react'
// import "../../Style/Filter.scss"
import '../../assets/scss/Filter.css';
function Filter() {
    return (
        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Categories</h6>
                <label><input type="checkbox" id="option" name="option" value="option" />&nbsp;Women</label> <br />
                <label><input type="checkbox" id="option" name="option" value="option" />&nbsp;Men</label> <br />
                <label><input type="checkbox" id="option" name="option" value="option" />&nbsp;Jewelery</label> <br />
                <label><input type="checkbox" id="option" name="option" value="option" />&nbsp;Electronics</label> <br />
                <hr />
            </div>
        </div>
    )
}
export default Filter