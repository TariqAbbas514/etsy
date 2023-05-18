import React from "react";

const CatHome = () => {

    return (
        <div className='row pics'>
            <div className='col'>
                <img src='../images/img1.webp' alt='category pic' className='img-radius' />
                <div><b>Personalised Gifts</b></div>
            </div>

            <div className='col'>
                <img src='../images/img2.webp' alt='category pic' className='img-radius' />
                <div><b>DIY & Crafts</b></div>
            </div>

            <div className='col'>
                <img src='../images/img3.webp' alt='category pic' className='img-radius' />
                <div><b>For Kids & Babies</b></div>
            </div>

            <div className='col'>
                <img src='../images/img4.webp' alt='category pic' className='img-radius' />
                <div><b>Jewellery</b></div>
            </div>

            <div className='col'>
                <img src='../images/img5.webp' alt='category pic' className='img-radius' />
                <div><b>Wedding & Engagement</b></div>
            </div>

            <div className='col'>
                <img src='../images/img6.jpg' alt='category pic' className='img-radius' />
                <div><b>On Sale</b></div>
            </div>
        </div>
    );
}

export default CatHome;