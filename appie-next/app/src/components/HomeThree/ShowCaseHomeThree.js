import React, { useRef } from 'react';
import Slider from 'react-slick';
//import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function ShowCaseHomeThree() {
    const sliderRef = useRef();
    // const sliderNext = () => {
    //     sliderRef.current.slickNext();
    // };
    // const sliderPrev = () => {
    //     sliderRef.current.slickPrev();
    // };
    const settings = {
        autoplay: false,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="appie-showcase-area">
            SimpleReactLightbox not installed
                {/* <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="appie-section-title text-center">
                                        <h3 className="appie-title">Creative app showcase</h3>
                                        <p>The app provides design and digital marketing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row appie-showcase-slider">
                                <div className="col-lg-12">
                                    <Slider ref={sliderRef} {...settings}>
                                        <div>
                                            <div className="appie-showcase-item mt-30">
                                                <a className="appie-image-popup">
                                                    <img src='/assets/images/showcase-1.png' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="appie-showcase-item mt-30">
                                                <a className="appie-image-popup">
                                                    <img src='/assets/images/showcase-2.png' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="appie-showcase-item mt-30">
                                                <a className="appie-image-popup">
                                                    <img src='/assets/images/showcase-3.png' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="appie-showcase-item mt-30">
                                                <a className="appie-image-popup">
                                                    <img src='/assets/images/showcase-4.png' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="appie-showcase-item mt-30">
                                                <a className="appie-image-popup">
                                                    <img src='/assets/images/showcase-5.png' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-shape-1">
                            <img src='/assets/images/shape/shape-14.png' alt="" />
                        </div>
                        <div className="showcase-shape-2">
                            <img src='/assets/images/shape/shape-13.png' alt="" />
                        </div>
                        <div className="showcase-shape-3">
                            <img src='/assets/images/shape/shape-12.png' alt="" />
                        </div>
                        <div className="showcase-shape-4">
                            <img src='/assets/images/shape/shape-15.png' alt="" />
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox> */}
            </section>
        </>
    );
}

export default ShowCaseHomeThree;
