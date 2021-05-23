import {newsApi} from "../Api/Api";

const ADD_NEWS = "ADD_NEWS";
const SORT_BY_CATEGORY = "SORT_BY_CATEGORY";


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
        default:
            return state
    }
}

export const addNewsData = (news) => ({type: ADD_NEWS, news})

export const getNewsData = (action) => {
    return async (dispatch) => {
        if (action === 'ADD') {
            let result = await newsApi.getNews()
            dispatch(addNewsData(result.data.results))
        }
    }
}

