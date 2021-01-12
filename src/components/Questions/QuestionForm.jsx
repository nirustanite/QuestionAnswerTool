import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
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

    const loading = useSelector(state => state.questions.loading);

    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: props.defaultValues
    });

    
    const onSubmit = (data) => {
        props.onSubmit(data);
        if(data.delay){
            setTimeout(()=> {
                reset({})
            }, 5000)
        }
        else{
            reset({})
        }
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
                    <div>
                   <input type="checkbox" name="delay" id="delay" ref={register} style={{ margin: '.4rem' }}/>
                   <label htmlFor="delay" style={{ fonSize: '0.9rem'}}>Delay for 5 seconds</label>
                   </div>
            </Form.Field>

            {loading ? (<StyledButton loading>{props.buttonContent}</StyledButton>) : (<StyledButton>{props.buttonContent}</StyledButton>) }
        </Form>
    );
};

export default QuestionForm;
