import React from 'react';
import { Header, Container, Icon, Accordion, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Icons from './Icons';

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
    return(
        <Container>
            <Header as="h3">Created Questions</Header>
            <StyledDiv>
                <Accordion styled fluid>
                    <Accordion.Title>
                        <Icon name='dropdown' />
                        How to add a question?
                        <Icons />
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Just fill the form below!.
                        </p>
                    </Accordion.Content>
                    <Accordion.Title>
                        <Icon name='dropdown' />
                        How to add a question?
                        <Icons />
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Just fill the form below!.
                        </p>
                    </Accordion.Content>
                </Accordion>
            </StyledDiv>
            <ButtonDiv>
                <SortButton> Sort Questions </SortButton>
                <RemoveButton> Remove Questions </RemoveButton>
            </ButtonDiv>
        </Container>
    );
};

export default QuestionList;