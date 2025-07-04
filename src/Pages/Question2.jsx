import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img2 from "../Icons/img2.png";

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

const Question2 = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const passage = `예수님께서는 갈릴래아 호숫가를 지나가시다가 두 형제, 곧 베드로라는 시몬과 그의 동생 안드레아가 호수에 어망을 던지는 것을 보셨다. 그들은 어부였다. 예수님께서 그들에게 이르셨다. “나를 따라오너라. 내가 너희를 사람 낚는 어부로 만들겠다.” 그러자 그들은 곧바로 그물을 버리고 예수님을 따랐다. 거기에서 더 가시다가 예수님께서 다른 두 형제, 곧 제베대오의 아들 야고보와 그의 동생 요한이 배에서 아버지 제베대오와 함께 그물을 손질하는 것을 보시고 그들을 부르셨다. 그들은 곧바로 배와 아버지를 버려두고 그분을 따랐다.`;
    const problem = "마태오 복음 4장 18절부터 22절까지의 말씀으로 만들어진 성가는?";
    const answers = [
        "빛과 소금",
        "가자! 갈릴래아로",
        "나를 따르라",
        "내 뒤를 따라오려면",
        "하늘의 태양은 못되더라도"
    ];

    const handleAnswerClick = (idx) => {
        if (idx === 2) {
            navigate('/question3_234578900');
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
                        <ModalImage src={img2} alt="실패 이미지" />
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

export default Question2;