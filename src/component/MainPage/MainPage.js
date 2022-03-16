import React from 'react';
import Companies from './Companies/Companies';
import Header from './Header/Header';
import Skilline from './Skilline/Skilline';
import Tools from './Tools/Tools';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Tools></Tools>
            <Skilline></Skilline>
        </div>
    );
};

export default MainPage;