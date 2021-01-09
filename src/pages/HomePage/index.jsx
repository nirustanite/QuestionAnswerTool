import React from 'react';
import Page from 'Pages/Page';
import { Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import DisplayDetails from 'Components/DisplayDetails/DisplayDetails';


const StyledHeader = styled(Header)`
    text-align: center;
`;

const HomePage = () => {
    return(
        <Page>
            <StyledHeader as="h2">The awesome Q/A tool </StyledHeader>
            <DisplayDetails />
        </Page>
    );
};

export default HomePage;
