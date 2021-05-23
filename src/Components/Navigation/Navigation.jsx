import {Button, makeStyles, TextField} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router";
import {useState} from "react";
import "./Navigation.css"

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
                position: "relative"
            },
            button: {
                position: "absolute",
                right: "15px"
            },
            dropDownItem: {
                display: "flex",
                justifyContent: "space-between",
                width: "140px",
                position: "absolute",
                top: "50px",
                right: "20%",
                background: "white",
                padding: "15px",
                cursor: "pointer",
                borderRadius: "5px"
            },
        }
    ));

    const classes = useStyles();

    let history = useHistory();

    const redirectToMainPage = () => {
        history.push('/')
    }
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(false)

    function changeIco() {
        setOpen(true)
        if (open === true) {
            setOpen(false)
            setHovered(false)
        }
    }

    function hoveredMenu() {
        setHovered(true)
        if (hovered === true) {
            setHovered(false)
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
                        onMouseOver={hoveredMenu}
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
        if (hovered === true) {
            return (
                <div className={`${classes.dropDownItem}  ${"arrow_box"}`}>
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