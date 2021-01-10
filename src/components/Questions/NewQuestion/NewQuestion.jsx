import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import QuestionForm from './QuestionForm';
import ToolTip from 'Components/ToolTip'

const StyledContainer = styled(Container)`
    padding-top: 30px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const NewQuestion = () => {
    return(
        <StyledContainer>
            <StyledDiv>
                <Header as="h3">Create a new question</Header>
                <ToolTip
                    name='info circle'
                    color='blue'
                    content='Here you can create new questions and answers'
                    position='right center'
                />
            </StyledDiv>
            <QuestionForm buttonContent='Create Question'/>
        </StyledContainer>
    );
};

export default NewQuestion;
