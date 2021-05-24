import {makeStyles} from "@material-ui/core";
import {useHistory} from "react-router";

export const SearchResultPage = (props) => {
    const useStyles = makeStyles(() => ({
            searchItem: {
                "&:hover": {
                    color: "#2F80ED",
                    cursor: "pointer",
                }
            }
        }
    ));

    const classes = useStyles();
    let history = useHistory()
    let newsTitle = props.title;

    const openDetailPage = () => {
        history.push(`/${props.id}`)
    }

    return (
        <div className={classes.searchItem} onClick={openDetailPage}>
            {newsTitle.title}
        </div>
    )
}