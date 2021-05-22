import './App.css';
import {MainBody} from "./Components/MainBody/MainBody";
import {Navigation} from "./Components/Navigation/Navigation";
import {Route, Switch} from "react-router";
import {DetailNewsPage} from "./Components/DetailPage/DetailNewsPage";
import {Footer} from "./Components/Footer/Footer";



function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <MainBody/>
                </Route>
                <Route path="/:id">
                    <DetailNewsPage/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
