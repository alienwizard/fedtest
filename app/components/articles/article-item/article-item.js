import angular from 'angular';
import template from './article-item.html';
import './article-item.scss';



//Our component to be passed to the module
const articleItemComponent = {
    bindings: {
        article: '<',
        selected: '&'
    },
    template,
    controllerAs: 'articleItemCtrl',
};


const ArticleItemModule = angular.module('articleItem', [])
    .component('articleItem', articleItemComponent)
;

export default ArticleItemModule;