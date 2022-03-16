import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='headerScnd'>
                <div className='Navbar container pt-4'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <div className='nav-icon'>
                            
                        <h1 className='nav-heading ms-3 pt-3'>Skilline</h1>
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active me-3" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link me-3" href="#">Career</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link me-3" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">About us</a>
                        </li>
                        </ul>
                        </div>
                        </div>
                        <div className='buttons w-50'>
                            <button className='d-inline btn1 me-3'>Log in</button>
                            <button className='d-inline btn2'>Sign up</button>
                        </div>
                </nav>
                </div>
                <div className='header-content mt-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1 className='header-heading pe-4 my-4'><span className='cus-org'>Studying</span> online is now much easier</h1>
                                <p className='header-heading-scnd pe-4 my-4'>Skilline is an interesting platform that will teach you in more an interactive way</p>
                                <button className='btn3 my-4 me-4'>Join for free</button>
                                <span><i class="fas-solid fa-play"></i></span>
                            </div>
                            <div className='col-md-6 z-index'>
                                <div className='header-right'>
                                    <div className='assisted-student'>
                                        <div className="row">
                                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                            <img className="ms-2" src="https://i.ibb.co/CMcTD9q/Group-6.png``" alt="" />
                                        </div>
                                        <div className='col-md-8 mt-2'>
                                               <div className='sub-hed'>
                                               <h6>250k</h6>
                                                <p>Assisted student</p>
                                               </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='user-exp'>
                                        <div className="row">
                                        <div className='col-md-4'>
                                            <p><i class="fa-solid fa-floppy-disk"></i></p>
                                        </div>
                                        <div className='col-md-8 mt-2'>
                                               <div className='sub-hed'>
                                               <h6 className='mb-0'>User experiance class</h6>
                                                <p className='mb-0'>Today at 9am</p>
                                                <button className='btn4 '>Join now</button>
                                               </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='message'>
                                        <div className="row">
                                        <div className='col-md-4'>
                                            <p><i class="fa-solid fa-floppy-disk"></i></p>
                                        </div>
                                        <div className='col-md-8 mt-2'>
                                               <div className='sub-hed'>
                                               <h6 className='mb-0'>250k</h6>
                                                <p>Assisted student</p>
                                               </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='header-img w-100'>
                                        <img className='w-100' src="https://i.ibb.co/LtLYySx/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className='shape' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fill="#FFF2E1" fill-opacity="1" d="M0,32L120,64C240,96,480,160,720,160C960,160,1200,96,1320,64L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </header>
    );
};

export default Header;