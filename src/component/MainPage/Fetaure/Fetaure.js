import React from 'react';
import './Fetaure.css'

const Fetaure = () => {
    return (
        <section className='cus-width my-5' >
            <div className='container'>
                <div className='fetaures-heading text-center'>
                    <h1 className='mb-3'>Our <span className='cus-org'>Fetaures</span></h1>
                    <p>This very extraordinary feature, can make learning activities more efficient</p>
                </div>
                <div className="row my-5">
                    <div className='col-md-6'>
                        <div className='h-100'>
                            <img className='w-100 h-100' src="https://i.ibb.co/j8XXghr/Group-71.png" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                             <h2>A <span className='cus-org'>user interface</span> designed for the classroom</h2>
                             <div className='row gy-3 mt-2'>
                                <div className='col-4'>
                                    <div className='fetaure-right-img d-flex align-items-center justify-content-center'>
                                        <img src="https://i.ibb.co/Cm7mgyK/Group-72.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <p className='fetaure-left=heading'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                                </div>
                                <div className='col-4'>
                                    <div className='fetaure-right-img d-flex align-items-center justify-content-center'>
                                        <img src="https://i.ibb.co/kQrTT8z/Group-73.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <p className='fetaure-left=heading'>TA’s and presenters can be moved to the front of the class.</p>
                                </div>
                                <div className='col-4'>
                                    <div className='fetaure-right-img d-flex align-items-center justify-content-center'>
                                        <img src="https://i.ibb.co/fHJrmpK/users-2.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <p className='fetaure-left=heading'>Teachers can easily see all students and class data at one time.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fetaure;