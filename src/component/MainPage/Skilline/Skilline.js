import React from 'react';
import './Skilline.css'

const Skilline = () => {
    return (
        <section className='skilline cus-width'>
            <div className='container skilline-content'>
                <h1 className='text-center'>What is <span className='cus-org'>Skilline?</span></h1>
                <p className='w-75 mx-auto my-4'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <div className='row'>
                    <div className='col-md-6'>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </div>
        </section>
    );
};

export default Skilline;