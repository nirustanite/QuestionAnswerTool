import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import QuestionList from '../Questions/OuestionsList';
import NewQuestion from '../Questions/NewQuestion/NewQuestion';

const StyledContainer = styled(Container)`
    padding-top: 20px;
    padding-left: 10%;
`;

const DisplayDetails = () => {
    const count = 2;

    return(
        <StyledContainer>
            <Grid stackable columns={2} divided>
                <Grid.Row stretched>
                    <Grid.Column style={{ width: '25%'}}>
                        <Container>
                            <p>Here you can find {count} { count === 1 ? 'question': 'questions'}.
                            Feel free to create your own questions!.</p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                       <QuestionList />
                       <NewQuestion />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledContainer>
        
    );
};

export default DisplayDetails;
