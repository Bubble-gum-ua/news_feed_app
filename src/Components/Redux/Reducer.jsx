import {categoryByApi, newsApi} from "../Api/Api";

const ADD_NEWS = "ADD_NEWS";
const SORT_BY_CATEGORY = "SORT_BY_CATEGORY";
const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";


const initialState = {
    //TODO проверить почему записывает как первый элемент
    news: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            return {
                ...state,
                news: [action.news, ...state.news]
            }
        }
        case SORT_BY_CATEGORY: {
            return {
                ...state,
                news: [action.news, ...state.news]
            }
        }
        default:
            return state
    }
}

export const addNewsData = (news) => ({type: ADD_NEWS, news});
export const sortNewsByCategory = (news) => ({type: SORT_BY_CATEGORY, news})

export const getNewsData = (action) => {
    return async (dispatch) => {
        if (action === 'ADD') {
            let result = await newsApi.getNews()
            dispatch(addNewsData(result.data.results))
        }
    }
}

export const getNewsByCategory = (name,action) =>{
    return async (dispatch) =>{
        if (action === 'SORT'){
            let result = await categoryByApi.getCategories(name)
            dispatch(sortNewsByCategory(result.data.results))
        }
    }
}

