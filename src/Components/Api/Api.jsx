import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://webit-news-search.p.rapidapi.com/trending',
    params: {language: 'en'},
    headers: {
        'x-rapidapi-key': '2e6c8a6e51mshe976668d1bc55dbp13043fjsnd1c9c62f686b',
        'x-rapidapi-host': 'webit-news-search.p.rapidapi.com'
    }
};


export const newsApi = {
    getNews() {
        return axios.request(options)
            .then(res => res.data)
            .catch(function (error) {
                console.error(error);
            });
    }
}


const optionsCategory = {
    method: 'GET',
    url: 'https://webit-news-search.p.rapidapi.com/search',
    params: {q: 'covid', language: 'en', number: '8', offset: '0'},
    headers: {
        'x-rapidapi-key': '2e6c8a6e51mshe976668d1bc55dbp13043fjsnd1c9c62f686b',
        'x-rapidapi-host': 'webit-news-search.p.rapidapi.com'
    }
};

axios.request(optionsCategory)
    .then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

export const newsByCategoryApi = {
    getNewsByCategoryApi() {
        return axios.request(options)
            .then(res => res.data)
            .catch(function (error) {
                console.error(error);
            });
    }
}
