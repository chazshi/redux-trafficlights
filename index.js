import React, {Component} from 'react';
import {render} from 'react-dom';
import './style/App.scss';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

//add to start redux learning
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {light} from './reducers/light';
import App from './components/App';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
	color: 'green',
	time: 4
}
//Store
let store = createStore(
	light,
	initialState,
	composeWithDevTools(
		// applyMiddleware(thunk, promise, logger),
		//...
	));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'));

// require('./a.js');

// document.getElementById('root').style.background="yellow";
// document.getElementById('root').style.height="150px";


//入口文件后面要加这个，才能热加载
if (module.hot) {
  module.hot.accept();
}