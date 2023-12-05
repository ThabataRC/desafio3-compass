import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    img { 
        transform: translateY(100%) translateX(-220%);
    }

    .msgError {
        color: var(--orange);
        text-align: center;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
            }
`;

export const InputComponent = styled.input`
    display: flex;
    width: 100%;
    min-width: 330px;
    height: 15px;
    padding: 19px 24px;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border-radius: 46px;
    border: 2px solid var(--white);
    color: var(--white);

    font-family: Poppins Regular;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: var(--gray-gray-300);
    }

    &:focus {
        outline: 2px solid var(--yellow);
    }


`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`