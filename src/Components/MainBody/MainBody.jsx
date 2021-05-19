import {MainNewsComponent} from "./MainNewsComponent/MainNewsComponent";
import {NewsListComponent} from "./NewsListComponent/NewsListComponent";
import './MainBody.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNewsData} from "../Redux/Reducer";


export const MainBody = () => {
    const dispatch = useDispatch()
    let news = useSelector(state => state.news.news[0])
    console.log("news", news)
    useEffect(() => {
        dispatch(getNewsData('ADD'))
    }, [dispatch])

    let cardItem = news?.map(c => <NewsListComponent key={c.id} news={c}/>)
    return (
        <div>
            HERE IS MAIN BODY
            <MainNewsComponent/>
            <div className="newsCardMainList">
                {cardItem}
            </div>
        </div>
    )
}