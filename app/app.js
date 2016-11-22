import 'normalize.css';
import './app.scss'
import angular from 'angular';
import template from './app.html'
import ComponentsModule from './components/components';

import { articles, article } from './components/articles/articles.state';

import { combineReducers } from 'redux';
import ngRedux from 'ng-Redux';
import ngAnimate from 'angular-animate';
import thunk from 'redux-thunk';


//combinera våra reducers för att hålla koden dry
const rootReducer = combineReducers({
    articles,
    article

})

//Vi anänder ngRedux för att koppla våra komponenter till redux
const config = $ngReduxProvider => {
    'ngInject';

    $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
}


const appComponent = {
    template
};

let appModule = angular.module('app', [
    ComponentsModule.name,
    ngRedux,
])
    .config(config)
    .component('app', appComponent)
;


export default appModule;