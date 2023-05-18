import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ListDB from '../data/ProductsData';



const ProductDetailPage = () => {
    let { id } = useParams();
    let navigate = useNavigate()
    let fData = ListDB.find(x => x.id == id)


    return (
        <div>
            <a className='btn btn-warning my-4'
                onClick={() => navigate('/category')}>Back to Home</a>

            <div class="row m-0 p-0">
                <div class="col-lg-8 col-md-6 col-sm-12">
                    <img src={fData.pic} />
                    <h1>Id : {id}</h1>
                    <h1> {fData.pName}</h1>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <p><span className='fw-bolder h1-font-size'>USD {fData.price}</span><del> {fData.oldPrice}</del></p>
                    <p className='m-0 mb-2'>Local taxes included (where applicable)</p>
                    <p className='fs-5'>{fData.brief_detail}</p>
                    <span className='me-3'><a>{fData.seller}</a></span><span>  <i className="me-1 fa fa-heart-o mt-2 " aria-hidden="true"></i>
                        Follow</span>
                    <div className='mt-2'>{fData.sales} sales | stars</div>
                    <button class="btn btn-success w-100 rounded-pill fw-bold my-3" type="submit">
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage

