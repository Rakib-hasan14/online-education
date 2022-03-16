import React from 'react';
import "./Integration.css"

const Integration = () => {
    return (
        <section className='cus-width py-5 my-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <div>
                                    <img src="https://i.ibb.co/X8Dg6QF/image-2.png" alt="" />
                                </div>
                                <div className='ms-5 mt-5 ps-4'>
                                    <img src="https://i.ibb.co/47BKKhL/image-3.png" alt="" />
                                </div>
                            </div>
                            <div className='col-6 mt-4'>
                                <div className='mt-5'>
                                    <img src="https://i.ibb.co/4M3fRcF/image-5.png" alt="" />
                                </div>
                                <div className='ms-5 mt-5 ps-4'>
                                    <img src="https://i.ibb.co/2cvbhsv/image-6.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <div className='integration-left'>
                            <h6>------- INTEGRATION</h6>
                            <h1>200+ educational tools and platform <span className='cus-org'>integration</span></h1>
                            <p>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                            <button>See all integration</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;