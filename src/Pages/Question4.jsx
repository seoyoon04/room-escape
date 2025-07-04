import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img4 from "../Icons/img4.png";

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

const Question4 = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const passage = `제베대오의 두 아들 야고보와 요한이 예수님께 다가와, “스승님, 저희가 스승님께 청하는 대로 저희에게 해 주시기를 바랍니다.” 하고 말하였다. 예수님께서 그들에게 “내가 너희에게 무엇을 해 주기를 바라느냐?” 하고 물으시자, 그들이 “스승님께서 영광을 받으실 때에 저희를 하나는 스승님 오른쪽에, 하나는 왼쪽에 앉게 해 주십시오.” 하고 대답하였다. 예수님께서 그들에게 “너희는 너희가 무엇을 청하는지 알지도 못한다. 내가 마시는 잔을 너희가 마실 수 있으며, 내가 받는 세례를 너희가 받을 수 있느냐?” 하고 물으셨다. 그들이 “할 수 있습니다.” 하고 대답하자, 예수님께서 그들에게 말씀하셨다. “내가 마시는 잔을 너희도 마시고, 내가 받는 세례를 너희도 받을 것이다. 그러나 내 오른쪽이나 왼쪽에 앉는 것은 내가 허락할 일이 아니라, 정해진 이들에게 돌아가는 것이다.” 다른 열 제자가 이 말을 듣고 야고보와 요한을 불쾌하게 여기기 시작하였다. 예수님께서는 그들을 가까이 불러 이르셨다. “너희도 알다시피 다른 민족들의 통치자라는 자들은 백성 위에 군림하고, 고관들은 백성에게 세도를 부린다. 그러나 너희는 그래서는 안 된다. 너희 가운데에서 높은 사람이 되려는 이는 너희를 섬기는 사람이 되어야 한다. 또한 너희 가운데에서 첫째가 되려는 이는 모든 이의 종이 되어야 한다. 사실 사람의 아들은 섬김을 받으러 온 것이 아니라 섬기러 왔고, 또 많은 이들의 몸값으로 자기 목숨을 바치러 왔다.”`;
    const problem = "예수님께서 예루살렘 도성에 영광스럽게 입성하신 날, 두 형제가 예수님께 ‘스승님께서 영광을 받으실 때에 저희를 하나는 스승님 오른쪽에, 하나는 왼쪽에 앉게 해주십시오.’하고 말한 형제는?";
    const answers = [
        "시몬과 요한",
        "안드레아와 요한",
        "야고보와 요한",
        "필립보와 시몬",
        "토마스와 시몬"
    ];

    const handleAnswerClick = (idx) => {
        if (idx === 2) {
            navigate('/question5_172374930');
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
                        <ModalImage src={img4} alt="실패 이미지" />
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

export default Question4;