import data from 'Util/data';
import { takeEvery, put, delay } from "redux-saga/effects";
import compare from 'Util/compare';

//action types
export const types = {
    QUESTION_LIST_REQUESTED: 'QUESTION_LIST_REQUESTED',
    REMOVE_ALL_QUESTIONS: 'REMOVE_ALL_QUESTIONS',
    DELETE_SINGLE_QUESTION: 'DELETE_SINGLE_QUESTION',
    CREATE_QUESTION: 'CREATE_QUESTION',
    DATA_TO_EDIT: 'DATA_TO_EDIT',
    SAVE_EDIT_QUESTION: 'SAVE_EDIT_QUESTION',
    SAVE_NEW_QUESTION_DELAY: 'SAVE_NEW_QUESTION_DELAY',
    SAVE_EDIT_QUESTION_DELAY: ' SAVE_EDIT_QUESTION_DELAY',
    SORT_QUESTION_REQUESTED: 'SORT_QUESTION_REQUESTED',
    SORT_QUESTION_SUCCEEDED: 'SORT_QUESTION_SUCCEEDED'
};

// actions for questions
export const actions = {
    getQuestionList : () => ({
        type: types.QUESTION_LIST_REQUESTED,
    }),
    removeAllQuestions: () => ({
        type: types.REMOVE_ALL_QUESTIONS,
    }),
    deleteSingleQuestion: (id) => ({
        type: types.DELETE_SINGLE_QUESTION,
        id
    }),
    createQuestion: (data) => ({
        type: types.CREATE_QUESTION,
        data
    }),
    dataToEdit: (data) => ({
        type: types.DATA_TO_EDIT,
        data
    }),
    saveEditQuestions: (data) => ({
        type: types.SAVE_EDIT_QUESTION,
        data
    }),
    saveNewQuestionDelay: (data) => ({
        type: types.SAVE_NEW_QUESTION_DELAY,
        data
    }),
    saveEditQuestionDelay: (data) => ({
        type: types.SAVE_EDIT_QUESTION_DELAY,
        data
    }),
    sortQuestions: (data, direction) => ({
        type: types.SORT_QUESTION_REQUESTED,
        data,
        direction
    })
};

const initialState = {
    questionsList: data,
    editData: {},
    loading: false
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case types.QUESTION_LIST_REQUESTED:
            return {
                ...state,
            };
        case types.REMOVE_ALL_QUESTIONS:
            return {
                ...state,
                questionsList: []
            };
        case types.DELETE_SINGLE_QUESTION:
            return{
                ...state,
                questionsList: state.questionsList.filter(el =>  action.id !== el.id)
            }
        case types.CREATE_QUESTION:
            return{
                ...state,
                questionsList: [...state.questionsList, action.data],
                loading: false
            }
        case types.DATA_TO_EDIT:
            return{
                ...state,
                editData: action.data
            }
        case types.SAVE_EDIT_QUESTION:
            const index = state.questionsList.findIndex(el => el.id === action.data.id);
            console.log(index);
            state.questionsList[index] = {
                id: action.data.id,
                question: action.data.question,
                answer: action.data.answer
            }
           
            return {
                ...state,
                loading: false
            }
        case types.SAVE_NEW_QUESTION_DELAY:
            return{
                ...state,
                loading: true
            }
        case types.SAVE_EDIT_QUESTION_DELAY:
            return{
                ...state,
                loading: true
            }
        case types.SORT_QUESTION_SUCCEEDED: 
            return{
                ...state,
                questionsList: [...action.sortedData]
            }
        default:
            return state;
    }
};


export function* saga(){
    yield takeEvery(types.SAVE_NEW_QUESTION_DELAY, saveNewQuestion);
    yield takeEvery(types.SAVE_EDIT_QUESTION_DELAY, saveEditQuestion);
    yield takeEvery(types.SORT_QUESTION_REQUESTED, sortByQuestions);
};
 
// saga for delay 5 seconds for create new questions
export function* saveNewQuestion({ data }){
    try{
        yield delay(5000);
        yield put(actions.createQuestion(data));
    }
    catch(error){
       console.error(error)
    } 
};

// saga for delay 5 seconds for edit question
export function* saveEditQuestion({ data }){
    try{
        yield delay(5000);
        yield put(actions.saveEditQuestions(data));
        yield put(actions.dataToEdit({}));
    }
    catch(error){
       console.error(error)
    } 
};

// saga for sort question
export function* sortByQuestions({ data, direction }){
    try{
        if(direction === 'asc'){
            const sortedData = data.sort(compare)
            yield put({
                type: types.SORT_QUESTION_SUCCEEDED,
                sortedData
            });
        }
        if(direction === 'desc'){
            const sortedData = data.sort(compare).reverse();
            yield put({
                type: types.SORT_QUESTION_SUCCEEDED,
                sortedData
            });
        }
       
    }
    catch(error){
       console.error(error)
    } 
};

