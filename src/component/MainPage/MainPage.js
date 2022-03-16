import React from 'react';
import Companies from './Companies/Companies';
import Header from './Header/Header';
import Management from './Management/Management';
import Skilline from './Skilline/Skilline';
import Tools from './Tools/Tools';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Tools></Tools>
            <Skilline></Skilline>
            <Management></Management>
        </div>
    );
};

export default MainPage;