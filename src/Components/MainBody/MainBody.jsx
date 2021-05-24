import {MainNewsComponent} from "./MainNewsComponent/MainNewsComponent";
import {NewsListComponent} from "./NewsListComponent/NewsListComponent";
import './MainBody.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNewsData} from "../Redux/Reducer";
import {Button, Grid, makeStyles,} from "@material-ui/core";
import scrollTopImg from "../Assets/ScrollTop.png"
import {Preloader} from "../Preloader/Preloader";


export const MainBody = () => {
    const useStyles = makeStyles(() => ({
        root: {
            justifyContent: "space-around",
            textAlign: "left"
        },
        mainBodyWrapper: {
            textAlign: "-webkit-center"
        },
        scrollTopBtn: {
            display: "none",
            position: "fixed",
            bottom: "20px",
            right: "30px",
            zIndex: "99",
        }
    }));

    const classes = useStyles();
    let news = useSelector(state => state.news.news[0])
    const isLoading = useSelector(state => state.loading.isLoading)
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


    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className={classes.mainBodyWrapper}>

            <div>
                {isLoading && <Preloader/>}
                {mainCard(news)}
            </div>
            <div>
                {newsCardItem(news)}
            </div>
            <Button
                id="myBtn"
                onClick={topFunction}

                className={classes.scrollTopBtn}>
                <img src={scrollTopImg} alt="buttonIco"/>
            </Button>
        </div>
    )
}