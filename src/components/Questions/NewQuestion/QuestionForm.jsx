import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';
import _ from "lodash/fp";

const StyledButton = styled(Button)`
    background-color:  #28B463  !important;
    color: white !important;
`;

const StyledP = styled.p`
    color: #E74C3C !important;
    &::before {
        display: inline !important;
        content: "⚠ ";
    }    
`;

const QuestionForm = (props) => {

    const { register, handleSubmit, errors, reset } = useForm();
    
    const onSubmit = (data) => {
        props.onSubmit(data);
        reset({});
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Field>
                <label>Question</label>
                <input 
                    name="question" 
                    placeholder='Enter a question' 
                    ref={register({ required: true })}
                />
            </Form.Field>

            {_.get("question.type", errors) === "required" && (
                <StyledP>This field is required</StyledP>
            )}

            <Form.Field>
                <label>Answer</label>
                <textarea 
                    name="answer"  
                    rows="4" 
                    cols="50" 
                    placeholder="Enter an answer" 
                    ref={register({ required: true })} 
                />
            </Form.Field>

            {_.get("answer.type", errors) === "required" && (
                <StyledP>This field is required</StyledP>
            )}

            <Form.Field>
                <Checkbox label='Delay for 5 seconds' />
            </Form.Field>

            <StyledButton>{props.buttonContent}</StyledButton>
        </Form>
    );
};

export default QuestionForm;
