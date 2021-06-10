import {useHistory} from "react-router";
import {makeStyles} from "@material-ui/core";
import {TimeConverter} from "../../Tools/TimeConverter";


export const MainNewsComponent = (props) => {
    let news = props?.news[0]
    let history = useHistory()
    const openDetailPage = () => {
        history.push(`/${news.id}`)
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "15px",
            border: "1px solid #E2E2E2",
            maxWidth: "1500px",
            marginBottom: "15px",
            textAlign: "left",
            fontFamily: "Inter",
            color: "rgba(113, 128, 150, 1)"
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
            cursor: "pointer",
            [theme.breakpoints.up(350)]:{
                width: "350px"
            },
            [theme.breakpoints.up(1100)]:{
                width: "457px"
            },
        },
        mainNewsTitle: {
            cursor: "pointer",
            color: "rgba(45, 55, 72, 1)"
        },
        readMoreButton: {
            cursor: "pointer",
            color: "rgba(45, 55, 72, 1)"
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
                    <span>{TimeConverter(news.date)}</span>

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