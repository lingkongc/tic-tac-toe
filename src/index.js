import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './game';


ReactDOM.render(<Game/>, document.getElementById("root"));


// 打开模块热替换(HMR)
if (module.hot) {
    module.hot.accept();
}