import React from 'react'
import CatHome from '../components/CategoryHome';
import GiftCategory from '../components/PopGiftCategory';



const Home = () => {
    return (
        <>
            <div className=" wt-text-center-xs wt-hide-xs wt-show-lg wt-p-md-3 wt-p-xs-3 wt-text-black wt-bg-turquoise-tint bg-no-color-header">
                <div className='container'>
                    <p className="wt-body-max-width wt-text-heading-01 key" style={{ fontSize: "2.3rem", fontWeight: "light" }}>
                        Find things you'll love. Support independent sellers. Only on Etsy.
                    </p>
                    <CatHome />
                </div>
                <GiftCategory />
            </div>
        </>
    )
}
export default Home;