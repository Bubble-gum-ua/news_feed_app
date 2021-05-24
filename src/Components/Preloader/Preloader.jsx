import preloader from "../Assets/6.svg"
import {makeStyles} from "@material-ui/core";

export const Preloader = () => {

    const useStyles = makeStyles(() => ({
        root: {
            position: "absolute",
            zIndex: "99",
            left: "50%",
            top: "25%",
        }
    }));

    const classes = useStyles();
    return <div className={classes.root}>
        <img src={preloader} alt="preloader"/>
    </div>
}