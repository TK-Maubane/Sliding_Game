import React from 'react'
//import Dog_Sleeping '/'
import { HomeContainer, HomeBg, HomeVideo, HomeContent, HomeH1, HomeP } from './HomeElements' 

const HomeSection = () => {
    return (
        <HomeContainer>
            <HomeBg>
                <HomeVideo autoPlay loop muted src={'/Dog_Sleeping.mp4'} type='video/mp4'/>
            </HomeBg>
            <HomeContent>
                <HomeH1> Picasso, Phat Boy</HomeH1>
                <HomeP>
                    The life and times of a happy little Phat Boy! <br/>
                    A slice of the internet dedicated to convincing people 
                    how awsome Picasso is...
                </HomeP>
                {/* <HomeBtnWrapper>

                </HomeBtnWrapper> */}
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
