import React from 'react';
import './ToolsLearner.css'

const ToolsLearner = () => {
    return (
        <section className='cus-width my-5 py-5'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6'>
                        <div className='learner-right'>
                            <h2><span className='cus-org'>Tools</span> For Teachers And Learners</h2>
                            <p>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='learner-left'>
                            <img className='w-100' src="https://i.ibb.co/BTPdFvM/Group-122.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsLearner;