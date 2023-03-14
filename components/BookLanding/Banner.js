import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';

const Banner = () => {
    const [toggler, setToggler] = useState(false);
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                'https://www.youtube.com/embed/bk7McNUjWgw'
                ] }
            />

			<div className="main-banner book-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <span>By: John Smith</span>
                                        <h1>Big Mockup Cover Vault</h1>
                                        <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                                        
                                        <Link href="#" className="btn btn-primary">
                                            BUY NOW
                                        </Link>
                                        <Link
                                            href="#"
                                            className="video-btn popup-youtube"
                                            onClick={ () => setToggler(!toggler) }
                                        >
                                           
                                                Watch Video 
                                                <i className="icofont-play-alt-3"></i>
                                           
                                        </Link>
                                        <em className="inlucdebooks">* eBook includes iBooks, PDF & ePub versions</em>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="book-image">
                                        <img src='/images/book-img.png' alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="creative-shape">
                    <img src='/images/bg3.png' alt="bg" />
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                <div className="shape8 rotateme">
                    <img src='/images/shape8.svg' alt="shape" />
                </div>
                <div className="shape9">
                    <img src='/images/shape9.svg' alt="shape" />
                </div>
            </div>
		</>
    );
}

export default Banner;