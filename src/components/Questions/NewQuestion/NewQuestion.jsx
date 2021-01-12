import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import QuestionForm from '../QuestionForm';
import ToolTip from 'Components/ToolTip';
import {v4 as uuid_v4} from 'uuid';
import QuestionStore from 'Store/Questions';

const StyledContainer = styled(Container)`
    padding-top: 30px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const NewQuestion = () => {

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        data.id=uuid_v4();
        if(data.delay){
            dispatch(QuestionStore.actions.saveNewQuestionDelay(data));
        }
        else{
            dispatch(QuestionStore.actions.createQuestion(data));
        }
    };

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
            <QuestionForm 
                buttonContent='Create Question' 
                onSubmit={onSubmit}
            />
        </StyledContainer>
    );
};

export default NewQuestion;
