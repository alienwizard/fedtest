import angular from 'angular';
import ArticleItemModule from './article-item/article-item'
import {ArticlesActions} from './articles.state'
import template from './articles.html'
//our scss
import './articles.scss';
//////////////////////////////////////////////////////////
// Controller class for newsfeed
//////////////////////////////////////////////////////////

class ArticlesController {
    constructor($ngRedux, ArticlesActions, $animate) {
        'ngInject';

        this.$animate = $animate;
        this.store = $ngRedux;
        this.ArticlesActions = ArticlesActions;
    }

    $onInit(){
        const actions = Object.assign({}, this.ArticlesActions)

        this.store.connect(this.mapStateToThis, actions)(this);

        this.getArticles();

    }


    //Mapping states to the controller from the store
    mapStateToThis(state){
        return {
            articles: state.articles.articles,
            currentArticle: state.article
        }
    }


    //Actionhandler for when a article is selected
    onArticleSelected(currentArticle){
        this.selectArticle(currentArticle)
    }


    //Handler for the selected article
    isCurrentArticle(article){
        return this.currentArticle &&
            this.currentArticle.id  === article.id;
    }

}

//our component to be passed to the angular module
const articlesComponent = {
    template,
    controller:ArticlesController,
    controllerAs: 'ArticlesGridCtrl'

}



//TODO: FIX THE ANIMATIONS AND THE GRID LAYOUT

const ArticlesModule = angular.module('news', [
    ArticleItemModule.name,
    'ngAnimate'


])
    .factory('ArticlesActions', ArticlesActions)
    .component('articles', articlesComponent)
    .directive('allowAnimationsOnLoad', ['$animate', function($animate) {
        $animate.enabled(true);
    }])
    .animation('.article-item', function () {

        // should display an alert here...


        alert('hello ?');

    });

export default ArticlesModule;
