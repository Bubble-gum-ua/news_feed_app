import SearchIcon from "@material-ui/icons/Search";
import {Button, Input, makeStyles} from "@material-ui/core";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {SearchResultPage} from "../../SearchResultPage/SearchResultPage";

export const SearchBar = () => {
    const useStyles = makeStyles(() => ({
            searchBar: {
                display: "flex",
                alignItems: "flex-end"
            },
            inputField: {
                width: "350px"
            },
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
                return console.log("values", values)

            }
            formik.resetForm()
        }
    })
    console.log("news", news)
    let searchInputValues = formik.values
    console.log("searchInputValues", searchInputValues)
    let autoCompleteResults = []
    if (searchInputValues.title !== "" && news) {
        for (let i = 0; i < news.length; i++) {
            let searchResult = news[i].title.includes(searchInputValues.title)
            console.log("searchResult", searchResult)
            if (searchResult === true) {
                console.log("target", news[i].title)
                autoCompleteResults.push(news[i])
            }
        }
    }
    console.log("autoCompleteResults", autoCompleteResults)

    function renderAutocompleteItems (autoCompleteResults)  {
        let data = autoCompleteResults.map(a => <SearchResultPage title={a}/>)
        console.log("asd",data)
        return (
            <div>
                {data}
            </div>
        )
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
