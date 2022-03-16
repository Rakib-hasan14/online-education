import React from 'react';
import Assesments from './Assesments/Assesments';
import Companies from './Companies/Companies';
import Discussions from './Discussions/Discussions';
import Educator from './Educatior/Educator';
import Fetaure from './Fetaure/Fetaure';
import Header from './Header/Header';
import Management from './Management/Management';
import Skilline from './Skilline/Skilline';
import Tools from './Tools/Tools';
import ToolsLearner from './ToolsLearner/ToolsLearner';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Tools></Tools>
            <Skilline></Skilline>
            <Management></Management>
            <Fetaure></Fetaure>
            <ToolsLearner></ToolsLearner>
            <Assesments></Assesments>
            <Educator></Educator>
            <Discussions></Discussions>
        </div>
    );
};

export default MainPage;