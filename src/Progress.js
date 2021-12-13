import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);
    let count = 0;

    bucket_list.map((l, idx) => {
        if(l.completed){
            count++;
        }
    })

    return (
        <ProgressBar>
            <HighLight width={(count/bucket_list.length)*100 + "%"}/>
            <Dot/>
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const HighLight = styled.div`
    background: #6a5acd ;
    width: ${props => props.width};
    height: 20px;
    transition: width 1s;
    border-radius: 10px;
`;

const Dot = styled.div`
    background-color: #fff;
    border: 5px solid #6a5acd;
    box-sizing: border-box;
    margin: 0px 0px 0px -10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export default Progress;