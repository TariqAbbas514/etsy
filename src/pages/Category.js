import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ data }) => {

    return (
        <div>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="text-center container py-5">
                    <h4 className="mt-4 mb-5"><strong>Find something you love</strong></h4>
                    <div className="row">
                    
                        {data.map((x) => {
                            return (
                                <div className="col-lg-3 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <img src={x.image} className="w-100" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-60">
                                                        <h5><span className="badge bg-primary ms-2">{x.sale_status}</span></h5>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href className="text-reset">
                                                <h5 className="card-title mb-3">{x.title}</h5>
                                            </a>
                                            <a href>
                                                <p>
                                                    <span>
                                                        <span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg style={{ width: "1.7vh" }} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" ></path></svg></span>
                                                        <span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="1"><svg style={{ width: "1.7vh" }} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                                                        <span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="2"><svg style={{ width: "1.7vh" }} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                                                        <span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="3"><svg style={{ width: "1.7vh" }} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                                                        <span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="4"><svg style={{ width: "1.7vh" }} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg></span>
                                                    </span>
                                                    ({x.ratings})</p>
                                            </a>
                                            <h6 className="mb-3">{x.currency_code}{x.price}</h6>
                                            {/* <Link to={`/category/${x.id}`} className="btn btn-primary">
                                                BUY NOW
                                            </Link> */}
                                            {/* <Link to={`/category/${x.id}`} className="btn btn-primary">Deatil</Link> */}
                                            <Link to={`/category/${x.id}`} className="btn btn-primary">Deatil</Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
            </section>

        </div>
    )
}


export default Category
                    {/* <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <img src="../images/gift_category/sub_gift/sg2.avif" className="w-100" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-60">
                                                        <h5><span className="badge bg-success ms-2">Eco</span></h5>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href className="text-reset">
                                                <h5 className="card-title mb-3">Product name</h5>
                                            </a>
                                            <a href className="text-reset">
                                                <p>Category</p>
                                            </a>
                                            <h6 className="mb-3">$61.99</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                                            <img src="../images/gift_category/sub_gift/sg4.avif" className="w-100" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-60">
                                                        <h5>
                                                            <span className="badge bg-success ms-2">Eco</span><span className="badge bg-danger ms-2">-10%</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href className="text-reset">
                                                <h5 className="card-title mb-3">Product name</h5>
                                            </a>
                                            <a href className="text-reset">
                                                <p>Category</p>
                                            </a>
                                            <h6 className="mb-3">
                                                <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <img src="../images/gift_category/sub_gift/sg5.avif" className="w-100" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-60" />
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href className="text-reset">
                                                <h5 className="card-title mb-3">Product name</h5>
                                            </a>
                                            <a href className="text-reset">
                                                <p>Category</p>
                                            </a>
                                            <h6 className="mb-3">$61.99</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                                            <img src="../images/gift_category/sub_gift/sg6.avif" className="w-100" />
                                            <a href="#!">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-60">
                                                        <h5>
                                                            <span className="badge bg-primary ms-2">New</span><span className="badge bg-success ms-2">Eco</span><span className="badge bg-danger ms-2">-10%</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href className="text-reset">
                                                <h5 className="card-title mb-3">Product name</h5>
                                            </a>
                                            <a href className="text-reset">
                                                <p>Category</p>
                                            </a>
                                            <h6 className="mb-3">
                                                <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
               






