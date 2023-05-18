import React from 'react'
import { Link } from 'react-router-dom';
// hp-text-title-xs-02 hp-text-title-md-03
const GiftCategory = () => {
    return (
        <div className='container my-5'>
            <h2 class=" text-left pb-2">
                Shop our popular gift categories
            </h2>

<div className=' row'>
        {/*-------------------------------1st card------------------------------  */}
            <div className="card m-auto px-0" style={{ width: "15rem" }}>
                <Link to="/category"><img src="../images/gift_category/anniversaryGift.jpg" className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title text-center">Anniversary Gifts</h5>
                </div>
            </div>

              {/*-------------------------------2nd card------------------------------  */}
              <div className="card m-auto px-0" style={{ width: "15rem" }}>
                <Link to="/category"><img src="../images/gift_category/giftHim.jpg" className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title text-center">Gift for Him</h5>
                </div>
            </div>


              {/*-------------------------------3rd card------------------------------  */}
              <div className="card m-auto px-0" style={{ width: "15rem" }}>
                <a href="#"><img src="../images/gift_category/anniversaryGift.jpg" className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                </div>
            </div>

              {/*-------------------------------4th card------------------------------  */}
              <div className="card m-auto px-0" style={{ width: "15rem" }}>
                <a href="#"><img src="../images/gift_category/anniversaryGift.jpg" className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                </div>
            </div>

              {/*-------------------------------5th card------------------------------  */}
              <div className="card m-auto px-0" style={{ width: "15rem" }}>
                <a href="#"><img src="../images/gift_category/anniversaryGift.jpg" className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                </div>
            </div>
            </div>
        </div>
    )

}

export default GiftCategory;