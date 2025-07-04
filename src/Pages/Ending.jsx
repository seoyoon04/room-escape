import React from "react";
import styled from "styled-components";
import img6 from "../Icons/img6.png";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CongratsText = styled.div`
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

const Ending = () => {
    return (
        <Wrapper>
            <img src={img6} alt="엔딩 이미지"/>
            <CongratsText>
                축하합니다<br/>비밀번호는<br/>
                <span style={{fontSize: '2rem', color: '#d32f2f'}}>1241</span>
            </CongratsText>
        </Wrapper>
    );
};

export default Ending;