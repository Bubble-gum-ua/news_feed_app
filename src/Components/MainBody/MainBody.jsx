import {MainNewsComponent} from "./MainNewsComponent/MainNewsComponent";
import {NewsListComponent} from "./NewsListComponent/NewsListComponent";
import './MainBody.css';


export const MainBody = () => {
    return (
        <div>
            HERE IS MAIN BODY
            <MainNewsComponent/>
            <div className="newsCardMainList">
                <NewsListComponent/>
                <NewsListComponent/>
                <NewsListComponent/>
            </div>
        </div>
    )
}