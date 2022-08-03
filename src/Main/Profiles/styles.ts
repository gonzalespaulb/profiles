import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
    
    export const ProfileCreateForm = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    background: #f0f0f0;
    position: relative;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    margin-bottom: 25px;
`;

export const Input = styled.input`

`;

export const SubmitBtn = styled.div`
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
`;

export const SubmitText = styled.h3`
    font-size: 14px;
    line-height: 14px;
    color: white;
`;