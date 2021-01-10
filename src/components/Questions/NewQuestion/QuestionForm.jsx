import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, TextArea, Button, Form, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    background-color:  #28B463  !important;
    color: white !important;
`;

const QuestionForm = (props) => {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => console.log(data);

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
                <label>Question</label>
                <Input placeholder='Enter a question' ref={register} />
            </Form.Field>
            <Form.Field>
                <label>Answer</label>
                <TextArea name="answer" placeholder="Enter an answer" ref={register} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Delay for 5 seconds' />
            </Form.Field>
            <StyledButton>{props.buttonContent}</StyledButton>
        </Form>
    );
};

export default QuestionForm;
