import React from 'react';
import './Management.css'

const Management = () => {
    return (
        <section className="management cus-width my-5 py-5">
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='m-right'>
                            <div className='m-right-first'>
                                <h1>Everything you can do in a physical classroom, <span className='cus-org'>you can do with Skilline</span></h1>
                                <img src="https://i.ibb.co/B45Zbwn/Ellipse-12.png" alt="" />
                            </div>
                            <div className='m-right-scnd'>
                                <p className='my-3'>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                                <img src="https://i.ibb.co/B45Zbwn/Ellipse-12.png" alt="" />
                            </div>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='m-left-content'>
                            <div className='m-left'>
                                <div className='racth-first'>
                                    <img src="https://i.ibb.co/JqrybWX/Rectangle-18.png" alt="" />
                                </div>
                                <div className='m-left-img'>
                                    <img className='w-100' src="https://i.ibb.co/rxcFHZB/confident-teacher-explaining-lesson-pupils-1.png" alt="" />
                                    <div className='polygon-sec'>
                                        <img className='polygon-img' src="https://i.ibb.co/PhpnWY3/Polygon-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='racth-scnd'>
                                <img src="https://i.ibb.co/0s7csVg/Rectangle-17.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Management;