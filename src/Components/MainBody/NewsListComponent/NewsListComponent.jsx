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

export const NewsListComponent = (props) => {

    const useStyles = makeStyles(() => ({
        root: {
            justifyContent: "center",
            maxWidth: "500px",
            boxShadow: "none",
            paddingBottom: "15px"
        },
        media: {
            width: "500px",
            height: "300px"
        },
        newsCardFooter: {
            justifyContent: "space-between"
        },
        newsCardDescription: {
            height: "130px"
        },
        newsCardTitle: {
            height: "70px"
        },
        readMoreButton: {
            cursor: "pointer"
        }
    }));

    let news = props.news;
    let history = useHistory();

    const openDetailPage = () => {
        history.push(`/${news.id}`)
    }
    let titleForRender = news.title.substr(0,70) + '...'
    console.log("titleForRender",titleForRender)
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
                            color="textSecondary"
                            component="p"
                            className={classes.newsCardDescription}>
                            {news.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.newsCardFooter}>
                    <span>
                        {news.date}
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
