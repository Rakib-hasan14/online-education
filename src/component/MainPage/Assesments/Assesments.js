import React from 'react';
import './Assesments.css'

const Assesments = () => {
    return (
        <section className='cus-width my-5 py-5'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6'>
                        <div>
                            <img className='w-75' src="https://i.ibb.co/RyTc8Nd/Group-92.png" alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='assesments-left'>
                            <h1>Assesments, <span className='cus-org'>Quizess</span>, Tests</h1>
                            <p>Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assesments;