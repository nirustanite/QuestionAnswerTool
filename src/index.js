import React from 'react';
import ReactDOM from "react-dom";
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import store from "./redux/store";

import 'semantic-ui-less/semantic.less';

ReactDOM.render(
        <BrowserRouter>
            <Pages />
        </BrowserRouter>,
    document.getElementById('root')
);