import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img5 from "../Icons/img5.png";

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

const Question5 = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const passage = `예수님께서는 당신의 어머니와 그 곁에 선 사랑하시는 제자를 보시고, 어머니에게 말씀하셨다. “여인이시여, 이 사람이 어머니의 아들입니다. ”이어서 그 제자에게 “이분이 네 어머니시다.” 하고 말씀하셨다. 그때부터 그 제자가 그분을 자기 집에 모셨다.`;
    const problem = "예수님께서 돌아가실 때 자신의 어머니 마리아를 맡긴 제자는?";
    const answers = [
        "베드로",
        "필립보",
        "야고보",
        "토마스",
        "요한"
    ];

    const handleAnswerClick = (idx) => {
        if (idx === 4) {
            navigate('/ending_241234');
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
                        <ModalImage src={img5} alt="실패 이미지" />
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

export default Question5;