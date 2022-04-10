import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 100vh;    
    position: relative;
    z-index: 1;
`

export const AboutBg = styled.div`
    position: absolute;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.73);

`


export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760pxpx){
        font: 40px;
    }

    @media screen and (max-width: 480px){
        font: 32px;
    }
`

export const AboutH4 = styled.h4`
    color: white;
    font-size: 28px;
    text-align: center;
    margin: auto;

    @media screen and (max-width: 760pxpx){
        font: 40px;
    }

    @media screen and (max-width: 480px){
        font: 32px;
    }
`

export const AboutP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760pxpx){
        font: 24px;
    }

    @media screen and (max-width: 480px){
        font: 18px;
    }
`

export const AboutCaption = styled.p`
    margin-top: 15px;
    color: rgba(1, 130, 1, 0.53);
    font-size:20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760pxpx){
        font: 24px;
    }

    @media screen and (max-width: 480px){
        font: 18px;
    }
`