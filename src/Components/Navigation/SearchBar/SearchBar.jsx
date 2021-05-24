import SearchIcon from "@material-ui/icons/Search";
import {Button, Input, makeStyles} from "@material-ui/core";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {SearchResultPage} from "../../SearchResultPage/SearchResultPage";

export const SearchBar = () => {
    const useStyles = makeStyles(() => ({
            searchBar: {
                display: "flex",
                alignItems: "flex-end",
                position: "relative"
            },
            inputField: {
                width: "350px"
            },
            searchResults: {
                position: "absolute",
                top: " 50px",
                background: "white",
                borderRadius: "5px",
                padding: "15px",
                zIndex: "1",
                boxShadow: "0px 0px 4px #BDBDBD"
            }
        }
    ));

    const classes = useStyles();
    let news = useSelector(state => state.news.news[0])
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        onSubmit: (values) => {
            if (values !== "") {

            }
            formik.resetForm()
        }
    })
    let searchInputValues = formik.values
    let autoCompleteResults = []
    if (searchInputValues.title !== "" && news) {
        for (let i = 0; i < news.length; i++) {
            let searchResult = news[i].title.includes(searchInputValues.title)
            if (searchResult === true) {
                autoCompleteResults.push(news[i])
            }
        }
    }

    function renderAutocompleteItems(autoCompleteResults) {
        let data = autoCompleteResults.map(a =>
            <div>
                <ul>
                    <li onClick={formik.resetForm}>
                        <SearchResultPage title={a} id={a.id} key={a.id}/>
                    </li>
                </ul>
            </div> )
        if(data.length > 0){
            return (
                <div className={classes.searchResults}>
                    {data}
                </div>
            )
        }
    }

    return (
        <div className={classes.searchBar}>
            <form onSubmit={formik.handleSubmit}>
                <Button type='submit'>
                    <SearchIcon/>
                </Button>
                <Input
                    className={classes.inputField}
                    placeholder='Type something to start search'
                    {...formik.getFieldProps('title')}
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
            </form>
            {renderAutocompleteItems(autoCompleteResults)}
        </div>
    )
}
