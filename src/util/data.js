const { v4: uuid_v4 } = require('uuid');

const data = [
    {
        id: uuid_v4(),
        question: "How to add a question ?",
        answer: "Just fill the form below!."
    },
];

export default data;