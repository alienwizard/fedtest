import angular from 'angular';
import ArticlesModule from './articles/articles'

const ComponentsModule = angular.module('app.components', [
    ArticlesModule.name
]);

export default ComponentsModule;