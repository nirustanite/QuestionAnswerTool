import data from 'Util/data';

export const types = {
    QUESTION_LIST_REQUESTED: 'QUESTION_LIST_REQUESTED',
    REMOVE_ALL_QUESTIONS: 'REMOVE_ALL_QUESTIONS',
    DELETE_SINGLE_QUESTION: 'DELETE_SINGLE_QUESTION',
    CREATE_QUESTION: 'CREATE_QUESTION'
};

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
    })

};

const initialState = {
    questionsList: data,
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case types.QUESTION_LIST_REQUESTED:
            return {
                ...state,
            };
        case types.REMOVE_ALL_QUESTIONS:
            return {
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
                questionsList: [...state.questionsList, action.data]
            }
        default:
            return state;
    }
}
