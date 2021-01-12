import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Container, Icon, Accordion, Button, Segment, Confirm } from 'semantic-ui-react';
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

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const questionsList = useSelector(state => state.questions.questionsList);
    const editData = useSelector(state => state.questions.editData);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    const handleRemoveAll = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    const handleConfirm = () => {
        setOpen(false);
        dispatch(QuestionStore.actions.removeAllQuestions());
    }

    const handleCancel = () => {
        setOpen(false);
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
                            {questionsList && questionsList.map((question, i) => {
                                return <React.Fragment key={i}>
                                    <Accordion.Title
                                        active={activeIndex === i}
                                        index={i}
                                        onClick={handleClick}
                                    >
                                        <Icon name='dropdown' />
                                        {question.question}  
                                        <Button 
                                            icon='edit outline' 
                                            color="green" 
                                            onClick={() => handleEdit(question)}
                                        />      
                                        <Button 
                                            icon='trash alternate' 
                                            disabled={editData.id ? true : false} 
                                            color='red' 
                                            onClick={() => handleDelete(question.id)}
                                        />
                                    </Accordion.Title>
                                    <Accordion.Content
                                        active={activeIndex === i}
                                    >
                                        <p>
                                            {question.answer}
                                        </p>
                                    </Accordion.Content>
                                </React.Fragment>
                            })}
                        </Accordion>
                    </StyledDiv>
                    <ButtonDiv>
                        <SortButton icon="sort alphabet down"/>
                        <SortButton icon="sort alphabet up"/>
                
                        <RemoveButton 
                            onClick={handleRemoveAll}
                            disabled={editData.id ? true : false}
                        > Remove All Questions </RemoveButton>
                        <Confirm 
                            open={open}
                            onCancel={handleCancel}
                            onConfirm={handleConfirm}
                            size='mini'
                        />
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