import React from 'react';
import  './Tools.css'

const Tools = () => {
    return (
        <div className='tools cus-width py-5 my-4'>
            <div className='container'>
                <div className='tool-heading text-center'>
                    <h6>All-in-one <span className='cus-org'>Clound Software</span></h6>
                    <p className='w-75 mx-auto my-3'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
                </div>
                <div className='all-tools my-5 pb-5'>
                    <div className="row mt-5 gy-5">
                        <div className='col-xl-4 position-relative'>
                            <div className='tool px-3'>
                                <div className='tool-img'>
                                <a href=""><img src="https://i.ibb.co/3RJzvr2/Vector-4.png" alt="Vector-4" border="0" /></a>
                                </div>
                                <div className='tool-heading position-absolute px-5'>
                                    <h2>Online Billing, Invoicing, & Contracts</h2>
                                    <p className='mt-3'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 position-relative'>
                            <div className='tool px-3'>
                                <div className='tool-img tool-img2'>
                                <a href=""><img src="https://i.ibb.co/qyDVRDv/Vector-5.png" alt="Vector-5" border="0"/></a>
                                </div>
                                <div className='tool-heading position-absolute px-5'>
                                    <h2>Easy Scheduling & Attendance Tracking</h2>
                                    <p className='mt-3'>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 position-relative'>
                            <div className='tool px-3'>
                                <div className='toll-img tool-img3'>
                                <a href=""><img src="https://i.ibb.co/59mvjYs/Vector-6.png" alt="Vector-6" border="0"/></a>
                                </div>
                                <div className='tool-heading position-absolute px-5'>
                                    <h2>Customer Tracking</h2>
                                    <p className='mt-3'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;