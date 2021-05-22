import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router";

export const Navigation = () => {
    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        textField: {
            width: "350px"
        },
        logoItem: {
            cursor: "pointer"
        },
        searchBar: {
            display: "flex",
            alignItems: "center"
        }

    }));
    const classes = useStyles();

    let history = useHistory();

    const redirectToMainPage = () => {
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <span
                onClick={redirectToMainPage}
                className={classes.logoItem}
            >
                News App
            </span>

            <div className={classes.searchBar}>
                <SearchIcon/>
                <TextField className={classes.textField} id="input-with-icon-grid"
                           label="Type something to start search"/>
            </div>
            <Button> <MenuIcon/></Button>
        </div>
    )
}