import { fork, all } from "redux-saga/effects";
import map from "lodash/map";

import questions from './Questions';

const combinedSagas = [
   questions.saga,
];

export default function* root() {
    yield all(map(combinedSagas, fork));
}