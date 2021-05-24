import {useHistory} from "react-router";
import {makeStyles} from "@material-ui/core";


export const MainNewsComponent = (props) => {
    let news = props?.news[0]
    let history = useHistory()
    const openDetailPage = () => {
        history.push(`/${news.id}`)
    }
    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "15px",
            border: "1px solid #E2E2E2",
            maxWidth: "1500px",
            marginBottom: "15px",
            textAlign: "left"
        },
        descriptionWrapper: {
            maxWidth: "700px"
        },
        mainNewsFooter: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
        },
        mainNewsImage: {
            width: "457px",
            cursor: "pointer"
        },
        mainNewsTitle: {
            cursor: "pointer"
        },
        readMoreButton: {
            cursor: "pointer"
        }
    }))

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.descriptionWrapper}>
                <h3
                    onClick={openDetailPage}
                    className={classes.mainNewsTitle}
                >{news.title}</h3>
                <p>
                    {news.description}
                </p>
                <div className={classes.mainNewsFooter}>
                    <span>{news.date}</span>
                    <span
                        className={classes.readMoreButton}
                        onClick={openDetailPage}
                    >
                        Read more
                    </span>
                </div>
            </div>
            <div>
                <img
                    onClick={openDetailPage}
                    className={classes.mainNewsImage}
                    src={news.image}
                    alt="mainNewsCard"
                />
            </div>
        </div>
    )
}