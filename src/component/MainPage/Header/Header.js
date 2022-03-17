import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='headerScnd'>
                <div className='Navbar container pt-4'>
                <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <div className='nav-icon'>
      <h1 className='nav-heading ms-3 pt-3'>Skilline</h1>
   </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className='w-100 d-flex justify-content-end'>
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Career</a>
        <a class="nav-link" href="#">Blog</a>
        <a class="nav-link" href="#" tabindex="-1">About us</a>
        <button className='d-inline btn1 me-3 mb-2'>Log in</button>
        <button className='d-inline btn2'>Sign up</button>
      </div>
      </div>
    </div>
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
                                    <img className='w-100' src="https://i.ibb.co/WsVb1qs/header-pic.png" alt="" />
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