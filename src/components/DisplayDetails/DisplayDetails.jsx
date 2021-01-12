import React, { useEffect } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import QuestionList from '../Questions/OuestionsList';
import NewQuestion from '../Questions/NewQuestion/NewQuestion';
import EditQuestion from '../Questions/EditQuestion/EditQuestion';
import QuestionStore from 'Store/Questions';


const StyledContainer = styled(Container)`
    padding-top: 20px;
    padding-left: 10%;
`;


const DisplayDetails = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(QuestionStore.actions.getQuestionList());
    },[]);

    const questionsList = useSelector(state => state.questions.questionsList);
    const editData = useSelector(state => state.questions.editData);

    return(
        <StyledContainer>
            <Grid stackable columns={2} divided>
                <Grid.Row stretched>
                    <Grid.Column style={{ width: '25%'}}>
                        <Container>
                            <p>Here you can find {questionsList.length} { questionsList.length === 1 ? 'question': 'questions'}.
                            Feel free to create your own questions!.</p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                       <QuestionList />
                       {editData.id ? <EditQuestion /> : <NewQuestion />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledContainer>
        
    );
};

export default DisplayDetails;
