import {Button, makeStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {useHistory} from "react-router";
import {useState} from "react";
import "./Navigation.css"
import {getNewsByCategory, getNewsData} from "../Redux/Reducer";
import {useDispatch} from "react-redux";
import {SearchBar} from "./SearchBar/SearchBar";

export const Navigation = () => {
    const useStyles = makeStyles(() => ({
            root: {
                display: "flex",
                justifyContent: 'space-around',
                alignItems: "center",
                flexWrap: "wrap",
                height: "60px",
                marginBottom: "30px",
                fontFamily: "Inter",
            },
            textField: {
                width: "350px"
            },
            logoItem: {
                cursor: "pointer",
                position: "absolute",
                left: "60px",
                fontWeight: "700",
                fontSize: "20px"
            },
            searchBar: {
                display: "flex",
                alignItems: "center"
            },
            categoriesWrapper: {
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                cursor: "pointer",
                width: "250px"
            },
            button: {
                position: "absolute",
                right: "15px"
            },
            dropDownItems: {
                display: "flex",
                justifyContent: "space-between",
                width: "140px",
                position: "absolute",
                top: "50px",
                right: "20%",
                background: "white",
                padding: "15px",
                borderRadius: "5px",
            },
            dropdownItem: {
                "&:hover": {
                    color: "#2F80ED",
                    cursor: "pointer",
                }
            }
        }
    ));

    const classes = useStyles();

    let history = useHistory();
    const dispatch = useDispatch()

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

//here a function for hamburger ico changing :
    const iconsRender = () => {
        if (open === true) {
            return <CloseIcon/>
        }
        if (open === false) {
            return <MenuIcon/>
        }
    }
    const trendingNews = () => {
        dispatch(getNewsData('ADD'))
        history.push('/')
    }

    //here is categories list render:

    const categoriesRender = () => {
        if (open === true) {
            return (
                <div className={classes.categoriesWrapper}>
                    <div
                        onMouseOver={hoveredMenu}
                    >
                        Categories
                    </div>
                    <div onClick={trendingNews}>
                        ⚡️ Trending news
                    </div>
                </div>
            )
        }
    }

    //here is a category sorting functions:

    const sortSport = () => {
        dispatch(getNewsByCategory("sport", "SORT"))
        setHovered(false)
    }
    const sortWorld = () => {
        dispatch(getNewsByCategory("World", "SORT"))
        setHovered(false)
    }
    const sortCovid = () => {
        dispatch(getNewsByCategory("Covid", "SORT"))
        setHovered(false)
    }
    const sortBusiness = () => {
        dispatch(getNewsByCategory("Business", "SORT"))
        setHovered(false)
    }
    const sortPolitics = () => {
        dispatch(getNewsByCategory("Politics", "SORT"))
        setHovered(false)
    }
    const sortScience = () => {
        dispatch(getNewsByCategory("Science", "SORT"))
        setHovered(false)
    }
    const sortReligion = () => {
        dispatch(getNewsByCategory("Religion", "SORT"))
        setHovered(false)
    }
    const sortHealth = () => {
        dispatch(getNewsByCategory("Health", "SORT"))
        setHovered(false)
    }

//here is render of subcategories by hover:

    const subCategoryRender = () => {
        if (hovered === true) {
            return (
                <div className={`${classes.dropDownItems}  ${"arrow_box"}`}>
                    <div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortSport}
                        >
                            Sport
                        </div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortWorld}
                        >
                            World
                        </div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortCovid}
                        >
                            Covid
                        </div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortBusiness}
                        >
                            Business
                        </div>

                    </div>
                    <div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortPolitics}
                        >
                            Politics
                        </div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortScience}
                        >
                            Science
                        </div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortReligion}
                        >
                            Religion
                        </div>
                        <div
                            className={classes.dropdownItem}
                            onClick={sortHealth}
                        >
                            Health
                        </div>
                    </div>
                </div>
            )
        }
    }
    //here is render of navigation bar:
    return (
        <div className={classes.root}>
            <span
                onClick={redirectToMainPage}
                className={classes.logoItem}
            >
                News App
            </span>
            <SearchBar/>
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