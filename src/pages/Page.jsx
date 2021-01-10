import React from "react";
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Nav from 'Components/Nav/Nav';
import useViewport from 'Util/viewport';
import HamburgerMenu from 'Components/HamburgerMenu/HamburgerMenu';

const StyledContainer = styled(Container)`
    padding-top: 5em;
    padding-bottom: 5em;
`;

const Page = ({ children }) => {

    const { width } = useViewport();

    const breakpoint = 750;

    return (
        <React.Fragment>
            {width < breakpoint ? (
                 <HamburgerMenu child={<StyledContainer>{children}</StyledContainer>}/>
            ) : (
                <React.Fragment>
                    <Nav />
                    <StyledContainer>{children}</StyledContainer>
                </React.Fragment>
            )}
           
        </React.Fragment>
    );
};

export default Page;
