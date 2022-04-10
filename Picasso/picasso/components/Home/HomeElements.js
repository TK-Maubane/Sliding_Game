import styled from 'styled-components'

export const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
`

export const HomeVideo = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeH1 = styled.h1`
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

export const HomeP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760pxpx){
        font: 24px;
    }

    @media screen and (max-width: 480px){
        font: 18px;
    }
`
