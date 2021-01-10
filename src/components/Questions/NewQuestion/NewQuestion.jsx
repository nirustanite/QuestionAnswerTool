import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import QuestionForm from './QuestionForm';

const StyledContainer = styled(Container)`
    padding-top: 30px;
`;

const NewQuestion = () => {
    return(
        <StyledContainer>
            <Header as="h3">Create a new question</Header>
            <QuestionForm />
        </StyledContainer>
    );
};

export default NewQuestion;
