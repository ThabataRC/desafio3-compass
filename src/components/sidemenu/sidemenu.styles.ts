import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 350px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: var(--gray-gray-700);
    height: 100vh;


    .wrapper {
        margin-top: 42px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 48px;
    }
`

export const Content = styled.div`
    width: 240px;
    display: flex;

    border-radius: 8px;
    border: 2px solid var(--gray-gray-600);
    flex-direction: column;

`

interface LinkProps {
    active?: boolean
}

export const Link = styled.a<LinkProps>`
    height: 48px;
    padding: 12px 24px;
    ${(props) =>
        props.active &&
        css`
            background: var(--gradient-button);
        `};
    color: var(--white);
    text-decoration: none;
    text-align: center;

    display: flex;
    align-items: center;

    &:hover {
        color: var(--orange);
    }
`;