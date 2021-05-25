import {useHistory} from "react-router";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import {TimeConverter} from "../../Tools/TimeConverter";

export const NewsListComponent = (props) => {

    const useStyles = makeStyles(() => ({
        root: {
            justifyContent: "center",
            maxWidth: "500px",
            boxShadow: "none",
            paddingBottom: "15px",

        },
        media: {
            width: "500px",
            height: "300px",

        },
        newsCardFooter: {
            justifyContent: "space-between"
        },
        newsCardDescription: {
            height: "130px",
            fontSize: "14px",
            fontFamily: "Inter",
            color: "rgba(113, 128, 150, 1)"
        },
        newsCardTitle: {
            height: "90px",
            fontWeight: "700",
            color: "rgba(45, 55, 72, 1)"
        },
        newsCardFooterDate:{
            color: "rgba(113, 128, 150, 1)",
            fontFamily: "Inter",
        },
        readMoreButton: {
            cursor: "pointer",
            fontFamily: "Inter",
        }
    }));

    let news = props.news;
    let history = useHistory();

    const openDetailPage = () => {
        history.push(`/${news.id}`)
    }
    let titleForRender = news.title.substr(0, 60) + '...'

    function MediaCard() {
        const classes = useStyles();
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={news.image}
                        title={news.title}
                        onClick={openDetailPage}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom variant="h5"
                            component="h2"
                            onClick={openDetailPage}
                            className={classes.newsCardTitle}
                        >
                            {titleForRender}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            className={classes.newsCardDescription}>
                            {news.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.newsCardFooter}>
                    <span className={classes.newsCardFooterDate}>
                        {TimeConverter(news.date)}
                    </span>
                    <span
                        className={classes.readMoreButton}
                        onClick={openDetailPage}>
                        Read more
                    </span>
                </CardActions>
            </Card>
        );
    }

    return (
        MediaCard()
    )
}
