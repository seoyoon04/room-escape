import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.div`
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
`

const BoldClickable = styled.span`
    font-weight: bold;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 4px;
    padding: 0 4px;
    transition: background 0.2s;
    &:hover {
        background: #e0e0e0;
    }
`;

const Start = () => {
    const navigate = useNavigate();
    const before = `예수님께서는 아버지께서 모든 것을 당신 손에 내주셨다는 것을, 또 당신이 하느님에게서 나왔다가 하느님께 돌아간다는 것을 아시고, 식탁에서 일어나시어 겉옷을 벗으시고 수건을 들어 허리에 두르셨다. 그리고 대야에 물을 부어 제자들의 발을 씻어 주시고, 허리에 두르신 수건으로 닦기 시작하셨다. 그렇게 하여 예수님께서 시몬 베드로에게 이르시자 베드로가, “주님, 주님께서 제 발을 씻으시렵니까?” 하고 말하였다. 예수님께서는 “내가 하는 일을 네가 지금은 알지 못하지만 나중에는 깨닫게 될 것이다.” 하고 대답하셨다. 그래도 베드로가 예수님께 “제 발은 절대로 씻지 못하십니다.” 하니, 예수님께서 그에게 대답하셨다. “내가 너를 씻어 주지 않으면 너는 나와 함께 아무런 몫도 나누어 받지 못한다. 그러자 시몬 베드로가 예수님께 말하였다. “주님, 제 발만 아니라 손과 머리도 씻어 주십시오.” 예수님께서 그에게 말씀하셨다. “목욕을 한 이는 온몸이 깨끗하니 발만 씻으면 된다. 너희는 깨끗하다. 그러나 다 그렇지는 않다.” 예수님께서는 이미 당신을 팔아넘길 자를 알고 계셨다. 그래서 “너희가 다 깨끗한 것은 아니다.” 하고 말씀하신 것이다. 예수님께서는 제자들의 발을 씻어 주신 다음, 겉옷을 입으시고 다시 식탁에 앉으셔서 그들에게 이르셨다. “내가 너희에게 한 일을 깨닫겠느냐? 너희가 나를 ‘스승님’, 또 ‘주님’ 하고 부르는데, 그렇게 하는 것이 옳다. 나는 사실 그러하다. 주님이며 스승인 내가 너희의 발을 씻었으면, 너희도 서로 발을 씻어 주어야 한다. `;
    const bold = "내가 너희에게 한 것처럼 너희도 하라고, 내가 본을 보여 준 것이다.";
    const after = ` 내가 진실로 진실로 너희에게 말한다. 종은 주인보다 높지 않고, 파견된 이는 파견한 이보다 높지 않다. 이것을 알고 그대로 실천하면 너희는 행복하다. 내가 너희를 모두 가리켜 말하는 것은 아니다. 내가 뽑은 이들을 나는 안다. 그러나 ‘제 빵을 먹던 그가 발꿈치를 치켜들며 저에게 대들었습니다.’라는 성경 말씀이 이루어져야 한다. 일이 일어나기 전에 내가 미리 너희에게 말해 둔다. 일이 일어날 때에 내가 나임을 너희가 믿게 하려는 것이다. 내가 진실로 진실로 너희에게 말한다. 내가 보내는 이를 맞아들이는 사람은 나를 맞아들이는 것이고, 나를 맞아들이는 사람은 나를 보내신 분을 맞아들이는 것이다.”`;

    return (
        <Wrapper>
            <Text>
                {before}
                <BoldClickable onClick={() => navigate('/question1_748302900')}>{bold}</BoldClickable>
                {after}
            </Text>
        </Wrapper>
    );
};

export default Start;