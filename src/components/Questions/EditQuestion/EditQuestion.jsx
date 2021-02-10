import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import QuestionForm from '../QuestionForm';
import ToolTip from 'Components/ToolTip';
import QuestionStore from 'Store/Questions';

const StyledContainer = styled(Container)`
    padding-top: 30px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const EditQuestion = () => {

    const editData = useSelector(state =>  state.questions.editData);

    console.log(editData, "inside Edit Question")

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        data.id = editData.id
        if(data.delay){
            dispatch(QuestionStore.actions.saveEditQuestionDelay(data));
        }else{
            dispatch(QuestionStore.actions.saveEditQuestions(data));
            dispatch(QuestionStore.actions.dataToEdit({}));
        }
       
    }

    return(
        <StyledContainer>
            <StyledDiv>
                <Header as="h3">Edit question</Header>
                <ToolTip
                    name='info circle'
                    color='blue'
                    content='Here you can edit question and answer'
                    position='right center'
                />
            </StyledDiv>
            <QuestionForm 
                buttonContent='Save Question' 
                onSubmit={onSubmit} 
                defaultValues={editData}
                key={editData.id}
            />
        </StyledContainer>
    );
};

export default EditQuestion;
