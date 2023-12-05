import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-background);
    width: 100%;
    height: 100vh;

    color: var(--white);

    h1 {
        font-size: 64px;
    }

    

`
export const SectionForm = styled.form`
    width: 756px;
    height: 982px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .input-containers {
        display: flex;
        width: 55%;
        gap: 24px;
        flex-direction: column;
    }
    
    header {
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin-top: 24px;

        a {
            color: var(--white);
            text-decoration: none;
            font-weight: bold;
        }
    }

`

export const SectionImage = styled.section`
    background-img: url('/public/background.png');

`