import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img1 from "../Icons/img1.png";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Question = styled.div`
    width: 80vw;
    border: 2px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 2vw;
    box-sizing: border-box;
    margin-bottom: 2rem;
`

const ProblemBox = styled.div`
    width: 80vw;
    background: #f9f9f9;
    border: 1.5px solid #1976d2;
    border-radius: 8px;
    padding: 1.5rem 2vw;
    margin-bottom: 2rem;
    font-size: 1.15rem;
    font-weight: 500;
    color: #222;
    box-sizing: border-box;
`;

const AnswerList = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const AnswerButton = styled.button`
    font-size: 1rem;
    padding: 0.6rem 2rem;
    border: 2px solid #1976d2;
    border-radius: 8px;
    background: #f5faff;
    color: #1976d2;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    text-align: center;
    white-space: normal;
    box-sizing: border-box;
    &:hover {
        background: #1976d2;
        color: #fff;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalBox = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;

const ModalImage = styled.img`
    width: 50vw;
    height: 50vh;
    object-fit: contain;
    margin-bottom: 1.5rem;
`;

const RestartButton = styled.button`
    margin-top: 1.5rem;
    padding: 0.7rem 2.2rem;
    font-size: 1.1rem;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
        background: #1256a3;
    }
`;

const Question1 = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const passage = `한처음에 말씀이 계셨다. 말씀은 하느님과 함께 계셨는데 말씀은 하느님이셨다. 그분께서는 한처음에 하느님과 함께 계셨다. 모든 것이 그분을 통하여 생겨났고 그분 없이 생겨난 것은 하나도 없다. 그분 안에 생명이 있었으니 그 생명은 사람들의 빛이었다. 그 빛이 어둠 속에서 비치고 있지만 어둠은 그를 깨닫지 못하였다. 하느님께서 보내신 사람이 있었는데 그의 이름은 요한이었다. 그는 증언하러 왔다. 빛을 증언하여 자기를 통해 모든 사람이 믿게 하려는 것이었다. 그 사람은 빛이 아니었다. 빛을 증언하러 왔을 따름이다. 모든 사람을 비추는 참빛이 세상에 왔다. 그분께서 세상에 계셨고 세상이 그분을 통하여 생겨났지만 세상은 그분을 알아보지 못하였다. 그분께서 당신 땅에 오셨지만 그분의 백성은 그분을 맞아들이지 않았다. 그분께서는 당신을 받아들이는 이들, 당신의 이름을 믿는 모든 이에게 하느님의 자녀가 되는 권한을 주셨다. 이들은 혈통이나 육욕이나 남자의 욕망에서 난 것이 아니라 하느님에게서 난 사람들이다. 말씀이 사람이 되시어 우리 가운데 사셨다. 우리는 그분의 영광을 보았다. 은총과 진리가 충만하신 아버지의 외아드님으로서 지니신 영광을 보았다.`;
    const problem = "요한 복음 1장 1절부터 18장까지의 말씀으로 만들어진 성가는?";
    const answers = [
        "임마누엘",
        "로고스 찬가",
        "기대",
        "꽃",
        "나는 세상의 빛입니다"
    ];

    const handleAnswerClick = (idx) => {
        if (idx === 1) {
            navigate('/question2_123456789');
        } else {
            setShowModal(true);
        }
    };

    const handleRestart = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <Wrapper>
            <Question>
                {passage}
            </Question>
            <ProblemBox>
                {problem}
            </ProblemBox>
            <AnswerList>
                {answers.map((answer, idx) => (
                    <AnswerButton key={idx} onClick={() => handleAnswerClick(idx)}>
                        {`${String.fromCharCode(9312 + idx)} ${answer}`}
                    </AnswerButton>
                ))}
            </AnswerList>
            {showModal && (
                <ModalOverlay>
                    <ModalBox>
                        <ModalImage src={img1} alt="실패 이미지" />
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            marginBottom: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            오답입니다!<br/>다시 도전해보세요.
                        </div>
                        <RestartButton onClick={handleRestart}>다시 시작하기</RestartButton>
                    </ModalBox>
                </ModalOverlay>
            )}
        </Wrapper>
    );
};

export default Question1;