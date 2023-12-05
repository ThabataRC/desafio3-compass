import Styled from "styled-components"

interface ButtonProps {
    color?: "orange" | "black"
}

export const Button = Styled.button<ButtonProps>`

    display: flex;
    width: 100%;
    padding: 16px 24px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 46px;
    border: 1px solid ${props => (props.color === 'orange' ? 'var(--orange)' : 'var(--gray-gray-900)')};
    background: ${props => (props.color === 'orange' ? 'var(--gradient-button)' : 'var(--gradient-background)')};

    color: var(--white);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
    &:hover {
        color:  ${props => (props.color === 'orange' ? 'var(--gray-gray-900)' : 'var(--orange)')};;

    }
`