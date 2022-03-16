import React from 'react';
import './Discussions.css'

const Discussions = () => {
    return (
        <section className='cus-width my-5 py-5'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6'>
                        <div>
                            <img className='w-75' src="https://i.ibb.co/MR7jMVr/Group-106.png" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='discussion-left'>
                            <h1>One-on-One  <span className='cus-org'>Discussions</span></h1>
                            <p>ETeachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discussions;