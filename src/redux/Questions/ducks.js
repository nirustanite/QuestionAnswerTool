import data from 'Util/data';

export const types = {
    QUESTION_LIST_REQUESTED: 'QUESTION_LIST_REQUESTED',
    REMOVE_ALL_QUESTIONS: 'REMOVE_ALL_QUESTIONS',
    DELETE_SINGLE_QUESTION: 'DELETE_SINGLE_QUESTION',
    CREATE_QUESTION: 'CREATE_QUESTION',
    DATA_TO_EDIT: 'DATA_TO_EDIT',
    SAVE_EDIT_QUESTION: 'SAVE_EDIT_QUESTION'
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
    }),
    dataToEdit: (data) => ({
        type: types.DATA_TO_EDIT,
        data
    }),
    saveEditQuestions: (data) => ({
        type: types.SAVE_EDIT_QUESTION,
        data
    })

};

const initialState = {
    questionsList: data,
    editData: {}
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
                questionsList: [...state.questionsList, action.data]
            }
        case types.DATA_TO_EDIT:
            return{
                ...state,
                editData: action.data
            }
        case types.SAVE_EDIT_QUESTION:
            const index = state.questionsList.findIndex(el => el.id === action.data.id);
            state.questionsList[index] = {
                id: action.data.id,
                question: action.data.question,
                answer: action.data.answer
            }
            return {
                ...state
            }
        default:
            return state;
    }
}
