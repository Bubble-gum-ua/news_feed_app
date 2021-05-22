import {Button, makeStyles, TextField} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router";
import {useState} from "react";

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
                cursor: "pointer",
                position: "absolute",
                left: "20px"
            },
            searchBar: {
                display: "flex",
                alignItems: "center"
            },
            categoriesWrapper: {
                display: "flex",
                justifyContent: "space-between",

            },
            button: {
                position: "absolute",
                right: "15px"
            },
            dropDownItem: {

                position: "absolute",
                backgroundColor: "#f1f1f1",
                minWidth: "160px",
                boxShadow: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                zIndex: "1",
            },

        }
    ));

    const classes = useStyles();

    let history = useHistory();

    const redirectToMainPage = () => {
        history.push('/')
    }
    const [open, setOpen] = useState(false)

    function changeIco() {
        setOpen(true)
        if (open === true) {
            setOpen(false)
        }
    }

    const iconsRender = () => {
        if (open === true) {
            return <CloseIcon/>
        }
        if (open === false) {
            return <MenuIcon/>
        }
    }
    const categoriesRender = () => {
        if (open === true) {
            return (
                <div className={classes.categoriesWrapper}>
                    <div
                        onMouseOver={subCategoryRender}
                    >
                        Categories
                    </div>
                    <div>
                        ⚡️ Trending news
                    </div>
                </div>
            )
        }
    }

    const subCategoryRender = () => {
        return (
            <div className={classes.dropDownItem}

            >
                <div>
                    Sport
                    World
                    Covid
                    Business
                </div>
                <div>
                    Politics
                    Science
                    Religion
                    Health
                </div>
            </div>
        )
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
            {categoriesRender()}
            {subCategoryRender()}
            <Button
                className={classes.button}
                onClick={changeIco}

            >
                {iconsRender()}
            </Button>
        </div>
    )
}