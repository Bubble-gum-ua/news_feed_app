import {makeStyles} from "@material-ui/core";

export const Footer = () => {
    const useStyles = makeStyles(() => ({
           footer:{
               padding:"20px"
           }
        }
    ));

    const classes = useStyles();
    return (
        <div className={classes.footer}>
            News App 2021 copyright all rights reserved
        </div>
    )
}