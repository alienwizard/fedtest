

//////////////////////////////////////////////////////////
// constants
//////////////////////////////////////////////////////////

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_CURRENT_ARTICLE = 'GET_CURRENT_ARTICLE';



//////////////////////////////////////////////////////////
// Actions
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
// Hämtar data från local json.
// Man hade även här kunnat göra en action som hämtar data
// från ett API
/////////////////////////////////////////////////////////
const URLS = {
    FETCH: 'src/json/input.json'
}

export const ArticlesActions = ($http, $q) => {
    'ngInject';

    const extract = result => result.data;

    const getArticles = () => {
        return (dispatch, getState) => {
            const { articles } = getState();

            //simulate caching
            if(articles.length){
                return $q.when(articles)
                        .then(() => dispatch({ type: GET_ARTICLES, payload: articles}));
            }else{
                return $http.get(URLS.FETCH)
                        .then(extract)
                        .then(data => dispatch({type: GET_ARTICLES, payload: data}));
            }
        };
    };
    const selectArticle = article => {
        return {type: GET_CURRENT_ARTICLE, payload: article };
    };


    return {
        getArticles,
        selectArticle
    }

};

//////////////////////////////////////////////////////////
// Reducers that define tasks on current state and updates state
//////////////////////////////////////////////////////////
export const articles = (state = [], {type, payload}) => {
    switch (type) {
        case GET_ARTICLES:
            return payload || state;
        default:
            return state;
    }
};

export const article = (state = {}, {type, payload}) => {
    switch (type) {
        case GET_CURRENT_ARTICLE:
            return payload || {title: undefined};
        default:
            return state;
    }
};

