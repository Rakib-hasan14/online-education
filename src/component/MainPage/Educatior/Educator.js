import React from 'react';
import './Educator.css'

const Educator = () => {
    return (
        <section className='cus-width my-5 py-5'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6'>
                        <div className='learner-right'>
                            <h2 className='pe-5'><span className='cus-org'>Class Managements</span>Tools For Educators</h2>
                            <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='learner-left'>
                            <img className='w-100' src="https://i.ibb.co/ZL1ncY4/Group-124.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Educator;