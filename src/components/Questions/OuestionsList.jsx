import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Container, Icon, Accordion, Button, Segment, IconGroup } from 'semantic-ui-react';
import styled from 'styled-components';
import QuestionStore from 'Store/Questions';
import ToolTip from '../ToolTip';


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonDiv = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 600px)  {
        flex-wrap: wrap;
    }
`;

const StyledIcon = styled(Icon)`
    padding-left: 20px;
`;

const SortButton = styled(Button)`
    background-color: #5499C7 !important;
    color: white !important;
`;

const RemoveButton = styled(Button)`
    background-color: #E74C3C !important;
    color: white !important;
`;

const QuestionList = () => {

    const [activeIndex, setActiveIndex] = useState(-1);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(QuestionStore.actions.getQuestionList());
    },[]);

    const questionsList = useSelector(state => state.questions.questionsList);

    // console.log(questionsList)

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    const handleRemoveAll = (e) => {
        e.preventDefault();
        dispatch(QuestionStore.actions.removeAllQuestions());
    }

    const handleDelete = (id) => {
        dispatch(QuestionStore.actions.deleteSingleQuestion(id));
    }

    const handleEdit = (data) => {
        dispatch(QuestionStore.actions.dataToEdit(data));
    }
    
    return(
        <Container>
            <StyledDiv>
                <Header as="h3">Created Questions </Header>
                <ToolTip
                    name='info circle'
                    color='blue'
                    content='Here you can find created questions and answers'
                    position='right center'
                />
            </StyledDiv>
            
            {questionsList.length >= 1 ? (
                <React.Fragment>
                    <StyledDiv>
                        
                        <Accordion styled fluid>
                            {questionsList && questionsList.map((questionsList, i) => {
                                // console.log(questionsList,"inside map")
                                return <React.Fragment key={i}>
                                    <Accordion.Title
                                        active={activeIndex === i}
                                        index={i}
                                        onClick={handleClick}
                                    >
                                        <Icon name='dropdown' />
                                        {questionsList.question}                                     
                                        <StyledIcon name='edit outline' color="green" onClick={() => handleEdit(questionsList)}/>      
                                        <StyledIcon name='trash alternate' color='red' onClick={() => handleDelete(questionsList.id)}/>
                                    </Accordion.Title>
                                    <Accordion.Content
                                        active={activeIndex === i}
                                    >
                                        <p>
                                            {questionsList.answer}
                                        </p>
                                    </Accordion.Content>
                                    
                                </React.Fragment>
                            })}
                        </Accordion>
                      
                    </StyledDiv>
                    <ButtonDiv>
                        <SortButton> Sort Questions </SortButton>
                        <RemoveButton onClick={handleRemoveAll}> Remove All Questions </RemoveButton>
                    </ButtonDiv>
                </React.Fragment>
            ) : (
                <Segment inverted color='red' tertiary>
                    No questions yet :(
                </Segment>
            )}
            
        </Container>
    );
};

export default QuestionList;