import React from 'react';
import './Companies.css'

const Companies = () => {
    return (
        <div className='trusted-com pb-4'>
                <h6 className='text-center mb-3'>Trusted by 5,000+ companies worldwide</h6>
                <div className='container mt-5'>
                <div className='row g-5'>
                    <div className='col-md-2 col-4'>
                      <h6 className='google-com'>Google</h6>
                    </div>
                    <div className='col-md-2 col-4 com-img'>
                        <img src="https://i.ibb.co/L05427H/Vector.png" alt="" />
                    </div>
                    <div className='col-md-2 col-4  com-img'>
                        <img src="https://i.ibb.co/2sD1nBy/Vector-2.png" alt="" />
                    </div>
                    <div className='col-md-2 col-4  com-img2'>
                        <img src="https://i.ibb.co/DQr1z85/Vector4.png" alt="" />
                    </div>
                    <div className='col-md-2 col-4  com-img3'>
                        <img src="https://i.ibb.co/XZMjGdb/Vector5.png" alt="" />
                    </div>
                    <div className='col-md-2 col-4 com-img4'>
                        <img src="https://i.ibb.co/9GT3pHd/Vector-3.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Companies;