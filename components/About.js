import React from 'react';
import styled from 'styled-components';
import Heading from './commons/Heading';
import Fade from 'react-reveal/Fade';
import Divider from './commons/Divider';

const About = () => {
    return (
        <StyledAbout>
            <Heading text={'about'} />
            <span className={'location'}>
                📍 Current Location: Belgrade, Serbia
            </span>
            <img className={'aya-img'} src={'../../static/img/aya.png'} alt={'me'} />
            <h2 className={'intro'}>
                I’m a Front End &amp; Back End
                Developer from Israel.
            </h2>
            <div className={'about-text'}>
                I came from the designing world and
                fell in love with the way code is
                bringing everything to life.
                I’m currently specialized in React
                and Node.js web applications,
                with SSR using Next.js.
            </div>
            <Fade left>
            <Divider />
            </Fade>
          
        </StyledAbout>
    );
};

export default About;

const StyledAbout = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 15px 49px;
.location{
    text-align: center;
    /* color: var(--light-text); */
}
.aya-img{
    width: 220px;
    height: auto;
    align-self: center;
}
.intro{
    text-align: center;
    font-weight: 400;
    color: var(--gradient-2);
}
.about-text{
    line-height: 1.3;
    margin-bottom: 30px;
}
`;