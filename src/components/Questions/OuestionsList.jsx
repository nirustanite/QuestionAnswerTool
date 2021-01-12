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

const StyledIcon = styled(Icon)`
   float: right;
`;

const SortButton = styled(Button)`
    background-color: #5499C7 !important;
    color: white !important;
`;

const RemoveButton = styled(Button)`
    background-color: #E74C3C !important;
    color: white !important;
    margin-left: 10px !important;
`;

// list of questions with all the events 
const QuestionList = () => {

    const [activeIndex, setActiveIndex] = useState(-1);

    const [open, setOpen] = useState(false);

    const [direction, setDirection]  = useState('asc');

    const dispatch = useDispatch();

    const questionsList = useSelector(state => state.questions.questionsList);
    const editData = useSelector(state => state.questions.editData);

    // handle click of accordion for questions to maintain the active state
    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    // event for removing all questions
    const handleRemoveAll = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    // event for handle confirm dialog box
    const handleConfirm = () => {
        setOpen(false);
        dispatch(QuestionStore.actions.removeAllQuestions());
    }

    // event for cancelling the remove functionality
    const handleCancel = () => {
        setOpen(false);
    }

    // event for deleting a single question
    const handleDelete = (id) => {
        dispatch(QuestionStore.actions.deleteSingleQuestion(id));
    }

    // event for editing the question
    const handleEdit = (data) => {
        dispatch(QuestionStore.actions.dataToEdit(data));
    }

    // event for sorting the question
    const handleSort = (data, direction) => {
        if(direction === 'asc') {
            setDirection('desc');
        }
        if(direction === 'desc'){
            setDirection('asc');
        }
        dispatch(QuestionStore.actions.sortQuestions(data, direction));
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
                                        <StyledIcon
                                            name='edit outline' 
                                            color="green" 
                                            onClick={() => handleEdit(question)}
                                        />      
                                        <StyledIcon 
                                            name='trash alternate' 
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
                        <SortButton 
                            onClick={() =>  handleSort(questionsList, direction)} 
                        >
                            Sort Questions &nbsp; <Icon 
                                name={direction === 'asc' ? "sort alphabet ascending" : "sort alphabet descending"}
                                size = 'large'
                            />
                        </SortButton>
                        <RemoveButton 
                            onClick={handleRemoveAll}
                            disabled={editData.id ? true : false}
                        > Remove Questions </RemoveButton>
                        <Confirm 
                            open={open}
                            onCancel={handleCancel}
                            onConfirm={handleConfirm}
                            size='mini'
                            content='Are you sure to remove all questions?'
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