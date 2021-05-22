import {MainNewsComponent} from "./MainNewsComponent/MainNewsComponent";
import {NewsListComponent} from "./NewsListComponent/NewsListComponent";
import './MainBody.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNewsData} from "../Redux/Reducer";
import {Grid, makeStyles,} from "@material-ui/core";


export const MainBody = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            justifyContent: "space-around",
        },
    }));

    const classes = useStyles();
    let news = useSelector(state => state.news.news[0])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsData('ADD'))
    }, [dispatch])

    function mainCard(news) {
        if (news) {
            return (
                <MainNewsComponent news={news}/>
            )
        }
    }

    function newsCardItem(news) {
        if (news) {
            let newsArr = news.slice(1, 10)
            let cardItem = newsArr.map(c => <NewsListComponent key={c.id} news={c}/>)
            return (
                <div>
                    <Grid container className={classes.root}>
                        {cardItem}
                    </Grid>
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                {mainCard(news)}
            </div>
            <div>
                {newsCardItem(news)}
            </div>
        </div>
    )
}