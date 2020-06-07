import React, {useEffect, useState} from "react";
import Glide from '@glidejs/glide'
import {NavLink} from "react-router-dom";

const Carousel = ({element = 'glide', children}) => {

    const [slider] = useState(new Glide(`.${element}`, {
            type: 'carousel',
            perView: 5,
            startAt: 0,
            // autoplay: 3000,
            dragThreshold: false,
            breakpoints: {
                600: {perView: 1},
                800: {perView: 2},
                1000: {perView: 3},
                1200: {perView: 4},
            },
        }
    ));

    useEffect(() => {
        slider.mount()
    }, []);
    return (
        <div className={element + ` my-auto`}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {
                        new Array(8).fill(0).map((item, index) => {
                            return <li className="glide__slide" key={index}>
                                <div className="item_glide">

                                </div>
                            </li>;
                        })
                    }
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="changeBtn prevBtn" data-glide-dir="<"><i className="fas fa-chevron-left"></i>
                </button>
                <button className="changeBtn nextBtn" data-glide-dir=">"><i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>


    )
};

export default Carousel;