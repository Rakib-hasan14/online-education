import React from 'react';
import './Skilline.css'

const Skilline = () => {
    return (
        <section className='skilline cus-width'>
            <div className='container skilline-content'>
                <h1 className='text-center'>What is <span className='cus-org'>Skilline?</span></h1>
                <p className='w-75 mx-auto my-4'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <div className='row my-5 gy-4'>
                    <div className='col-xl-6'>
                        <div className='skilline-bottom'>
                            <img className="skilline-img" src="https://i.ibb.co/g7h2s00/Rectangle-19.png" alt="" />
                            <div className='skilline-bottom-heading'>
                                <h1>FOR INSTRUCTORS</h1>
                                <button className='skilline-buttom-border1 mt-2'>Start a class today.</button>   
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='skilline-bottom'>
                                <img className="skilline-img" src="https://i.ibb.co/tJcqHkN/Rectangle-21.png" alt="" />
                                <div className='skilline-bottom-heading'>
                                    <h1>FOR STUDENTS</h1>
                                    <button className='skilline-buttom-border2 mt-2'>Enter access code.</button>   
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skilline;