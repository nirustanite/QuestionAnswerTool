import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
    padding-left: 20px;
`;

const Icons = () => {
    return(
        <>
            <StyledIcon name='edit outline' color="green"/>      
            <StyledIcon name='trash alternate' color='red'/>
        </>
    );
};

export default Icons;
