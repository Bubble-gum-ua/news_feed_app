import {makeStyles} from "@material-ui/core";

export const Footer = () => {
    const useStyles = makeStyles(() => ({
            footer: {
                padding: "20px",
                fontSize: "16px",
                fontFamily: "Inter",
            }
        }
    ));

    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <b>News App</b> 2021 copyright all rights reserved
        </div>
    )
}