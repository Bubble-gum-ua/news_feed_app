import {Button, Grid, Input, makeStyles, TextField} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

export const Navigation = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        textField: {
            width: "500px"
        }

    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <span> News App </span>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon />
                </Grid>
                <Grid item>
                    <TextField className={classes.textField} id="input-with-icon-grid" label="Type something to start search" />
                </Grid>
            </Grid>
        {/*    <Input placeholder="Type something to start search"/>*/}
            <Button> <MenuIcon/></Button>
            <Button> <CloseIcon/></Button>
        </div>
    )
}